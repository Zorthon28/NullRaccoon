# Copilot Instructions for zorthon28.github.io

## Project Overview

This repository contains a personal portfolio website built as a React application. It showcases professional work, certifications, projects, and includes an integrated e-commerce store for merchandise. The site is deployed on GitHub Pages and supports multiple languages (English and Spanish).

## Tech Stack

- **Frontend Framework**: React (with hooks and context)
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App (CRA)
- **Deployment**: Netlify (configured via netlify.toml)
- **Additional Libraries**: React Router for navigation, custom utilities for currency and translations

## File Structure

- `src/`: Main source code
  - `components/`: Reusable UI components (e.g., Hero, Navbar, Footer)
  - `pages/`: Page-level components (e.g., Home, Portfolio, Store)
  - `layouts/`: Layout wrappers (e.g., StoreLayout)
  - `context/`: React contexts (e.g., CartContext for e-commerce)
  - `utils/`: Utility functions (e.g., currency.js, translations.js, products.js)
  - `assets/`: Static assets like logos and images
- `public/`: Static files served directly (e.g., images, PDFs, Portfolio subfolder)
- `docs/`: Documentation files (e.g., cost_base_analysis.md)
- Root files: package.json, tailwind.config.js, etc.

## Coding Guidelines

- Use functional components with hooks (no class components).
- Follow React best practices: use useState, useEffect, useContext appropriately.
- Style with Tailwind CSS classes; avoid inline styles unless necessary.
- Maintain consistent naming: PascalCase for components, camelCase for variables/functions.
- Handle internationalization via `src/utils/translations.js`; use the `t` function for text.
- Ensure responsive design; test on mobile and desktop.
- Write clean, readable code with comments for complex logic.

## AI-Specific Instructions

- When suggesting code changes, prioritize React best practices and Tailwind utility classes.
- For new components, check existing similar components in `src/components/` for consistency.
- When adding features, consider the multilingual aspect; update translations if new text is introduced.
- For e-commerce features, reference `src/context/CartContext.jsx` and `src/utils/products.js`.
- Avoid introducing new dependencies unless absolutely necessary; stick to the existing stack.
- When refactoring, ensure changes don't break existing functionality, especially routing and state management.
- For documentation or comments, use English as the primary language.
- If there is nothing to add or modify in a code suggestion, add a comment stating "No changes needed" or similar.

## Common Patterns

- Navigation: Use React Router's Link or NavLink components.
- State Management: Use Context API for global state (e.g., cart).
- Images: Store in `public/images/` or `src/assets/`; use relative paths.
- Forms: Handle with controlled components and state.
- API Calls: If needed, use fetch or axios (though not currently implemented).

## Deployment Notes

- Build with `npm run build`; deploy via Netlify.
- Ensure all assets are optimized for web (e.g., compressed images).
- Test builds locally before pushing.

This file should be updated as the project evolves to keep Copilot aligned with current practices.
