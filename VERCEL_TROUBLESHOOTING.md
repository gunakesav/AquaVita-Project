# Vercel NOT_FOUND Error Troubleshooting Guide

## Current Configuration

Your `vercel.json` is correctly configured:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Step-by-Step Troubleshooting

### 1. Verify Vercel Project Settings

Go to your Vercel Dashboard → Project Settings → General:

- **Framework Preset:** Should be "Vite" or auto-detected
- **Build Command:** Should be `npm run build` (or leave empty if auto-detected)
- **Output Directory:** Should be `dist` (or leave empty if auto-detected)
- **Install Command:** Should be `npm install` (or leave empty)

### 2. Check Build Logs

1. Go to your project in Vercel Dashboard
2. Click on the latest deployment
3. Check the "Build Logs" tab
4. Look for:
   - ✅ Build completed successfully
   - ❌ Any errors during build
   - ⚠️ Warnings about missing files

### 3. Verify Deployment Method

**If deploying via Git:**
- Make sure `vercel.json` is committed and pushed to your repository
- The file should be in the root directory
- Redeploy after committing changes

**If deploying via CLI:**
```bash
# Make sure you're in the project root
cd C:\Users\admin\Desktop\AquaVita

# Verify vercel.json exists
cat vercel.json

# Deploy
vercel --prod
```

**If deploying via drag-and-drop:**
- Make sure you're uploading the entire project folder (not just `dist`)
- Vercel needs the source files to build

### 4. Test Build Locally First

Before deploying, test that your build works:
```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173` and test all routes:
- `/`
- `/products`
- `/project`
- `/knowledge`
- `/about`
- `/contact`

### 5. Check What Error You're Getting

The NOT_FOUND error can mean different things:

**Error on all pages:**
- Build failed or files not found
- Check build logs

**Error on specific routes (e.g., `/products`):**
- Rewrite rule not working
- This is what `vercel.json` should fix

**Error when accessing the site URL:**
- Project doesn't exist or was deleted
- Check Vercel dashboard for active deployments

## Alternative Configuration to Try

If the simple rewrite doesn't work, try this more explicit configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Still Not Working?

1. **Check Vercel Status:** https://www.vercel-status.com/
2. **Clear Build Cache:**
   - Vercel Dashboard → Settings → General
   - Scroll to "Clear Build Cache"
   - Click "Clear"
   - Redeploy

3. **Verify File Structure:**
   ```
   AquaVita/
   ├── vercel.json (should be here)
   ├── package.json
   ├── vite.config.js
   ├── index.html
   ├── src/
   └── dist/ (generated after build)
   ```

4. **Check for Conflicting Files:**
   - Remove or rename `netlify.toml` if deploying to Vercel
   - The `dist/_redirects` file is for Netlify, not Vercel

5. **Contact Vercel Support:**
   - Share your deployment URL
   - Share your build logs
   - Mention you're using Vite + React Router

## Quick Fix Attempts

### Attempt 1: Simplest Config (Current)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Attempt 2: With Framework Detection
```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Attempt 3: Fully Explicit
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## What to Share for Help

If you still have issues, provide:
1. **Deployment URL** (e.g., `https://your-project.vercel.app`)
2. **Build Logs** (screenshot or copy/paste)
3. **Which pages show NOT_FOUND** (all pages or specific routes?)
4. **How you deployed** (Git, CLI, or drag-and-drop?)
5. **Vercel Dashboard screenshot** of Build Settings

