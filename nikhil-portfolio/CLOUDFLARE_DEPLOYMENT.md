# Cloudflare Workers Deployment Guide

## 🚀 Deploy to Cloudflare Workers

### Prerequisites
- Cloudflare account
- Node.js installed
- Git repository

### Step 1: Install Dependencies
```bash
npm install
npm install -g wrangler
```

### Step 2: Login to Cloudflare
```bash
wrangler login
```

### Step 3: Build the Application
```bash
npm run build
```

### Step 4: Deploy to Cloudflare Workers
```bash
# Deploy to production
npm run deploy

# Deploy to staging
npm run deploy:staging
```

### Step 5: Preview Locally
```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add any environment variables here
```

### Custom Domain Setup
1. Go to Cloudflare Dashboard
2. Select your Workers project
3. Go to "Settings" → "Triggers"
4. Add your custom domain
5. Update DNS records

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run deploy:staging` - Deploy to staging
- `npm run preview` - Preview with Wrangler

## 🌐 Benefits of Cloudflare Workers

- **Global Edge Network**: Deploy to 200+ cities worldwide
- **Zero Cold Starts**: Instant response times
- **Automatic Scaling**: Handle traffic spikes
- **Built-in Security**: DDoS protection, WAF
- **Custom Domains**: Easy domain setup
- **Free Tier**: Generous free limits

## 🔄 CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

## 🚀 Quick Deploy Commands

```bash
# First time setup
npm install
wrangler login
npm run build
npm run deploy

# Subsequent deployments
npm run build && npm run deploy
```

Your portfolio will be available at: `https://nikhil-portfolio.your-subdomain.workers.dev`
