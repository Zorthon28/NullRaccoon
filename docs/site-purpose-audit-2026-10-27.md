# NullRaccoon: page purposes and local crawl

Date: 2026-10-27. Scope: the current local repository and localhost:3000. No production changes.

## Decision

Keep Home and Services, but give them different jobs. Home earns trust and routes visitors. Services helps a buyer choose an engagement. Projects proves delivery. Product demos let interested buyers explore a specific solution. Internal sales tools and a personal CV do not belong in the studio's main sales journey.

The present redundancy is structural, not just a copy problem: both Home and Services make the same studio introduction, show project previews, repeat guarantees, and offer contact. Services is now the more complete landing page, while Home is essentially a project catalog plus guarantees.

Recommended core journey: Home → Services → relevant project/case study → WhatsApp discovery conversation. Visitors can also go directly from Home or a project to WhatsApp.

## Crawl coverage and limitations

- Inspected route definitions, navigation, translated content, case-study data, all twelve product definitions, store/cart code, quote form, personal portfolio HTML and language files, legal documents, robots.txt, redirects, and sitemap.
- Requested 26 known local page URLs, including legal and portfolio aliases, plus five invalid/undefined-route probes. All returned HTTP 200. For React routes, HTTP 200 alone only confirms that the app shell is served.
- Executed the current production React bundle in JSDOM for 20 valid app URLs and five probes in both ES and EN, producing 50 render snapshots. Collected headings, links, buttons, image references, metadata, and missing hash targets.
- Separately checked /privacy and /terms through client-side navigation. Both Navigate to .html paths inside the SPA, where the wildcard shows Home. Direct document requests to /privacy.html and /terms.html return the correct static files.
- The three static documents (privacy, terms, personal portfolio) were inspected through HTTP and source; portfolio translations were read from its own language files.
- This is a route/content/navigation audit, not a screenshot, accessibility, production-hosting, payment, or legal-compliance certification. JSDOM does not establish visual layout or performance.
- Did not submit quote forms, contact prospects, invoke checkout, or crawl external domains. External dental, community, restaurant, and social links were mapped as destinations, not audited applications.
- Raw inventory: [site-crawl-2026-10-27.json](./site-crawl-2026-10-27.json).

## Page-purpose map

| Current page | Assigned purpose | Content it should own | Primary next action | Decision |
|---|---|---|---|---|
| / | Establish confidence in the studio and direct a new visitor | Concise positioning, three capability links, two selected projects, short studio introduction, compact trust summary | Explore services; WhatsApp as an immediate alternative | Keep and refocus |
| /services | Help a prospect choose the right engagement | Four service outcomes, audience fit, scope, delivery approach, process, full guarantees, buying FAQs | Discuss the selected service on WhatsApp | Keep; stop repeating the full project catalog and company introduction |
| /case-study/medtech-premier | Prove the studio can solve a concrete operational problem | Problem, actual delivered system, screenshots, implementation, supported outcomes, report | Discuss a similar project; return to projects | Keep and strengthen as the flagship case study |
| /case-study/ecommerce-platform | Demonstrate e-commerce capability honestly | Clearly labeled demo scenario, workflow, technical choices, link to store demo | Explore the demo; discuss an e-commerce build | Recast as a demo study unless client identity, metrics, and testimonial can be substantiated |
| /store | Entry point to an e-commerce demonstration | Demo label, sample shopping experience, brief explanation of what it demonstrates | Browse sample catalog | Remove the redundant store marketing landing; redirect to catalog or make catalog the entry page |
| /store/products | Demonstrate browsing and merchandising | Sample product grid, sort controls, clear demo context | Open a product | Keep inside demo only |
| /store/product/1 through /store/product/12 | Demonstrate product-detail and cart interactions | Product information, gallery, sample price, add-to-cart | Add sample item to demo cart | Keep as one reusable demo page type, not twelve studio marketing pages |
| /store/cart | Demonstrate cart management | Quantity changes, removal, totals, explicit demo checkout state | Return to catalog; ask for a similar store | Keep as demo; avoid implying orders or payments can be completed |
| /Portfolio/ and /Portfolio/index.html | Present Gustavo's personal professional history | Personal experience, education, skills, CV | Download CV or contact Gustavo professionally | Remove from commercial solution cards; keep separate from studio navigation |
| /leads | Internal prospecting and outreach workspace | Lead directory, sales scripts, statuses, CSV export | Internal sales workflow | Keep out of public navigation and sitemap; isolate behind access control if it is intended to be private |
| /privacy and /privacy.html | Explain the site's actual data practices | Accurate, finalized privacy content for the site and explicitly covered products | Return to site or use privacy contact | Keep one working canonical document route |
| /terms and /terms.html | Explain the terms governing products and services | Accurate, finalized scope and service terms | Return to site or use terms contact | Keep one working canonical document route |
| /about | No working standalone page exists | Optional future studio/team story only if it merits its own page | Contact studio | Remove broken store link now; start with a short studio section on Home |
| /contact | No working standalone page exists | No separate page needed for the current WhatsApp-first journey | WhatsApp / optional secondary form | Do not add a thin page just to fill navigation |
| Unknown routes | Explain that the requested destination does not exist | Real not-found message with useful recovery links | Home, Services, Projects | Replace wildcard Home rendering with a proper not-found screen; configure hosting status where supported |

