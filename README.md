# Nikhil Mishra - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by Lee Robinson's design philosophy.

## 🚀 Live Demo

Visit: [https://kaalpanikh.github.io/simple-intro/](https://kaalpanikh.github.io/simple-intro/)

## Features

- 🚀 **Modern Design**: Clean, minimalist design with excellent typography
- 📱 **Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kaalpanikh/simple-intro.git
cd simple-intro
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

### Building for Production

```bash
npm run build
```

This creates a static export in the `out` directory ready for deployment.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage component
├── components/             # Reusable components
└── public/                # Static assets
```

## Customization

### Personal Information

Update the following files with your information:

1. **`src/app/layout.tsx`** - Update metadata, title, and description
2. **`src/app/page.tsx`** - Update personal information, experience, and projects

### Styling

The project uses Tailwind CSS. You can customize:

- Colors in `tailwind.config.js`
- Typography in `src/app/globals.css`
- Component styles in individual files

### Content

- **Experience**: Update the experience section with your work history
- **Projects**: Add your projects with links and descriptions
- **Blog**: Link to your writing or blog posts
- **Contact**: Update contact information and social links

## Deployment

### Netlify (Recommended)

This project is optimized for Netlify deployment:

1. **Quick Deploy**: 
   - Run `npm run build`
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com)

2. **Git Integration**:
   - Push to GitHub
   - Connect repository to Netlify
   - Automatic deployments on every push

3. **Configuration**: 
   - `netlify.toml` file included
   - Auto-detects build settings
   - Node.js 18 environment

### GitHub Pages (Alternative)

This project also supports GitHub Pages deployment:

1. **Automatic Deployment**: GitHub Actions automatically builds and deploys on every push to main
2. **Manual Deployment**: Run `npm run build` and push the `out` folder contents to your repository

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Builds the project on every push to main
- Deploys the static files to GitHub Pages
- Uses the `out` directory as the publish directory

## Performance

This portfolio is optimized for:

- ⚡ **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- 🔍 **SEO**: Optimized meta tags and structured data
- 📱 **Mobile**: Responsive design with touch-friendly interactions
- ♿ **Accessibility**: WCAG 2.1 AA compliant

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: nm30472@gmail.com
- **LinkedIn**: [nikhil-mishra-392503306](https://www.linkedin.com/in/nikhil-mishra-392503306)
- **GitHub**: [kaalpanikh](https://github.com/kaalpanikh)
- **Twitter**: [@kaalpanikhitis](https://twitter.com/kaalpanikhitis)

---

Built with ❤️ by Nikhil Mishra