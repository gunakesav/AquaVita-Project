# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Note down your **Service ID** (e.g., `service_xxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Consultation Request - AquaVita

New Consultation Request

Product Needed: {{product_need}}
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Message: {{message}}

Submitted on: {{submitted_on}}
```

4. Set **To Email** to: `gunakesav.s@gmail.com`
5. Set **From Name** to: `AquaVita Website`
6. Set **From Email** to your connected email
7. Save the template
8. Note down your **Template ID** (e.g., `template_xxxxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Update Code

Open `src/components/ConsultationForm.jsx` and replace these placeholders:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',      // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'        // Replace with your Public Key
);
```

## Step 6: Test

1. Start your development server: `npm run dev`
2. Navigate to the Contact page or Products page
3. Fill out the consultation form
4. Submit and check your email inbox

## Troubleshooting

- **Email not received**: Check spam folder
- **Template variables not working**: Ensure variable names match exactly (case-sensitive)
- **Service connection failed**: Reconnect your email service in EmailJS dashboard
- **CORS errors**: Make sure you're using the correct Public Key

## Free Tier Limits

- 200 emails/month on free tier
- Upgrade for more emails if needed

## Alternative: Node.js Backend

If you prefer a backend solution instead of EmailJS:

1. Create a Node.js/Express server
2. Use Nodemailer for email sending
3. Set up environment variables for email credentials
4. Create an API endpoint for form submissions
5. Update `ConsultationForm.jsx` to call your API instead

See the PRD for Nodemailer example code.