## Proposed page to add

### /projects — proof and platforms

Visitor question: “Have you built something relevant to my business?”

Own the full portfolio here. Distinguish three kinds of work explicitly:

1. Client work: MedTech Premier, with its case study and report.
2. Proprietary platforms: NullDental and NullCommunity Club, with links to their product sites.
3. Demonstrations: restaurant and store examples, labeled as demos unless their client status is documented.

Each entry needs a screenshot, business problem, delivered capability, and one next action. A product is something a customer can use; a service is work they can hire the studio to perform. Avoid labeling all work as proprietary software automatically.

The personal CV is not a commercial platform. Keep it outside this catalog, even if the implementation itself is a portfolio design sample.

No separate /guarantees page is needed. The full guarantees belong to Services; Home can link to them through a compact trust summary.

## Content ownership: end the duplication

| Content | Home | Services | Projects / case studies |
|---|---|---|---|
| Studio positioning | Full short introduction | One-line service introduction | Only context relevant to work |
| Service categories | Three short links or teasers | Full four-service selection | Related-service link |
| Screenshots | Two selected examples | Small contextual previews only if they help selection | Full portfolio and project galleries |
| Guarantees | One concise trust strip and link | Full section; source of truth | Relevant delivery notes only |
| Process | At most a link | Full process | Project-specific implementation story |
| FAQs | None unless essential | Buyer questions | Project-specific questions only |
| WhatsApp | Primary studio CTA | Service-specific CTA | Similar-project CTA |
| Detailed technical information | Minimal | Expandable where helpful | Supported implementation detail |

Repeated navigation, a consistent CTA, and one-line reminders are useful. Repeating entire sections is what makes the pages feel interchangeable.

## Recommended Home sequence

1. Studio promise: what NullRaccoon does, who it helps, and a visible CTA.
2. Three short paths: get more leads, sell online, automate operations. Link each to a service anchor.
3. Two selected projects: one proprietary platform and MedTech Premier. Link to Projects / case study.
4. Short “the studio” block: business approach, bilingual collaboration, formal engagement. If desired, identify Gustavo as founder here without turning this into a CV.
5. One small trust summary linking to delivery and support details on Services.
6. Final WhatsApp invitation.

Remove the six-item solution catalog and full Guarantees block from Home after Projects and Services become their proper homes. Do not copy the new Services hero into Home; Home needs the studio introduction, while Services needs a clear buying question such as “What would you like to improve?”

## Recommended Services sequence

1. Buying-oriented introduction and one primary CTA.
2. Four service choices with concise outcomes, fit, timeframes, and details.
3. Relevant project links, embedded within a service or in one small proof strip; no second full portfolio.
4. Delivery process.
5. Full guarantees and support terms.
6. Buyer FAQs and final contact option.

The service images can remain: they explain what each service produces. Their job is to lead into proof, not reproduce the entire Projects page.

## Navigation

Use a consistent main navigation: Inicio / Servicios / Proyectos / Hablemos.

- Hablemos opens WhatsApp with a generic project message.
- Proyectos goes to /projects, rather than a Home anchor with a competing “solutions” meaning.
- Full guarantees remain an anchor on /services, not a top-level destination on every page.
- Personal CV link, if retained, belongs under the studio introduction or founder profile, not a product card.
- Keep legal links and social accounts in the footer.
- Demo stores get their own clearly labeled demo navigation and a visible return to NullRaccoon.
- External product sites remain product destinations. They should explain and convert for their own products rather than repeat the studio sales page.

## Findings to resolve before adding more pages

