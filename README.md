# TRIPLE D Portfolio

A responsive personal portfolio for Olufolarin Darlington, a front-end developer. The site introduces the developer, presents selected portfolio sections and services, and gives visitors direct email and WhatsApp contact options.

## Project Overview

TRIPLE D Portfolio is a single-page website intended to support professional introductions, showcase front-end development work, and make it easy for prospective clients and collaborators to get in touch.

Visitors can explore the developer introduction, technology marquee, creative gallery, About Me and Services sections, project-card sequence, and Contact section. The Contact section includes email and WhatsApp options with a prefilled message that visitors can edit before sending.

## Main Features

- **Hero section:** Developer introduction, animated TRIPLE D GIF logo, project link, and Contact Me button.
- **Responsive navigation:** Links to About, the creative gallery, Projects, and Contact. On narrow screens, the links are available through a menu toggle.
- **Technology marquee:** A looping row of React, HTML, CSS, Node.js, and TypeScript logos.
- **Creative gallery:** Two continuously moving rows of CSS-generated visual tiles.
- **About Me and Services:** Scroll-revealed content describing the developer and front-end development service.
- **Project presentation:** Three client cards with labeled visual placeholders, descriptions, and a View Project element. Project URLs and final project imagery/content have not yet been added; the View Project element is therefore displayed as unavailable until a URL is supplied.
- **Projects-to-Contact sequence:** A pinned scroll stage coordinates the project-card stacking and the Contact section's entrance.
- **Contact options:** Email and WhatsApp links include an editable prefilled collaboration message. The WhatsApp number is displayed as `+234 907 688 5001`.
- **Responsive layouts:** CSS Grid, Flexbox, fluid sizing, and media queries adapt the page to desktop, tablet, and mobile widths.
- **Motion and accessibility:** Framer Motion and CSS provide entrance, reveal, marquee, logo, and scroll effects. Reduced-motion preferences are respected, including a static project/contact layout.
- **Footer:** Developer identity and contact links.

## Technology Stack

