const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const repoRoot = process.cwd();
const publicDir = path.join(repoRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const siteUrl = (process.env.SITE_URL || "https://www.nullraccoon.com").replace(
  /\/$/,
  "",
);

const routes = [
  {
    route: "/",
    changefreq: "monthly",
    priority: "1.0",
    files: ["public/index.html", "src/App.js", "src/pages/Home.jsx"],
  },
  {
    route: "/services",
    changefreq: "monthly",
    priority: "0.95",
    files: ["src/pages/Services.jsx", "src/App.js"],
  },
  {
    route: "/privacy",
    changefreq: "yearly",
    priority: "0.4",
    files: ["public/privacy.html"],
  },
  {
    route: "/terms",
    changefreq: "yearly",
    priority: "0.4",
    files: ["public/terms.html"],
  },
  {
    route: "/store",
    changefreq: "weekly",
    priority: "0.9",
    files: [
      "src/pages/StoreLanding.jsx",
      "src/layouts/StoreLayout.jsx",
      "src/App.js",
    ],
  },
  {
    route: "/store/products",
    changefreq: "weekly",
    priority: "0.8",
    files: ["src/pages/StoreHome.jsx", "src/utils/products.js", "src/App.js"],
  },
  {
    route: "/case-study/medtech-premier",
    changefreq: "monthly",
    priority: "0.7",
    files: ["src/components/CaseStudy.jsx", "src/App.js"],
  },
];

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const normalizeFile = (filePath) => filePath.replace(/\\/g, "/");

const getLastModifiedDate = (trackedFiles) => {
  const existingFiles = trackedFiles
    .map((filePath) => normalizeFile(filePath))
    .filter((filePath) => fs.existsSync(path.join(repoRoot, filePath)));

  if (existingFiles.length === 0) {
    return new Date().toISOString().slice(0, 10);
  }

  const gitCommand = `git log -1 --format=%cs -- ${existingFiles
    .map((filePath) => `"${filePath}"`)
    .join(" ")}`;

  try {
    const output = execSync(gitCommand, {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();

    return output || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
};

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(({ route, changefreq, priority, files }) => {
    const lastmod = getLastModifiedDate(files);
    const loc = `${siteUrl}${route}`;

    return [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
      `    <changefreq>${escapeXml(changefreq)}</changefreq>`,
      `    <priority>${escapeXml(priority)}</priority>`,
      "  </url>",
    ].join("\n");
  }),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(sitemapPath, xml, "utf8");
console.log(`Updated sitemap: ${path.relative(repoRoot, sitemapPath)}`);
