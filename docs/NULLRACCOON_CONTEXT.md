# NullRaccoon: brand, website, and implementation context

Prepared October 27, 2026. This describes the current local implementation and decisions made with the owner. It is a handoff for another AI, designer, or developer. It is not a verification of what is currently deployed on the public domain.

## 1. What NullRaccoon is

NullRaccoon is a boutique web development and digital systems business founded by Gustavo Tello, based in Tijuana, Baja California, Mexico. The company name is **NullRaccoon**, not “NullRaccoon Studio.” Describing it as a studio or boutique software business is appropriate; appending “Studio” to its brand name is not.

The business builds custom websites, online stores, booking and management systems, internal tools, and digital platforms. It also offers maintenance, security updates, backups, and ongoing support. It has its own software platforms alongside work delivered for clients and demonstration projects.

The brand is transitioning away from “Gustavo Tello, freelance developer/student” toward an established, professional software business. The site should communicate useful solutions, delivery capability, commercial understanding, and a formal working relationship.

Do not position it as junior, a student portfolio, a course collector, or a cheap commodity developer. The former years-of-experience badge and course certifications were removed intentionally. The separate founder CV still exists for visitors interested in his professional background.

## 2. What the website is for

The main website is the business’s marketing and inquiry website. It introduces NullRaccoon, helps visitors select a service, demonstrates delivery through projects, and starts conversations with prospective clients.

Its primary conversion is a qualified project conversation, usually through WhatsApp. It is not primarily a blog, recruitment portfolio, SaaS dashboard, or retail business.

The core visitor journey is:

1. Understand and trust the business on Home.
2. Choose an engagement on Services.
3. Examine relevant work on Projects or a case study.
4. Start a WhatsApp conversation.

Visitors can contact the business directly from any of these steps. They should not need to complete a long funnel.

## 3. Audience and customer problems

The site addresses business owners and decision-makers, especially independent professionals, clinics, consultants, local businesses, brands selling online, residential-community administrators, and organizations with manual operations.

Typical problems include a weak online presence, difficulty attracting inquiries, an inconvenient buying experience, scattered appointments or customer records, manual administrative workflows, fragmented inventory information, and the burden of maintaining a website.

The tone should work for a nontechnical buyer. Explain what the customer gains before describing technologies. The intended market includes Spanish-speaking customers in Mexico/LATAM and English-speaking customers. Both English and Spanish are part of the current implementation; a geographic service footprint should not be exaggerated beyond what the owner can actually support.

## 4. Current service offering

| Service | Buyer outcome and audience | Current delivery wording |
|---|---|---|
| Websites that win customers / Webs que generan clientes | A strong, responsive presence that supports visibility and customer contact, for clinics, consultants, and local businesses | 5–10 business days |
| Stores that sell / Tiendas que venden | A smoother buying and payment experience for brands selling online; potential paid engagements include inventory and Stripe/PayPal integration | 2–3 weeks |
| Systems built for you / Sistemas a tu medida | Customer portals, booking workflows, internal dashboards, and operational automation | Phased MVP delivery |
| Support & security / Soporte y seguridad | Maintenance, security updates, backups, monitoring, and bilingual support for businesses that want help caring for their website | Starts in 48 hours |

These are service descriptions, not guarantees that every engagement includes every feature. The project scope, materials, access, schedule, and written agreement determine delivery. Do not restore the old blanket “everything launches in 5–7 days” promise or the old 3–16 week timelines.

Services intentionally has no public base-price list. The owner replaced prices with audience-fit descriptions. Scope and cost are discussed with the customer.

The full guarantees belong on Services: agreed delivery commitments, modern and maintainable implementation, ongoing maintenance/backups, and formal agreements/invoicing. Do not invent a 99.9% uptime SLA, unlimited support, or guaranteed sales growth.

## 5. Page responsibilities and routes

### Home: `/`

Job: introduce the business, build initial confidence, and route visitors.

Current content includes the studio positioning headline, a large raccoon mascot, service/contact actions, three business-need paths, two selected projects, a short founder/studio section, compact trust chips, and a closing WhatsApp CTA.

The three paths are “Win customers,” “Sell online,” and “Automate operations.” They navigate to the matching service hash rather than to another duplicate sales page.

Selected work is MedTech Premier and NullDental. These cards now lead to internal project experiences; they do not unexpectedly send visitors to external products. The founder’s personal profile is a secondary link in the studio section.

Home no longer contains the full portfolio or a full guarantees section. The former large bordered trust strip was removed. Bilingual support, agreements/invoicing, and scope-based delivery now appear as small chips beside the studio text. The closing CTA shares the studio section’s left-aligned two-column grid, with a single-column mobile layout.

