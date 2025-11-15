# Padala Ramya - Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and elegant layout inspired by modern portfolio designs
- **Smooth Animations**: Powered by Framer Motion for beautiful scroll animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Sticky navbar with active section highlighting
- **Contact Form**: Integrated contact form (EmailJS ready)
- **Project Showcase**: Beautiful project cards with hover effects
- **Skills Display**: Interactive skill badges with category-based colors

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **EmailJS** - Email service (configured but using placeholder)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky navigation bar
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects gallery
│   ├── Education.jsx   # Education timeline
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with social links
├── data/
│   ├── projects.js     # Project data
│   └── skills.js       # Skills data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

   Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider.

## ⚙️ Configuration

### EmailJS Setup (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/components/Contact.jsx` with your credentials:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   )
   ```

Currently, the form uses a placeholder function that simulates sending.

### Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update data files in `src/data/` directory
- **Resume**: Place your resume PDF in the `public` folder and update the link in `Hero.jsx`

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Padala Ramya**
- Email: ramyapadala192@gmail.com
- LinkedIn: [padala-ramya-4263a833b](https://www.linkedin.com/in/padala-ramya-4263a833b/)
- GitHub: [RAMYA2927](https://github.com/RAMYA2927)

---

Made with ❤️ using React and Tailwind CSS

