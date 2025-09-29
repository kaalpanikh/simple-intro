# Deployment Guide

## 🚀 Cloudflare Pages (Recommended)

### Steps:
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub account
   - Select your repository
   - Build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Click "Save and Deploy"

3. **Custom Domain (Optional):**
   - Go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

## 📄 GitHub Pages

### Steps:
1. **Build for static export:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (create this branch)
   - Folder: `/ (root)`

4. **Create gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The static files will be in the 'out' directory
```

## 📝 Notes

- **Cloudflare Pages**: Better performance, easier setup
- **GitHub Pages**: Free, but requires manual build process
- **Custom Domain**: Works with both platforms
- **SSL**: Automatically provided by both platforms
