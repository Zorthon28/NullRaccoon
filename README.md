# NullRaccoon studio website

React site with Spanish and English content. Building generates local assets; pushing to the connected NullRaccoon repository's main branch triggers Netlify deployment.

## Local development

- Run npm start and open http://localhost:3000.
- Run npm run build to generate the local build/ directory and marketing sitemap.
- Run npm test for the React regression tests.
- After building, run npm run check:site for the ES/EN production-bundle route and cart checks. These checks disable external requests and do not submit forms or payments.

## Page responsibilities

- /: studio introduction, three service paths, two selected projects, founder context, compact trust summary.
- /services: four engagements, service-specific delivery, process, full guarantees, buyer FAQs, WhatsApp.
- /projects: full catalog, explicitly separated into client work, owned platforms, and demonstrations.
- /case-study/medtech-premier: flagship delivered system and report.
- /case-study/ecommerce-platform: labeled demonstration with no real-client metrics or payment claims.
- /store/products, /store/product/:id, /store/cart: sample shopping interactions. No orders or payments are accepted. /store redirects to the catalog.
- /Portfolio/: independent personal CV, linked only from the founder section; excluded from the commercial project catalog and search indexing.
- /privacy.html and /terms.html: canonical static documents. The extensionless routes perform a full document navigation locally.
- /leads: development-only internal workspace. Its module and prospect data are excluded from production builds. This is not a remotely authenticated CRM; do not publish a development server as a private service.
- Unknown routes render a not-found page. Netlify-compatible rewrite rules preserve the marketing/demo routes and send unknown paths to a 404 response. Local CRA development responses still use the SPA fallback HTTP status.

## Content and navigation

Shared navigation lives in src/components/HeaderHero.jsx. Project content is defined once in src/utils/projects.js and reused by Home and Projects. Services owns the delivery and guarantee details. Shared contact destinations are in src/utils/contact.js; service-specific WhatsApp messages remain in Services.

SiteMeta owns route-level canonical, social, language, and indexing tags. Static fallback metadata is marked for Helmet replacement to prevent duplicate/conflicting tags. The marketing sitemap intentionally excludes sample stores, demos, the CV, and the internal workspace.

## Review records

The original audit and crawl are under docs/. Legal template originals are retained under docs/legal-reference/. The current website policies are limited to this site's actual functionality; linked software platforms need their own policies. See docs/legal-review.md for operational review scope.

## Project exploration and hero logo

Home and Projects cards open internal project overviews. /projects/dental, /projects/community, and /projects/restaurant explain the work before offering an explicitly labeled live-site action in a new tab. Case studies stay under /case-study/.

Home service paths use /services#service-id. The target ID is on the whole service card, which stays highlighted while that hash is selected. A clear-selection link removes the highlight. The route scroll manager positions the card below the measured sticky header after the initial language/layout pass.

On hero pages, ScrollLogo paints one fixed image through a portal and interpolates its position and size between a reserved hero anchor and header slot. It updates on scroll/resize, respects reduced motion, and places the logo directly in the header when the hero visual is hidden on small screens.

MedTech presents the project narrative before screenshots. Screenshots are individually labeled and enlarge on request; the lightbox is not the opening experience.

The MedTech case study now leads with its actual QR label, followed by a scan/history/service workflow and focused maintenance screens. Its report supports the documented hospital pilot and delivered manuals, without invented performance metrics. The PDF has one destination, and contact controls dock in the footer while a page-level language control remains available.

## Motion settings

The footer offers Animations: device preference, On, or reduced motion. The choice is saved only in this browser for this site. Production defaults to the device preference. Local development defaults to On for design review unless the user saved another choice. The UI displays what the browser currently requests.

Windows client-area animation state can differ from its persisted registry value; the live SystemParametersInfo getter is authoritative for the current session. No Windows or Firefox preferences are changed by this site. Logo movement has time-based easing to stay visible with coarse mouse-wheel scrolling.

## Premium store showroom

The store catalog now features six audio/desk pieces defined in src/utils/showroom.js. All twelve legacy product URLs remain available. Product pages, sorting, cart quantities, and disabled checkout keep the existing demo-only behavior. The visual system is isolated in src/layouts/StoreLayout.css. ShopReveal and CSS use the shared motion preference; alternate product images crossfade on hover/focus, and product thumbnails remain keyboard-accessible buttons. Studio floating controls dock in the footer throughout store routes, with language switching also available in the shop header.
