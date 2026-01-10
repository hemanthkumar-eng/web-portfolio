# Hemanth Kumar G - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live portfolio at: [https://hemanthkumar-eng.github.io/web-portfolio/](https://hemanthkumar-eng.github.io/web-portfolio/)

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎨 Modern and clean UI
- 🔍 SEO friendly

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- next-themes
- Lucide Icons

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hemanthkumar-eng/web-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

The project is configured for static export to work with GitHub Pages:

```bash
npm run build
```

This will generate static files in the `out/` directory.

## Deployment to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `out/` directory to the `gh-pages` branch:
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

   Or use a GitHub Action to automatically deploy on push.

3. In your GitHub repository settings, go to Pages and set the source to the `gh-pages` branch.

The site will be available at: `https://hemanthkumar-eng.github.io/web-portfolio/`

## Configuration

The project is configured with:
- **basePath**: `/web-portfolio` (required for GitHub Pages)
- **output**: `export` (static export mode)
- **images**: `unoptimized: true` (required for static export)

## License

MIT
