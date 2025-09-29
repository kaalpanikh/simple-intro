# Netlify Deployment Guide

## 🚀 **Netlify Deployment Steps:**

### **Method 1: Drag & Drop (Quickest)**
1. **Build your project locally**:
   ```bash
   npm run build
   ```
2. **Zip the `out` folder**:
   - Navigate to your project directory
   - Zip the `out` folder contents
3. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the zip file to the deploy area
   - Your site will be live instantly!

### **Method 2: Git Integration (Recommended)**
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio for Netlify deployment"
   git remote add origin https://github.com/kaalpanikh/simple-intro.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your `simple-intro` repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Deploy Settings** (Auto-configured):
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`

### **Method 3: Netlify CLI**
1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy**:
   ```bash
   netlify login
   netlify deploy --prod --dir=out
   ```

## ⚙️ **Configuration Files:**

### **`netlify.toml`** (Already created):
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎯 **Netlify Features You'll Get:**

### **✅ Automatic Deployments:**
- Deploys on every push to main branch
- Preview deployments for pull requests
- Instant rollbacks

### **✅ Custom Domain:**
- Free subdomain: `your-site.netlify.app`
- Custom domain support
- SSL certificate included

### **✅ Performance:**
- Global CDN
- Automatic image optimization
- Form handling
- Serverless functions

### **✅ Build Settings:**
- Node.js 18 environment
- Automatic dependency installation
- Build optimization

## 🔧 **Environment Variables (Optional):**
If you need any environment variables, add them in:
- Netlify Dashboard → Site Settings → Environment Variables

## 📊 **Build Process:**
1. **Install dependencies**: `npm install`
2. **Build project**: `npm run build`
3. **Publish**: `out` directory
4. **Deploy**: Global CDN

## 🚀 **Your Site Will Be Available At:**
- **Temporary URL**: `https://random-name.netlify.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

## 📝 **Next Steps After Deployment:**
1. **Custom Domain**: Add your domain in Netlify dashboard
2. **Analytics**: Enable Netlify Analytics
3. **Forms**: Set up form handling if needed
4. **Redirects**: Configure any redirects in `netlify.toml`

Your portfolio is now optimized for Netlify deployment! 🎉
