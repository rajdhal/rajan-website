# Technology Stack

## Core Technologies

- **React 19.1.0** - Frontend framework
- **React Scripts 5.0.1** - Build tooling (Create React App)
- **JavaScript (JSX)** - Primary language
- **CSS** - Custom styling with animations

## Key Libraries

- **@iconscout/react-unicons** - Icon library for UI elements
- **@emailjs/browser** & **emailjs-com** - Email functionality for contact form
- **@react-pdf/renderer** & **react-pdf** - PDF handling and rendering
- **yet-another-react-lightbox** - Image lightbox functionality
- **@testing-library/react** - Testing utilities

## Build System

Built with **Create React App** (react-scripts), which provides:
- Webpack bundling
- Babel transpilation
- Development server with hot reload
- Production build optimization

## Common Commands

```bash
# Development
npm start              # Start dev server at localhost:3000

# Production
npm run build          # Create optimized production build in /build
npm run predeploy      # Alias for build (runs before deploy)
npm run deploy         # Deploy to GitHub Pages

# Testing
npm test               # Run test suite in watch mode

# Advanced
npm run eject          # Eject from CRA (irreversible)
```

## Deployment

- **Platform**: GitHub Pages
- **Tool**: gh-pages package
- **URL**: https://rajdhal.github.io/portfolio-website/
- **Process**: `npm run deploy` builds and publishes to gh-pages branch

## Browser Support

- Production: >0.2% usage, not dead browsers, excludes Opera Mini
- Development: Latest Chrome, Firefox, Safari
