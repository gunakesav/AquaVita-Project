# Quick Start Guide - How to View the AquaVita Website

## Step 1: Install Node.js (If not already installed)

Node.js includes npm (Node Package Manager) which is required to run the website.

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (Long Term Support) - recommended
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation:**
   - Open a **new** PowerShell/Command Prompt window
   - Run: `node --version` (should show version like v18.x.x or higher)
   - Run: `npm --version` (should show version like 9.x.x or higher)

## Step 2: Install Project Dependencies

Once Node.js is installed:

1. **Open PowerShell/Command Prompt** in the AquaVita folder:
   ```
   cd C:\Users\admin\Desktop\AquaVita
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```
   This will take 2-3 minutes to download all required packages.

## Step 3: Start the Development Server

After installation completes, run:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 4: Open in Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Navigate to: **http://localhost:5173/**
3. You should see the AquaVita website!

## Troubleshooting

### If `npm install` fails:
- Make sure you opened a **new** terminal window after installing Node.js
- Try closing and reopening your terminal/PowerShell
- Check your internet connection

### If the website doesn't load:
- Make sure the dev server is running (you should see "Local: http://localhost:5173/")
- Try refreshing the browser
- Check if port 5173 is already in use

### If you see errors:
- Make sure you're in the correct directory: `C:\Users\admin\Desktop\AquaVita`
- Try deleting `node_modules` folder and running `npm install` again

## Quick Commands Reference

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Stopping the Server

- Press `Ctrl + C` in the terminal to stop the development server

---

**Note:** The development server will automatically reload when you make changes to the code!