| Technology | Role |
| --- | --- |
| [Next.js](https://nextjs.org/) 14 | React framework and application entry points using the App Router. |
| [React](https://react.dev/) 18 | Component model and interactive user interface. |
| [TypeScript](https://www.typescriptlang.org/) | Typed application components and configuration. |
| [Tailwind CSS](https://tailwindcss.com/) 3 | Utility classes used in the page and theme configuration. |
| CSS | Global styling, responsive layouts, visual treatments, and CSS keyframe animations. |
| [Framer Motion](https://www.framer.com/motion/) 11 | Hero and scroll-reveal motion, reduced-motion handling, and project/contact scroll transforms. |
| [Lucide React](https://lucide.dev/) | Interface icons, including navigation, contact, and link icons. |
| Node.js and npm | JavaScript runtime and dependency/package scripts. The repository includes an npm lockfile. |

## Project Structure

```text
personal-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── portfolio-sections.tsx
│   ├── project-contact-stage.tsx
│   └── scroll-reveal.tsx
├── public/
│   ├── technology-icons/
│   │   ├── css.svg
│   │   ├── html.svg
│   │   ├── nodejs.svg
│   │   ├── react.svg
│   │   └── typescript.svg
│   └── triple_d_animation_transparent.gif
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── triple_d_animation_transparent.gif
└── tsconfig.json
```

Generated build output and installed dependencies, such as `.next/`, `.next-dev/`, and `node_modules/`, are not source files and are omitted from this tree.

### Important files

- **`app/layout.tsx`** defines the root HTML layout, loads the global stylesheet, and sets the page metadata.
- **`app/page.tsx`** assembles the hero, primary navigation, animated logo, marquee, portfolio sections, and footer. It also handles the mobile menu and hero Contact Me button.
- **`app/portfolio-sections.tsx`** contains the creative gallery, About Me, Services, Projects heading and card content, Contact section, and footer. It also holds the portfolio copy, project data, and contact details.
- **`app/project-contact-stage.tsx`** coordinates the project cards and Contact entrance using Framer Motion scroll progress. It also provides the shared Contact navigation event and a reduced-motion static layout.
- **`app/scroll-reveal.tsx`** provides the reusable scroll-reveal component and the measured-height content wrapper used by Services.
- **`app/globals.css`** contains global styles, responsive breakpoints, section and card layouts, and CSS animations.
- **`public/`** contains static assets served from the site root. The hero references the GIF at `/triple_d_animation_transparent.gif`; technology logos are loaded from `/technology-icons/`.
- **`package.json`** defines dependencies and available npm scripts; **`package-lock.json`** records the resolved npm dependency tree.
- **`next.config.mjs`** enables React Strict Mode and uses `.next-dev` for development output and `.next` for other Next.js output.
- **`tailwind.config.ts`** defines Tailwind content paths and project color, shadow, and letter-spacing tokens.
- **`postcss.config.js`** configures Tailwind CSS and Autoprefixer.
- **`tsconfig.json`** configures strict TypeScript checking, Next.js integration, and the `@/*` path alias.
- **`.gitignore`** excludes the development and standard Next.js output directories.
- **`next-env.d.ts`** contains Next.js-generated TypeScript references.
- **`triple_d_animation_transparent.gif`** at the repository root is an additional GIF file; the page source references the copy in `public/`.

## Application Architecture

The application uses the Next.js App Router. `app/layout.tsx` wraps the route and provides metadata and global CSS. The home route in `app/page.tsx` is a client component because it uses React state, event handlers, and Framer Motion.

The page is composed in this order:

1. Hero and primary navigation
2. Technology marquee
3. Creative gallery
4. About Me
5. Services
6. Projects heading and the shared project/contact stage
7. Footer

`PortfolioSections` composes the gallery and content sections. It passes the project cards and Contact section as children to `ProjectContactStage`; the footer is rendered separately by the home route.

### Styling and responsive behavior

`app/globals.css` is the primary stylesheet. Tailwind utility classes are also used in the page, with design tokens configured in `tailwind.config.ts`. Fluid CSS values and media queries adjust layout and typography, including a two-column hero on intermediate widths and stacked layouts on small screens.

### Animation and scroll behavior

- Framer Motion animates the hero elements and reveals section content as it enters the viewport.
- CSS keyframes animate the technology marquee, creative gallery rows, logo float, and Contact Me button border.
- `ProjectContactStage` tracks scroll progress through a 450-viewport-height runway with a sticky 100vh scene. The cards and Contact use coordinated progress transforms so the cards stack before Contact moves over them.
- Contact navigation is routed through a shared event handler that calculates a scroll destination from the stage runway. With reduced motion enabled, the stage instead renders project cards and Contact in normal document flow.
- CSS `prefers-reduced-motion` rules reduce or disable several decorative animations.

## Installation and Setup

### Prerequisites

- Node.js, using a version supported by the installed Next.js 14 release. The project does not declare or pin a specific Node.js version.
- npm.
- Git, if cloning the source repository.

### Clone and install

Replace `<repository-url>` with the URL of the Git repository:

```bash
git clone <repository-url> triple-d-portfolio
cd triple-d-portfolio
npm ci
```

`npm ci` installs the dependency versions recorded in `package-lock.json`.

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the production server; run `npm run build` first. |
| `npm run lint` | Runs the Next.js lint command. |

There is no separate test or type-check script defined in `package.json`.

## Customization and Maintenance

- **Hero, navigation, and technology list:** Update `app/page.tsx`. Keep the animated logo path in sync with the asset under `public/`.
- **Section copy, services, projects, and footer:** Update the data and components in `app/portfolio-sections.tsx`.
- **Project content:** Edit the `projects` array and `ProjectCardContent` in `app/portfolio-sections.tsx`. Add the relevant project URLs and replace the current label-based visual placeholders with approved project imagery/content as needed.
- **Contact details:** Update `contactDetails` and `contactMessage` in `app/portfolio-sections.tsx`. Contact links encode the message for WhatsApp and email.
- **Images and logos:** Replace or add static files under `public/`, then update the corresponding asset paths in the application.
- **Styling and breakpoints:** Edit `app/globals.css`. Theme tokens used by Tailwind utilities are in `tailwind.config.ts`.
- **Scroll and reveal animations:** Adjust the scroll transforms in `app/project-contact-stage.tsx` and reveal behavior in `app/scroll-reveal.tsx`. Related visual rules are in `app/globals.css`; preserve reduced-motion behavior when changing animations.
- **Metadata:** Update the title and description in `app/layout.tsx`.

## Deployment

The repository includes Next.js production build and start scripts, so it can be prepared for deployment to a hosting environment that supports Next.js. The general production workflow is:

```bash
npm ci
npm run build
npm run start
```

For hosted deployment, connect or upload the repository to a Next.js-compatible platform and configure it to install dependencies and run the production build. Follow the platform's guidance for serving a Next.js application.

No hosting platform, deployment adapter, static export configuration, or application environment variables are defined in the project source. No deployment status is asserted here.

## Author and Contact

**Olufolarin Darlington**  
Front-End Developer

- Email: [darlingtondolapoolufolarin@gmail.com](mailto:darlingtondolapoolufolarin@gmail.com)
- WhatsApp: [+234 907 688 5001](https://wa.me/2349076885001)

