// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from the Account page
// 5. Replace the values below with your actual EmailJS credentials

export const EMAIL_CONFIG = {
    // Your EmailJS Service ID
    SERVICE_ID: 'YOUR_SERVICE_ID',

    // Your EmailJS Template ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',

    // Your EmailJS Public Key
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',

    // The email address where form submissions should be sent
    TO_EMAIL: 'jyaruel@vanuatu.gov.vu'
};

// Template variables that will be sent to EmailJS:
// - to_email: recipient email address
// - from_name: sender's full name
// - from_email: sender's email address
// - institution: sender's institution/company
// - address: sender's address
// - phone: sender's phone number
// - information_type: type of information requested
// - request_type: online or physical
// - purpose: purpose of request (comma-separated)
// - date_requested: date when request was made
// - date_required: date when information is needed
// - additional_info_1: first additional information field
// - additional_info_2: second additional information field
