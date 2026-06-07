<div align="center">

# ✨ Aman Gupta — Developer Portfolio

**A modern, animated personal portfolio built with React + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Demo](#) · [📧 Contact](mailto:amangupta.05ob@gmail.com) · [💼 LinkedIn](https://linkedin.com)

</div>

---

## 📸 Preview

> A dark-themed, fully animated portfolio with smooth scroll, typing effects, and section-reveal animations.

---

## 🚀 Features

- 🎨 **Dark glassmorphism UI** — deep navy palette with purple & emerald accents
- ⌨️ **Typewriter hero** — animated cycling titles (Full Stack Developer · AI Enthusiast · CS @ JIIT Noida)
- 🌊 **Scroll-triggered animations** — sections fade & slide in via `IntersectionObserver`
- 🗂️ **Interactive project tabs** — switch between GrocerEase, ECHO & NagarMitra
- 🛠️ **Skills grid** — 6 categorised skill groups with hover highlights
- 🏆 **Achievements & Roles** — animated timeline cards
- 📬 **AI-powered contact form** — Claude AI replies instantly on your behalf
- 📱 **Responsive** — works on all screen sizes
- ⚡ **Lightning fast** — Vite HMR in development, optimised production build

---

## 🗂️ Project Structure

```
Aman-Gupta-Portfolio/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite + React plugin config
├── package.json
├── .gitignore
└── src/
    ├── main.jsx                # React DOM root
    ├── styles.css              # Global reset & base styles
    └── AmanGuptaPortfolio.jsx  # Full portfolio (all sections)
```

---

## 🧱 Sections

| Section | Description |
|---|---|
| **Home** | Hero with avatar, typewriter, stats row, and CTA buttons |
| **About** | Bio, education cards (JIIT & CMS), coursework tags |
| **Projects** | Tabbed showcase — GrocerEase · ECHO · NagarMitra |
| **Skills** | Languages · Frontend · Backend · Databases · ML/Data · Tools |
| **Achievements** | Oracle cert · Amazon HackOn · Innovate 3.0 & more |
| **Contact** | AI-powered form (Claude API) + social links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Bundler** | Vite 6 |
| **Styling** | Vanilla CSS + Inline styles |
| **Fonts** | Space Grotesk · Syne (Google Fonts) |
| **Animations** | CSS keyframes + IntersectionObserver |
| **AI (Contact)** | Anthropic Claude API |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/AmanGupta-001/Aman-Gupta-Portfolio.git

# Navigate to the project
cd Aman-Gupta-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build      # Outputs to /dist
npm run preview    # Preview the production build locally
```

---

## 🤖 AI Contact Form

The contact section uses the **Anthropic Claude API** to send an instant AI-generated reply on your behalf. To enable it, add your API key in the `ContactSection` component:

```js
headers: {
  "x-api-key": "YOUR_ANTHROPIC_API_KEY",
  ...
}
```

> ⚠️ Never expose your API key in a public repository. Use environment variables in production.

---

## 📬 Contact

**Aman Gupta**
- 📧 [amangupta.05ob@gmail.com](mailto:amangupta.05ob@gmail.com)
- 🎓 B.Tech Computer Science — JIIT Noida (2023–Present)
- 📍 Lucknow, Uttar Pradesh, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Aman Gupta** · © 2025

</div>
