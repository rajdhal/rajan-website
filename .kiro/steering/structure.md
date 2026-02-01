# Project Structure

## Directory Organization

```
portfolio-website/
├── public/              # Static assets and HTML template
│   └── index.html       # Root HTML file
├── src/                 # Source code
│   ├── components/      # React components (feature-based)
│   ├── assets/          # Images, PDFs, icons
│   ├── App.js           # Main app component
│   ├── App.css          # Global app styles
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── build/               # Production build output (generated)
└── node_modules/        # Dependencies (generated)
```

## Component Architecture

Components follow a **feature-based structure** where each feature has its own folder:

```
src/components/
├── header/              # Navigation header
├── home/                # Landing section
├── about/               # About section
├── skills/              # Skills showcase
├── projects/            # Project portfolio
├── blogs/               # Blog posts
├── contact/             # Contact form
├── footer/              # Footer section
└── scrollup/            # Scroll-to-top button
```

## Component Patterns

Each component folder typically contains:
- `ComponentName.jsx` - Main component file
- `componentname.css` - Component-specific styles
- Additional sub-components or data files (e.g., `Data.jsx`, `Social.jsx`)

## File Naming Conventions

- **Components**: PascalCase for files and exports (e.g., `Header.jsx`, `export default Header`)
- **CSS**: lowercase with component name (e.g., `header.css`)
- **Assets**: descriptive lowercase names (e.g., `profile.jpg`, `barcode.png`)

## Code Style

- **Functional components** with React Hooks (`useState`, `useEffect`)
- **Arrow function syntax** for component definitions
- **CSS class naming**: BEM-inspired with underscores (e.g., `nav_menu`, `nav_link`, `active-link`)
- **Section IDs**: lowercase with hyphens for anchor navigation (e.g., `#home`, `#about`)
- **Comments**: Section markers with `/*=============== Title ===============*/`

## State Management

- Local component state using `useState`
- No global state management library (Redux, Context API not used)
- Props passed down for component communication

## Styling Approach

- **CSS Modules**: Not used
- **Scoped styles**: Component-specific CSS files imported directly
- **Global styles**: `index.css` and `App.css`
- **Responsive design**: Mobile-first with media queries
- **Animations**: CSS transitions and scroll-based effects

## Asset Management

All static assets stored in `src/assets/`:
- Images (PNG, JPG, SVG)
- PDFs (resume, documents)
- Imported directly in components using ES6 imports
