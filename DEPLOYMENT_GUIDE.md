# Deployment Guide - Publish AquaVita Website

## Step 1: Build the Production Version

Before deploying, you need to create a production build:

```bash
npm install  # If you haven't already
npm run build
```

This creates an optimized `dist` folder with all your website files ready for deployment.

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest & Free)

**Pros:** Automatic deployments, great for React apps, free tier, easy setup

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   This will open your browser to login/signup

3. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (Your account)
   - Link to existing project? No
   - Project name? aquavita (or press Enter)
   - Directory? `./` (press Enter)
   - Override settings? No

4. **Your website will be live!**
   - You'll get a URL like: `https://aquavita.vercel.app`
   - You can add a custom domain later

**Alternative - Deploy via Vercel Website:**
1. Go to https://vercel.com/
2. Sign up/Login (free with GitHub)
3. Click "New Project"
4. Import your GitHub repository OR drag & drop the `dist` folder
5. Deploy!

---

### Option 2: Netlify (Free & Easy)

**Pros:** Drag & drop deployment, free SSL, custom domains

**Steps:**

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify:**
   - Go to https://www.netlify.com/
   - Sign up/Login (free with GitHub/Email)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder
   - Your site is live!

**OR use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

### Option 3: GitHub Pages (Free)

**Steps:**

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add to your `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Create GitHub repository:**
   - Create a new repo on GitHub
   - Push your code

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://yourusername.github.io/aquavita`

---

### Option 4: Render (Free)

**Steps:**

1. Push code to GitHub
2. Go to https://render.com/
3. Sign up/Login
4. Click "New" → "Static Site"
5. Connect your GitHub repository
6. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
7. Deploy!

---

### Option 5: Surge.sh (Simple & Free)

**Steps:**

```bash
npm install -g surge
npm run build
cd dist
surge
```

Follow prompts to create account and deploy!

---

## Important: EmailJS Configuration

⚠️ **Before deploying, make sure:**

1. EmailJS credentials are configured in `src/components/ConsultationForm.jsx`
2. EmailJS service allows your domain (check EmailJS dashboard settings)
3. CORS settings are correct in EmailJS

---

## Custom Domain Setup

All hosting platforms support custom domains:

1. **Buy a domain** (Namecheap, GoDaddy, Google Domains)
2. **In your hosting platform:**
   - Go to Domain Settings
   - Add your custom domain
   - Follow DNS configuration instructions
3. **Update DNS records** at your domain provider

---

## Environment Variables (If Needed)

If you switch to a backend later, you might need environment variables:

### Vercel:
- Project Settings → Environment Variables

### Netlify:
- Site Settings → Build & Deploy → Environment Variables

### Render:
- Environment Tab → Add Environment Variable

---

## Continuous Deployment (Recommended)

### GitHub Integration:

1. **Connect GitHub to your hosting platform:**
   - Vercel: Import from GitHub
   - Netlify: Import from GitHub
   - Render: Connect GitHub repo

2. **Automatic deployments:**
   - Every push to `main` branch = auto-deploy
   - Preview deployments for pull requests

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages work (Home, Products, Project, Knowledge, About, Contact)
- [ ] Navigation works
- [ ] Contact form is configured with EmailJS
- [ ] Mobile responsive design works
- [ ] Images and assets load
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Submit sitemap to Google Search Console (optional)

---

## Quick Deploy Commands Summary

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Deploy (choose one method)

# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist

# Surge
surge dist/

# GitHub Pages
npm run deploy
```

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/
- **GitHub Pages Docs:** https://pages.github.com/

---

## Recommended: Vercel

For React apps, **Vercel is the easiest and best option:**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free tier is generous
- Perfect for React/SPA apps
- Easy custom domains

