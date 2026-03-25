# Information Request Form

A responsive React-based form application for submitting information requests. Built with React and Vite, and deployed on GitHub Pages.

## Live Demo

🌐 **Access the form at:** [https://vbos-dashboards.github.io/request_form/](https://vbos-dashboards.github.io/request_form/)

## Features

- **Email Integration**: Form submissions are sent directly to a specified email address via EmailJS
- **Contact Information Section**: Collect user's full name, institution/company, address, phone number, and email
- **Information Request Section**: Radio buttons to specify the type of information needed
- **Schedule Request Section**: Select online or physical request type
- **Purpose Selection**: Multiple checkbox options for request purposes (Research Report, Data Analysis, Higher Proposal, Planning Support, Presentation Support)
- **Date Fields**: Request date and required date inputs
- **Additional Information**: Two text areas for optional comments and special requests
- **Form Validation**: Required fields and proper input types
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: Clear feedback after submission
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with gradient background and smooth interactions

## Technology Stack

- **React 19.2.4**: Frontend framework
- **Vite 8.0.2**: Build tool and dev server
- **EmailJS**: Email service for form submissions
- **CSS3**: Custom styling with responsive design
- **GitHub Pages**: Hosting platform

## Email Configuration

**⚠️ IMPORTANT**: Before the form can send emails, you need to configure EmailJS.

See the detailed setup guide: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

Quick steps:
1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `src/emailConfig.js` with your credentials

## Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vbos-dashboards/request_form.git
cd request_form
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make it available at the GitHub Pages URL

## Project Structure

```
request_form/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-level styles
│   ├── RequestForm.jsx      # Form component with all fields
│   ├── RequestForm.css      # Form-specific styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Form Fields

1. **Your full name** - Required text field
2. **Institution/Company** - Required text field
3. **Address** - Required text field
4. **Phone number** - Required telephone field
5. **Email address** - Required email field
6. **Information type** - Radio selection (Trade Report or Trade related development)
7. **Request type** - Radio selection (Online or Physical)
8. **Purpose of Request** - Multiple checkboxes for different purposes
9. **Date Requested** - Date picker
10. **Date Required** - Date picker
11. **Additional Information** - Optional textarea
12. **Comments or Special Requests** - Optional textarea

## Customization

To customize the form:

- **Modify form fields**: Edit `src/RequestForm.jsx`
- **Update styling**: Edit `src/RequestForm.css` and `src/App.css`
- **Change colors/theme**: Update CSS variables and color values
- **Add validation**: Implement validation logic in the form component

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please open an issue on the [GitHub repository](https://github.com/vbos-dashboards/request_form/issues).
