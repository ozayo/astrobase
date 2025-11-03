# Astrobase - Modern Astro & Tailwind v4 Template

👋 Welcome to **Astrobase** - a modern, fast, and responsive website template built with the latest **Astro 5.15.1** and **TailwindCSS v4**.

This is a production-ready template designed for startups, marketing websites, and landing pages. It showcases modern web development best practices with a focus on performance, accessibility, and developer experience.

## 🚀 Latest Updates

### ✨ Major Upgrades (Latest Version)
- **Astro 5.15.1** - Latest version with Island Architecture
- **TailwindCSS v4** - Next-generation utility-first CSS framework
- **DaisyUI 5.4.2** - Modern component library
- **Complete Dark Mode** - Full theme support across all components
- **Modern Components** - Updated for Tailwind v4 compatibility

## 🛠️ Tech Stack & Integrations

### Core Technologies
- **[x] Astro 5.15.1** - Modern static site generator with Island Architecture
- **[x] TailwindCSS v4** - Next-generation utility-first CSS framework
- **[x] TypeScript** - Type-safe development
- **[x] Vite** - Fast build tool and dev server

### UI & Styling
- **[x] DaisyUI 5.4.2** - Modern component library built on TailwindCSS
- **[x] Inter Font** - Beautiful typography via Fontsource
- **[x] Dark Mode** - Complete theme support with system preference detection
- **[x] Responsive Design** - Mobile-first approach

### Content & Features
- **[x] MDX Support** - Rich content with React components
- **[x] Image Optimization** - Built-in Astro Image with WebP support
- **[x] Icon System** - Astro Icons with Iconify integration
- **[x] Component Library** - Reusable, modern components

### Planned Features
- [ ] SEO Integration (astro-seo)
- [ ] Sitemap Generation
- [ ] Blog with Astro Content Collections
- [ ] Analytics Integration

## 🧩 Component Library

### Available Components
- **[x] Navbar** - Responsive navigation with mobile menu and dark mode toggle
- **[x] Hero** - Eye-catching landing sections with gradient text
- **[x] Features** - Service showcase with responsive cards
- **[x] Footer** - Clean footer with dark mode support
- **[x] Container** - Responsive wrapper component
- **[x] Link** - Stylish button components with multiple variants
- **[x] Toggle** - Modern dark mode toggle
- **[x] Card** - Versatile card components with hover effects
- **[x] Stats** - Statistics display with icons
- **[x] Logo** - Animated logo component

### Component Features
- **🎨 Dark Mode Support** - All components work in light/dark themes
- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop
- **♿ Accessible** - Proper ARIA labels and keyboard navigation
- **🔧 Customizable** - Flexible props and styling options

## 🎯 Key Features

- **⚡ Lightning Fast** - Built with Astro's static generation
- **🌙 Dark Mode** - Complete theme support with smooth transitions
- **📱 Responsive** - Mobile-first design approach
- **🎨 Modern UI** - Clean, professional design with TailwindCSS v4
- **♿ Accessible** - WCAG compliant components
- **🔧 Developer Friendly** - Clean code with TypeScript support

## 📁 Project Structure

Here's the complete project structure with all components and configurations:

```
astrobase/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── logoipsum-211.svg
│   │   └── pexels-pixabay-262488.jpeg
│   ├── components/
│   │   ├── Card.astro              # Interactive card component
│   │   ├── container.astro         # Responsive wrapper
│   │   ├── features.astro          # Service showcase
│   │   ├── footer.astro           # Site footer
│   │   ├── hero.astro             # Landing hero section
│   │   ├── link.astro             # Button component
│   │   ├── logo.astro             # Animated logo
│   │   ├── navbar.astro           # Navigation with dark mode
│   │   ├── stats.astro            # Statistics display
│   │   └── toggle.astro           # Dark mode toggle
│   ├── content/
│   │   └── blog/
│   │       └── first-blog-content-1.md
│   ├── layouts/
│   │   └── Layout.astro           # Main layout with dark mode logic
│   ├── pages/
│   │   ├── about.astro            # About page
│   │   ├── design-elements.astro  # Component showcase
│   │   └── index.astro            # Homepage
│   └── styles/
│       └── main.css               # Tailwind v4 configuration
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # TailwindCSS v4 configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** - Latest LTS version recommended
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ozayo/astrobase.git
   cd astrobase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs all dependencies                        |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro check`  | Check for TypeScript and Astro errors           |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |

## 🎨 Customization

### Dark Mode
Dark mode is built-in and automatically detects system preferences. Users can toggle manually via the navbar button.

### TailwindCSS v4
The project uses TailwindCSS v4 with modern configuration in `tailwind.config.mjs`. All components are optimized for the new syntax.

### Colors & Themes
Colors are configured through DaisyUI themes. Modify the theme in your CSS or add custom themes as needed.

## 🚀 Deployment

This project builds to static files and can be deployed to any static hosting platform:

### Netlify
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the `dist` folder to Vercel
```

### Other Platforms
- **GitHub Pages** - Use GitHub Actions for automatic deployment
- **Cloudflare Pages** - Direct deployment from Git
- **AWS S3 + CloudFront** - Static file hosting

## 📚 Learn More

- **[Astro Documentation](https://docs.astro.build)** - Official Astro docs
- **[TailwindCSS v4](https://tailwindcss.com)** - Learn the new features
- **[DaisyUI](https://daisyui.com)** - Component documentation
- **[Astro Discord](https://astro.build/chat)** - Community support
