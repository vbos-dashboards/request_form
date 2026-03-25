# EmailJS Setup Guide

Follow these steps to configure email functionality for your request form:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click on "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the instructions to connect your email account
5. **Save the Service ID** - you'll need this later

### For Gmail:
- Make sure to enable "Less secure app access" or use an App Password
- Go to your Google Account settings
- Security → 2-Step Verification → App passwords
- Generate a new app password for "Mail"

## Step 3: Create Email Template

1. In your EmailJS dashboard, click on "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}}

New Information Request Received
=====================================

Contact Information:
-------------------
Name: {{from_name}}
Email: {{from_email}}
Institution/Company: {{institution}}
Address: {{address}}
Phone: {{phone}}

Request Details:
---------------
Information Type: {{information_type}}
Request Type: {{request_type}}
Purpose: {{purpose}}

Dates:
-----
Date Requested: {{date_requested}}
Date Required: {{date_required}}

Additional Information:
----------------------
{{additional_info_1}}

Comments/Special Requests:
-------------------------
{{additional_info_2}}

=====================================
This is an automated message from the Request Form system.
Reply-To: {{from_email}}
```

4. **Save the Template ID** - you'll need this later
5. Set the "To email" field to: `{{to_email}}`

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account"
2. Find "API Keys" section
3. **Copy your Public Key** - you'll need this

## Step 5: Configure the Application

1. Open the file: `src/emailConfig.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id_here',      // From Step 2
  TEMPLATE_ID: 'your_template_id_here',    // From Step 3
  PUBLIC_KEY: 'your_public_key_here',      // From Step 4
  TO_EMAIL: 'your-email@example.com'       // Your email address
};
```

## Step 6: Test the Form

1. Save all changes
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Fill out the form and submit it
4. Check your email inbox for the submission

## Step 7: Deploy to GitHub Pages

Once everything is working:

```bash
git add .
git commit -m "Configure EmailJS for form submissions"
git push
npm run deploy
```

## Important Notes

⚠️ **Security Considerations:**
- Your Public Key is safe to expose in client-side code
- Never commit your Service ID and Template ID to public repositories if they're sensitive
- For production, consider using environment variables

📧 **Email Delivery:**
- EmailJS free tier allows 200 emails/month
- Emails might take a few seconds to arrive
- Check spam folder if emails don't appear

🔧 **Troubleshooting:**
- If emails aren't sending, check the browser console for errors
- Verify all IDs are correct in `emailConfig.js`
- Make sure your email service is properly connected in EmailJS dashboard
- Test your template directly in the EmailJS dashboard first

## Alternative: Use Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_TO_EMAIL=your-email@example.com
   ```

2. Update `emailConfig.js`:
   ```javascript
   export const EMAIL_CONFIG = {
     SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
     TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
     TO_EMAIL: import.meta.env.VITE_TO_EMAIL
   };
   ```

3. Add `.env` to your `.gitignore` file

4. For GitHub Pages deployment, you'll need to set these values in the build process or directly in the config file before deploying.

## Support

If you encounter any issues:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Check browser console for error messages
- Verify your EmailJS dashboard for service status