### Services: `/services`

Job: help a prospect choose what to commission.

The page opens with a buying question, then shows four visual service cards. It uses four columns on wide screens, two on intermediate widths, and one on small screens. It includes project previews, short audience descriptions, icon pills, delivery badges, expandable details, and service-specific WhatsApp actions. Process, full guarantees, and buyer FAQs follow.

The cards have distinct accent colors: blue for websites, green for stores, purple for systems, and teal for support.

Restaurant and store previews have explicit “Try demo · new tab” actions. MedTech has an explicit “Read case study” action because it is not a publicly interactive medical-system demo. The redundant “Built by NullRaccoon” captions were removed.

Relevant hashes are `#custom-websites`, `#ecommerce-solutions`, `#web-applications`, and `#maintenance-support`. `#garantias` identifies the full guarantees section.

When a service hash is selected, the whole service card is the scroll target. The route manager accounts for the sticky header. The selected card and preview receive an accent highlight, and a clear-selection link is available. With motion enabled, the card makes one small upward-and-back attention movement, not a continuous bounce.

### Projects: `/projects`

Job: show the complete commercial work catalog and make its evidence clear.

Work is explicitly grouped into client projects, owned platforms, and demonstrations. Do not blend these categories or imply that demos are paying client engagements.

Cards consistently say “View project” and navigate within NullRaccoon. External product/demo visits are separate actions with new-tab labels.

### Internal platform/demo overviews

- `/projects/dental`: explains NullDental and links to the product in a new tab.
- `/projects/community`: explains NullCommunity Club and links to the product in a new tab.
- `/projects/restaurant`: explains the restaurant demonstration and links to the demo in a new tab.

Their purpose is to provide context before inviting the visitor to leave the marketing website.

### MedTech case study: `/case-study/medtech-premier`

Job: demonstrate a delivered operational system for Centro Médico Premier in Tijuana.

The system covers medical equipment inventory, QR-based traceability, maintenance coordination, equipment records, and service orders. Its implementation is PHP/MySQL/JavaScript, not React simply because the marketing site uses React.

This page was redesigned to lead with the business problem, solution, and project brief. Screenshots appear after the story, with visible enlarge controls. More screens are available through an expandable section, and a lightbox opens only on request. A large opening carousel was intentionally removed.

An existing project report is linked at `/files/medtech-premier-report.pdf`. No verified public demo URL is supplied for the medical system. Do not invent one.

### E-commerce demonstration: `/case-study/ecommerce-platform`

Job: explain the sample shopping implementation and invite visitors to explore it.

It is explicitly a demonstration, not a claimed client success story. The placeholder client identity, testimonials, percentage improvements, and backend/payment claims were removed. It describes the actual React catalog, product routes, Context API cart, quantity controls, and bilingual content.

### Store demo

- `/store` redirects to `/store/products`.
- `/store/products` displays the sample catalog and sorting control.
- `/store/product/:productId` displays one of twelve sample products.
- `/store/cart` demonstrates quantity changes, removal, and totals.

The store is a showcase of e-commerce interface capability. It is not a live retailer. There is no order backend or real payment integration, and checkout is visibly disabled. Stripe/PayPal appear in the studio’s service offering, not as working payment features in this demo.

The public catalog is now a curated six-piece audio-and-desk collection: over-ear headphones, everyday earbuds, a portable speaker, charging dock, laptop sleeve, and ambient desk light. The twelve original product URLs remain available for compatibility, but unrelated legacy products are not shown in the catalog. Prices are illustrative USD values. Cart state is in React context, not a persistent order system.

The original store presentation is light: pale gray/white surfaces, white product cards, green headings/actions, and a conventional grid. The owner specifically asked to restore and preserve its light background after the dark studio background showed through. A store-specific stylesheet now isolates that theme from the main marketing site. The demo notice and the route back to NullRaccoon remain visible.

### Other routes

- `/Portfolio/`: separate personal CV/profile. Not a commercial project card or main-navigation destination; excluded from indexing.
- `/leads`: internal prospecting tool available only in development. The module and prospect data are excluded from production bundles and source maps. This is build-time exclusion, not a remotely authenticated CRM. Do not publish the development server as a private service.
- `/privacy.html`, `/terms.html`: static website-specific legal documents. Extensionless aliases perform document navigation. The controller details supplied by the owner are in those files; do not replace them with guesses or spread personal details unnecessarily.
- `/about`: alias to Home’s studio section, not a new standalone About page.
- `/contact`: alias to Services, not a separate contact funnel.
- Unknown pages: a real not-found screen with recovery links and noindex metadata.

