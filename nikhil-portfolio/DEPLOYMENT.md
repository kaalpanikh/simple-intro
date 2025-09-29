# Deployment Guide

## 🚀 Cloudflare Pages (Recommended)

### Steps:
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add portfolio"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Connect to Git"
   - Select your GitHub repository
   - Build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Root directory**: `/` (or leave empty)

3. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be available at `https://your-project.pages.dev`

## 📄 GitHub Pages

### Steps:
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push the `out` folder:**
   - The `out` folder contains static files
   - Push this to a `gh-pages` branch or to the root of your repository

3. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select source: "Deploy from a branch"
   - Choose `gh-pages` branch or `main` branch
   - Your site will be at `https://yourusername.github.io/repository-name`

## 🔧 Local Testing

Test the static export locally:
```bash
npm run build
npx serve out
```

## 📝 Notes


