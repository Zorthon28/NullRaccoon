/* Local integration checks against the built application. No external requests or submissions. */
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { JSDOM, VirtualConsole } = require("jsdom");

const pause = () => new Promise(resolve => setTimeout(resolve, 120));

async function checkLanguage(lang) {
  const html = fs.readFileSync("build/index.html", "utf8");
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", error => errors.push(error.message));
  const dom = new JSDOM(html, { url: "http://localhost:3000/", runScripts: "outside-only", pretendToBeVisual: true, virtualConsole });
  const w = dom.window;
  Object.defineProperty(w.navigator, "language", { value: lang });
  w.fetch = async () => { throw new Error("External requests disabled in local checks"); };
  w.gtag = () => {};
  w.scrollTo = () => {};
  w.Element.prototype.scrollIntoView = () => {};
  w.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
  w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  for (const script of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    if (script[1].startsWith("/static/")) w.eval(fs.readFileSync(path.join("build", script[1]), "utf8"));
  }
  await pause();
  const d = w.document;
  async function visit(route) {
    w.history.pushState({}, "", route);
    w.dispatchEvent(new w.PopStateEvent("popstate"));
    await pause();
  }
  function validAssets() {
    for (const img of d.querySelectorAll("img[src^='/']")) {
      assert(fs.existsSync(path.join("public", img.getAttribute("src"))), "Missing image: " + img.src);
    }
  }
  try {
    assert.equal(d.querySelectorAll(".studio-project").length, 2, "Home should show selected work only");
    assert(!d.getElementById("garantias"), "Home should link to service guarantees instead of repeating them");
    assert.equal(d.querySelectorAll(".studio-paths>a").length, 3);
    const homeTitle = d.title;
    await visit("/services");
    assert.notEqual(d.title, homeTitle);
    assert.equal(d.querySelectorAll(".service-card").length, 4);
    assert(d.getElementById("garantias"));
    validAssets();
    await visit("/services#web-applications");
    assert(d.getElementById(w.location.hash.slice(1)), "Home service deep links must resolve");
    assert.equal(d.querySelector("article[data-selected='true']").id, "web-applications");
    await visit("/services#custom-websites");
    const chosen = d.querySelector("article[data-selected='true']");
    assert.equal(chosen.id, "custom-websites");
    assert.equal(chosen.querySelector(".service-browser").target, "_blank");
    assert(chosen.querySelector(".service-browser").href.includes("restaurant.nullraccoon.com"));
    assert(!d.body.textContent.includes("Built by NullRaccoon"));
    await visit("/projects");
    assert.equal(d.querySelectorAll(".studio-project").length, 5);
    assert(!d.querySelector(".studio-project a[href='/Portfolio/']"), "CV should not appear as commercial work");
    validAssets();
    for (const projectId of ["dental", "community", "restaurant"]) {
      await visit("/projects/" + projectId);
      assert(d.querySelector("h1"));
      assert(d.querySelector("a.studio-button[target='_blank']"));
      assert(d.querySelector("a[href='/projects']"));
      validAssets();
    }
    for (const id of ["medtech-premier", "ecommerce-platform"]) {
      await visit("/case-study/" + id);
      assert(d.querySelector("h1"));
      assert(d.querySelector("a[href='/projects']"));
      assert(!d.querySelector("blockquote"), "Unverified testimonials should be removed");
      assert(!/ShopExample|Jane Smith|40%|30%|2\.5 second/.test(d.body.textContent));
      validAssets();
      assert(d.querySelector(".case-story"));
      if (id === "medtech-premier") {
        assert.equal(d.querySelectorAll(".medtech-workflow ol>li").length, 3, "The QR workflow should have three clear steps");
        assert.equal(d.querySelectorAll("a[href='/files/medtech-premier-report.pdf']").length, 1, "Keep a single report destination");
        assert(d.querySelector(".medtech-label-button img"), "The real QR label should lead the case study");
        assert(d.querySelector(".studio-floating--docked"), "Contact controls must not cover case study screenshots");
        d.querySelector(".case-image-button").click();
        await pause();
        assert(d.querySelector(".yarl__root"), "Screenshot enlargement should work");
        const close = d.querySelector("button.yarl__button[title='Close']");
        if (close) { close.click(); await pause(); }
      }
      if (id === "ecommerce-platform") assert(d.querySelector("meta[name='robots']").content.includes("noindex"));
    }
    await visit("/store");
    await pause();
    assert.equal(w.location.pathname, "/store/products");
    assert(d.querySelector(".demo-banner"));
    assert.equal(d.querySelector("meta[name='robots']").content, "noindex, follow");
    assert.equal(d.querySelectorAll(".shop-product-card").length, 6, "The showroom should present a curated collection");
    assert(!d.body.textContent.includes("<br"), "Markup must not leak into visible copy");
    const sort = d.querySelector(".shop-sort select");
    sort.value = "price-asc";
    sort.dispatchEvent(new w.Event("change", { bubbles: true }));
    await pause();
    assert(d.querySelector(".shop-card-image").getAttribute("href").endsWith("/8"), "Price sorting should preserve the catalog behavior");
    assert(d.querySelector(".studio-floating--docked"), "Studio contact controls should stay clear of the shopping experience");
    for (let id = 1; id <= 12; id++) {
      await visit("/store/product/" + id);
      assert(d.querySelector("h1"), "Product " + id + " should resolve");
      assert(!d.body.textContent.includes("AddToCart"), "Translation keys must not leak");
      validAssets();
      if (id === 4) {
        const thumbnails = d.querySelectorAll(".shop-thumbnails button");
        thumbnails[1].click();
        await pause();
        assert(d.querySelector(".shop-detail-image img[data-active='true']").getAttribute("src").includes("back.jpg"), "Alternate product views should remain interactive");
      }
    }
    await visit("/store/product/1");
    const add = [...d.querySelectorAll("button")].find(button => button.textContent.trim() === (lang === "es" ? "Añadir al carrito" : "Add to Cart"));
    assert(add, "Product page needs a translated add-to-cart action");
    add.click();
    await pause();
    await visit("/store/cart");
    assert.equal(d.querySelectorAll("main li").length, 1, "Adding an item must populate the cart");
    const plus = [...d.querySelectorAll("button")].find(button => button.textContent.trim() === "+");
    assert(plus);
    plus.click();
    await pause();
    assert(/50\.00 USD/.test(d.body.textContent), "Quantity changes must update the demo total");
    assert([...d.querySelectorAll("button")].some(button => button.disabled && button.textContent.includes("Demo:")), "Demo must not offer a live checkout");
    validAssets();
    for (const route of ["/leads", "/not-a-real-page", "/case-study/missing", "/store/product/999"]) {
      await visit(route);
      assert(d.querySelector("h1").textContent.includes(lang === "es" ? "No encontramos" : "couldn’t find"), route + " must show not found");
      assert(d.querySelector("meta[name='robots']").content.includes("noindex"));
    }
    assert(!errors.length, errors.join("\n"));
    console.log(lang + ": page roles, navigation, all 12 products, cart interactions, demos, and not-found routes passed.");
  } finally {
    dom.window.close();
  }
}

async function main() {
  await checkLanguage("es");
  await checkLanguage("en");
  const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
  assert(sitemap.includes("/projects</loc>"));
  assert(!/\/store|\/leads|\/Portfolio|ecommerce-platform/.test(sitemap), "Demos and internal pages must stay out of the marketing sitemap");
  for (const file of fs.readdirSync("build/static/js").filter(name => /\.(js|map)$/.test(name))) {
    assert(!/Nova Orthodontic|LEADS_DATABASE/.test(fs.readFileSync(path.join("build/static/js", file), "utf8")), "Prospect data must not ship: " + file);
  }
  for (const file of ["privacy", "terms"]) {
    const html = fs.readFileSync("public/" + file + ".html", "utf8");
    assert(html.includes("Gustavo Francisco Tello Bernal"));
    assert(!/ejemplo editable|rellenar\/ajustar|Anexo B/.test(html));
    assert(html.includes("/" + file + ".html"));
  }
  console.log("Sitemap, production-data exclusion, and scoped legal documents passed.");
}

main().catch(error => { console.error(error); process.exitCode = 1; });