## 6. Current work and product destinations

| Work | Classification | External destination, if applicable |
|---|---|---|
| MedTech Premier | Client project | No public interactive system URL supplied; internal case study and report |
| NullDental | Owned clinical-management platform | `https://dental.nullraccoon.com/` |
| NullCommunity Club | Owned residential-community platform | `https://community.nullraccoon.com/` |
| Restaurant Platform | Demonstration | `https://restaurant.nullraccoon.com/` |
| E-commerce demo | Demonstration | Local `/store/products` route |

The external applications were not comprehensively audited during the local site work. Do not assume every advertised product capability has been independently verified.

## 7. Contact and navigation

Primary navigation: Home, Services, Projects, Let’s talk. Spanish equivalents are Inicio, Servicios, Proyectos, Hablemos.

Primary contact: `https://wa.me/526645789729`. Service cards prepare a relevant message. A secondary contact is `null.raccoon.tj@gmail.com` through an email link. The old quote form and its external submission flow were removed.

Floating controls provide WhatsApp, email, and language switching. They dock in a reserved footer row as the footer approaches the viewport, so they do not cover footer links, motion preferences, or copyright text. Mobile controls use safe-area spacing and adequate touch targets.

The footer includes studio navigation, social accounts, legal links, language/contact controls, and motion settings.

## 8. Visual and writing direction

The main marketing site uses a dark slate background (`#020617`), light text, blue/purple accents, restrained gradients, strong headings, generous spacing, and the raccoon mascot. Service colors help distinguish offerings. The store has a separate light theme and should not inherit the marketing site’s dark canvas.

The owner wants concise copy with visual interest. Earlier iterations were too text-heavy; an overly stripped-down version then felt flat. The accepted direction combines short text, screenshots, meaningful icons, compact pills, clear actions, and visible proof.

Avoid long technical feature lists as the first impression, repeated full-width purple buttons, empty decorative boxes, duplicate logos, redundant guarantees, and multiple pages competing to deliver the same pitch. Keep content alignment deliberate and consistent. Explain external destinations before opening them.

The voice is professional, direct, approachable, commercially focused, and bilingual. Lead with outcomes without inventing evidence. Do not add fake client logos, sales statistics, star ratings, testimonials, urgency, or availability guarantees.

## 9. Animation behavior and preferences

On Home and Services, one raccoon image travels from its hero position to the reserved header slot as the visitor scrolls. It is rendered through a portal and uses transforms and time-based easing. There is no duplicate header mascot while the large one is visible. On small screens where the hero mascot is hidden, the logo appears in the header.

The site also has subtle entrance effects, preview hover movement, and a one-time service-selection lift. Motion should guide attention, not run constantly or distract from content.

The footer provides three settings: device preference, On, and reduced motion. The choice is saved in local storage under `nullraccoon-motion`. Production defaults to the device preference; local development defaults to On for design review unless another choice was saved.

During diagnosis, Windows reported client-area animations disabled through its live API despite apparently enabled registry data. Windows and Firefox settings were not changed. Do not diagnose the actual browser preference from registry data alone; the footer reports what the browser requests. Reduced-motion users can keep a quieter experience.

## 10. Technical implementation

The repository is at `C:\\Users\\zorthon28\\Documents\\GitHub\\zorthon28.github.io`. Development uses PowerShell on Windows and `http://localhost:3000`.

It is a Create React App single-page application using React, React Router, Tailwind plus scoped custom CSS, React Helmet Async, Lucide/Heroicons, Framer Motion in parts of the demo, and a screenshot lightbox.

Installed versions inspected for this handoff: React 18.3.1, React Router DOM 6.30.3, React Scripts 5.0.1, Tailwind 1.9.6. The package manifest declares React Router DOM `^7.6.0`, while the installed runtime is 6.30.3. Inspect the lockfile and runtime before changing APIs or reinstalling dependencies.

Tailwind 1.9.6 is an important constraint: many newer utility names are unavailable. The failed `bg-gray-50` utility caused the store’s dark-background regression. Do not assume current Tailwind documentation matches this project. Scoped CSS is already used to implement unsupported styling safely.

Important files:

