// EmailJS Configuration
// To set up EmailJS for your contact form:
// 1. Go to https://www.emailjs.com and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from Account settings
// 5. Replace the values below with your actual EmailJS credentials

export const emailJSConfig = {
  // Your EmailJS Service ID (from Services tab)
  serviceId: 'service_andy_contact',
  
  // Your EmailJS Template ID (from Email Templates tab)
  templateId: 'template_contact_form',
  
  // Your EmailJS Public Key (from Account -> General -> Public Key)
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Email template variables (these should match your EmailJS template)
  templateVars: {
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
    to_email: 'andy.sprague44@gmail.com',
    reply_to: '{{reply_to}}'
  }
};

// Alternative: Use environment variables (recommended for production)
// Create a .env.local file with:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id  
// VITE_EMAILJS_PUBLIC_KEY=your_public_key

export const getEmailJSConfig = () => ({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || emailJSConfig.serviceId,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailJSConfig.templateId,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailJSConfig.publicKey,
}); 