1. **Home/Services overlap.** Both pages advertise the studio and repeat guarantees. Home lists six projects, while Services uses three of them as previews. Separate their jobs before another visual redesign.
2. **Delivery promises conflict.** Home advertises guaranteed launch in 5–7 days; Services uses 5–10 business days for websites, 2–3 weeks for stores, and phased MVP delivery for systems. Home should summarize service-specific delivery rather than promise one universal timeframe.
3. **Store positioning contradicts its catalog.** Store marketing describes medical equipment and certified products, but the catalog contains shirts, stickers, a PDF bundle, and consumer electronics. Treat this as a sample store unless an actual retail business is intended.
4. **Checkout is a placeholder.** The cart's action is an alert saying checkout is coming soon. Present this as a demo, not a functioning retail/payment channel.
5. **Example case study appears unfinalized.** The e-commerce case names “Jane Smith, CEO of ShopExample” and publishes conversion/cart-abandonment improvements. Verify evidence or label it a demonstration and remove unsupported real-client implications.
6. **Published proof needs provenance.** Global structured data includes a 5-star aggregate with two ratings and fixed service prices, despite the price-free Services experience. Store copy claims hundreds of happy professionals. MedTech includes a percentage improvement and a quotation. These need supporting evidence or more factual wording; the crawl does not establish whether the claims are true.
7. **Personal and studio identities remain mixed.** The commercial project grid links to a personal CV with experience, education, and certification content. This undermines the deliberate shift away from a personal developer portfolio.
8. **Undefined pages silently show Home.** /about, /contact, and a nonsense URL all display the studio homepage. /about is linked from the store header. Missing case/product routes do show not-found content, but still return the SPA shell with HTTP 200.
9. **Legal route navigation is broken locally.** /privacy and /terms client-side Navigate to their .html paths without causing a document load. The app then renders Home at those paths. Direct .html document requests work; the host-specific _redirects file may behave differently in production, which was not audited.
10. **Legal text is not finalized.** Privacy contains an “editable example” product annex and a recommended customization annex. The legal documents describe product/account/OAuth features beyond this studio website. Assign exact scope and finalize separately; this report is not a legal review.
11. **Contact experiences differ.** Services uses bilingual WhatsApp links; the floating quote modal is English and submits through an external form service. Keep WhatsApp primary across the marketing pages, with a consistent optional secondary email/form path.
12. **Discovery and SEO are incomplete.** Sitemap omits the e-commerce case, all product-detail pages, and personal portfolio. If the store is a demo, excluding/noindexing it may be deliberate. Many routes inherit studio-wide titles, descriptions, and schema instead of their own page purpose. Update sitemap and metadata only after deciding which pages should be public and discoverable.
13. **Internal workspace is publicly routable.** /leads has noindex/nofollow, but no authentication gate was found in the router or component. Noindex is not an access boundary. It should not be part of a buyer journey.
14. **Demo polish issues remain.** Product pages expose translation keys such as AddToCart. The e-commerce case has a missing #overview target. Store landing has an empty featured-products section and an extra footer. The T-shirt image references use different filename casing from the files, which is a deployment risk on case-sensitive hosts.
15. **Unused components are not real pages.** src/pages/Home.jsx is a Tailwind test screen; Contact.jsx is a WebPro Sales placeholder. Neither is routed. Do not treat these filenames as existing destinations or expose them accidentally.

## Route appendix: every known page URL requested

| URL | Current identity | Assigned purpose |
|---|---|---|
| / | Studio hero + project catalog + guarantees | Studio orientation |
| /services | Service selector + guarantees + process + FAQ | Service selection and inquiry |
| /leads | B2B prospecting hub | Internal sales operations |
| /case-study/medtech-premier | Medical equipment management case | Delivery proof |
| /case-study/ecommerce-platform | E-commerce case with example client | Labeled demonstration or verified case |
| /store | Retail-style landing | Demo entry / redirect to catalog |
| /store/products | Catalog | Demo browsing |
| /store/product/1 | 705 T-Shirt | Demo product detail |
| /store/product/2 | Sticker Pack #1 | Demo product detail |
| /store/product/3 | Premium PDF Bundle | Demo product detail |
| /store/product/4 | Wireless Earbuds | Demo product detail |
| /store/product/5 | Fitness Tracker | Demo product detail |
| /store/product/6 | Smart Water Bottle | Demo product detail |
| /store/product/7 | Bluetooth Speaker | Demo product detail |
| /store/product/8 | Laptop Sleeve | Demo product detail |
| /store/product/9 | Wireless Charger | Demo product detail |
| /store/product/10 | LED Desk Lamp | Demo product detail |
| /store/product/11 | Portable Hard Drive | Demo product detail |
| /store/product/12 | Noise Cancelling Headphones | Demo product detail |
| /store/cart | Cart with placeholder checkout | Demo cart |
| /Portfolio/ | Gustavo Tello CV | Separate personal profile |
| /Portfolio/index.html | Same CV | Alias, not a second page |
| /privacy | React redirect route | Canonical privacy entry; fix document loading |
| /privacy.html | Static privacy document | Privacy document |
| /terms | React redirect route | Canonical terms entry; fix document loading |
| /terms.html | Static terms document | Terms document |

Additional probes: /about, /contact, /case-study/missing, /store/product/999, /not-a-real-page. All returned HTTP 200; the first, second, and last render Home.

External product destinations found in the portfolio: https://dental.nullraccoon.com/, https://community.nullraccoon.com/, https://restaurant.nullraccoon.com/. These were not crawled as part of the local repository audit.

## Implementation order

1. Agree on the Home / Services / Projects division described above.
2. Add Projects and migrate the full commercial portfolio there with honest work-type labels.
3. Refocus Home on positioning, selected proof, and routing. Keep Services focused on choosing and commissioning work.
4. Mark and isolate the store as a demo; separate the CV and internal leads tool from marketing navigation.
5. Unify navigation and contact, reconcile delivery promises, fix legal links and not-found behavior.
6. Finalize case evidence, legal content, per-page metadata, and sitemap according to the chosen public scope.

No application source was changed for this audit. Only this report and its crawl JSON were added locally.
