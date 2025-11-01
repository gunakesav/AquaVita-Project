# Quick Steps to Publish AquaVita Website

## 🚀 Fastest Way: Deploy to Vercel (5 minutes)

### Method 1: Using Vercel Website (No Terminal Needed!)

1. **Build your project first:**
   ```bash
   npm install
   npm run build
   ```

2. **Go to Vercel:**
   - Visit: https://vercel.com/
   - Click "Sign Up" (free with GitHub/Google/Email)

3. **Deploy:**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" OR
   - Choose "Upload" and drag your entire `AquaVita` folder
   - Vercel will auto-detect settings
   - Click "Deploy"

4. **Done!** Your site is live at: `https://aquavita.vercel.app`

---

### Method 2: Using Vercel CLI (Terminal)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (from project folder)
vercel

# For production
vercel --prod
```

---

## 🌐 Alternative: Netlify (Drag & Drop)

1. **Build:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to: https://app.netlify.com/
   - Sign up (free)
   - Drag & drop the `dist` folder
   - Done! Your site is live

---

## 📋 Pre-Deployment Checklist

Before publishing, make sure:

- [ ] EmailJS is configured (see `EMAILJS_SETUP.md`)
- [ ] Contact information is updated in Footer and ContactUs pages
- [ ] Company details are correct in AboutUs page
- [ ] All pages work correctly locally (`npm run dev`)

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Easiest setup
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Fast CDN
- ✅ Perfect for React apps
- ✅ No configuration needed

---

## 📝 After Publishing

1. **Test your live site:**
   - Visit all pages
   - Test contact form
   - Check mobile view
   - Verify EmailJS works

2. **Optional: Add Custom Domain:**
   - In Vercel/Netlify dashboard
   - Go to Domain Settings
   - Add your domain
   - Follow DNS instructions

---

## 🔗 Get Started Now!

**Quickest path:**
1. Build: `npm run build`
2. Go to: https://vercel.com/
3. Upload or connect GitHub
4. Deploy!

**Time to live: ~5 minutes!** ⚡

