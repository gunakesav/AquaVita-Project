# AquaVita Website

Modern water purification company website with glassmorphism design and transparent bubble theme.

## Features

- 🎨 **Glassmorphism Design**: Beautiful transparent bubble-themed UI
- 📱 **Fully Responsive**: Works on Desktop, Tablet, and Mobile
- 🚀 **Modern Tech Stack**: React.js, Tailwind CSS, Framer Motion
- 📧 **Email Integration**: Contact form with EmailJS support
- 🎯 **SEO Optimized**: Meta tags and semantic HTML
- ⚡ **Fast Performance**: Optimized for speed

## Tech Stack

- **React 18+**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **EmailJS**: Email service integration
- **React Hook Form**: Form handling and validation
- **Lucide React**: Icon library
- **Vite**: Build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS (Optional):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update `src/components/ConsultationForm.jsx` with your credentials:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams,
     'YOUR_PUBLIC_KEY'
   );
   ```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
aquavita-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ConsultationForm.jsx
│   │   └── FloatingBubbles.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Project.jsx
│   │   ├── Knowledge.jsx
│   │   ├── AboutUs.jsx
│   │   └── ContactUs.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Pages

1. **Home**: Hero section, featured products, value propositions, statistics
2. **Products**: Product showcase with consultation form
3. **Project**: Completed projects gallery and case studies
4. **Knowledge**: Blog articles, guides, FAQ, downloadable resources
5. **About Us**: Company story, mission, vision, timeline, certifications
6. **Contact Us**: Contact information and consultation form

## Design Features

- **Glassmorphism Effects**: Transparent cards with backdrop blur
- **Floating Animations**: Smooth bubble animations throughout
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Form Validation**: Comprehensive validation with error messages
- **Loading States**: Beautiful loading animations
- **Hover Effects**: Interactive elements with smooth transitions

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{product_need}}`
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{customer_phone}}`
   - `{{message}}`
   - `{{submitted_on}}`
4. Get your Public Key from EmailJS dashboard
5. Update the credentials in `ConsultationForm.jsx`

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
Any static hosting service that supports SPA routing will work.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact: gunakesav.s@gmail.com
