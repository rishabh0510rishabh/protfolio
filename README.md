# 🚀 AI-Augmented Portfolio | Rishabh Mishra

A premium, high-performance portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project is engineered for speed, security, and a stunning user experience, featuring AI-augmented development patterns and data-driven integrations.

![Portfolio Preview](https://rishabhmishra.me/og-image.png)

## ✨ Features

- **🛡️ Production Ready**: Advanced security headers, automated sitemaps, and optimized metadata.
- **🎨 Premium UI/UX**: Custom-built components with Framer Motion animations for a high-end feel.
- **📈 GitHub Integration**: Live stats and contribution activity fetched directly from the GitHub API.
- **⚡ Performance First**: Built with Next.js Turbopack for near-instant load times and 100/100 Lighthouse scores.
- **📱 PWA Support**: Manifest and icons configured for a native-like mobile experience.
- **🦾 AI-Augmented**: Sophisticated development workflow bridging Python logic with modern frontend systems.

## 🛠️ Tech Stack

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **Icons**: Lucide React
- **Backend & Data**: Python, Flask, SQLite, Pandas
- **DevOps**: Vercel, Docker, GCP

## 🏁 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rishabh0510rishabh/PORTFOLIO_WEB.git
   cd PORTFOLIO_WEB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GITHUB_USERNAME=your-username
   NEXT_PUBLIC_SITE_URL=https://your-site.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🐳 Docker

Run the portfolio using Docker:

1. Build and run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. Or build the image manually:
   ```bash
   docker build -t rishabh-portfolio .
   docker run -p 3000:3000 --env-file .env.local rishabh-portfolio
   ```

## 🚢 Deployment

Deployed with ❤️ on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Add the environment variables in the Vercel dashboard.
3. Deploy!

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
Built by [Rishabh Mishra](https://github.com/rishabh0510rishabh)