- `src/App.js`: routes, language initialization, anchor scrolling, development-only prospecting import.
- `src/components/Hero.jsx`: Home.
- `src/pages/Services.jsx`, `Services.css`: service selection and previews.
- `src/pages/Projects.jsx`, `ProjectDetail.jsx`: work catalog and internal product overviews.
- `src/utils/projects.js`: shared project content and destinations.
- `src/components/ProjectGrid.jsx`: shared project cards.
- `src/components/CaseStudy.jsx`, `src/pages/CaseStudy.css`: story-first case study and screenshots.
- `src/components/HeaderHero.jsx`: shared main navigation.
- `src/components/ScrollLogo.jsx`: scroll-driven mascot.
- `src/context/MotionContext.jsx`: motion preferences and footer control.
- `src/components/Footer.jsx`, `FloatingButtons.jsx`: footer and dockable controls.
- `src/pages/Studio.css`: shared marketing styles and interactions.
- `src/layouts/StoreLayout.jsx`, `StoreLayout.css`: demo shell and explicit light theme.
- `src/pages/StoreHome.jsx`, `Product.jsx`, `Cart.jsx`, `src/components/ProductCardHome.jsx`: store UI.
- `src/utils/products.js`, `src/context/CartContext.jsx`: sample product data and in-memory cart.
- `src/utils/translations.js`: shared English and Spanish strings; some pages also use bilingual inline content.
- `src/utils/contact.js`: contact destinations.
- `src/components/SiteMeta.jsx`: route metadata and indexing.
- `scripts/generate-sitemap.js`: marketing sitemap.
- `public/_redirects`, `public/404.html`: hosting route handling.

Static fallback metadata is marked for Helmet replacement to avoid contradictory tags. Marketing pages and owned-platform overviews are intended for discovery; demo pages, the CV, and internal tools are excluded from indexing/sitemap as appropriate. Unknown-path HTTP behavior depends on hosting; the CRA development server still serves an SPA fallback status.

## 11. Commands, validation, and constraints

- `npm start`: local development.
- `npm run build`: local production build and sitemap generation; does not deploy.
- `npm test`: React regression tests.
- `npm run check:site`: production-bundle integration checks; run after building.

Recorded validation includes successful production builds, seven passing React tests, and ES/EN integration checks for page roles, all twelve products, cart interactions, demo labeling, internal/external destinations, screenshot enlargement, selected-service hashes, indexing, sitemap contents, and exclusion of prospect data from production artifacts. The latest store background repair also received a scoped computed-style check and successful build.

These checks do not constitute a complete screenshot-based visual audit or production verification. Browser automation was limited by the available Windows browser environment. Known build warnings concern old Browserslist data and legacy Tailwind purge configuration.

The owner authorized publishing the accumulated website changes on October 28, 2026, after refinement and validation of the MedTech case study. The live Netlify site is connected to `Zorthon28/NullRaccoon`, branch `main` (remote `nullraccoon`). The checkout's `origin` points to a different repository. Preserve existing changes. Do not contact clients or submit real forms/orders as part of demo testing.

## 12. Current store design: premium product showroom

The owner approved the premium showroom direction, and it has now been implemented locally. The shop has a light neutral canvas, charcoal typography, restrained green accents, a featured headphone hero, six curated audio/desk products, borderless image-led cards, and a wide charging-dock feature between product rows. Product pages use oversized photography, a thumbnail rail, concise information, grouped details, and related pieces. The cart follows the same visual system.

The store header has its own shop identity, collection/details navigation, language control, and cart indicator. Studio contact controls remain in the footer while browsing store pages. The demo notice stays visible and understated.

Motion consists of coordinated hero entrances, scroll reveals, gentle image lifts, alternate-image crossfades, and button confirmation. It follows the shared animation preference. The mobile grid uses two columns with a full-width third image, and product/cart layouts stack on narrow screens. The catalog, mobile product page, and cart were visually reviewed in the in-app browser; no horizontal overflow was observed at the tested 390px viewport.

No payment, authentication, order-management, inventory-backend, or API functionality was added. Existing cart interactions are preserved. The historical showroom alternatives were playful lifestyle and precision tech; those were not selected.

## 13. MedTech case study refinement

The case study has a dedicated component and scoped style sheet. The opening uses the real, fully visible QR equipment label rather than a carousel. Concise delivered-capability statements lead into the challenge and a three-step scan/history/service workflow. Maintenance dashboard and calendar screenshots have browser frames and intentional full-image fitting. Additional screens are behind a disclosure. There is one report link and a clinic-specific contact action with a small mascot.

The report's conclusions document installation at the hospital for pilot evaluation, user and technical manuals, inventory, QR history, maintenance, and service orders. It does not provide substantiated fleet counts or measured percentage improvements. Do not add invented stats or testimonials, imply regulatory certification, or present the historical pilot as a verified current production status.

Contact controls stay docked for this route to protect screenshots and the CTA. Language switching is available near the top as well as in the footer. Both languages and the 390px layout were reviewed in the in-app browser.
