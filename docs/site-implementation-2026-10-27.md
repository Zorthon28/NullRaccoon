# Audit implementation

The site now has distinct roles for Home (studio trust/routing), Services (select an engagement), and Projects (proof). Full guarantees live only on Services; Home shows selected work and links to them. A shared navigation and WhatsApp-first contact flow apply throughout marketing pages. The email link is the secondary contact path; the old form submission flow was removed.

Projects distinguishes client work, owned platforms, and demonstrations. The personal CV remains separate under the founder section. The store landing redirects to its sample catalog; its layout labels every view as a demo and its checkout is disabled. All sample prices consistently use USD without live exchange-rate calls.

Placeholder e-commerce identity, metrics, and testimonials were removed. MedTech keeps documented functional outcomes and report access without an unverified percentage or quote. Global rating/price schema was removed. Service delivery claims were reconciled. Unused placeholder screens were removed.

The prospecting module is available only in development and is absent from the production bundle and source maps. This is build-time exclusion, not a claim of server-side authentication. Unknown routes have a proper not-found screen and noindex metadata; hosting rewrite rules send unknown paths to the static 404 page where supported.

Legal links now load actual documents. Website policies were narrowed to this marketing site and demo, and the controller details supplied by the user were incorporated locally. No legal entity, numeric retention policy, or availability guarantee was invented. Original templates are preserved for reference; this is not a legal compliance certification.

The sitemap includes Home, Services, Projects, MedTech, and the canonical legal documents. Demos, internal tools, and the CV are excluded. Route metadata and static fallback tags no longer compete.

Validation: production compilation, React regression tests, and scripts/check-site.js (both languages, all twelve products, add-to-cart and quantity updates, disabled checkout, project categories, links and assets, not-found routes, sitemap exclusions, and absence of prospect data from the build). No external submissions, push, or deployment were performed.

Visual browser automation is unavailable in the current Windows browser environment; the checks establish rendered content and behavior, not a screenshot-based visual audit.
