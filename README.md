# BOLDBAT.K Portfolio 🚀

> **Professional Portfolio of BOLDBAT.K** - Software Engineer & AI Specialist from Ulaanbaatar, Mongolia

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 🌟 About

Welcome to my digital portfolio! I'm **BOLDBAT.K**, a passionate Software Engineer and AI Specialist based in Ulaanbaatar, Mongolia. This portfolio showcases my journey in technology, featuring innovative AI-driven projects, full-stack development expertise, and my commitment to creating impactful digital solutions.

Currently pursuing my Bachelor's in AI at Mongolian University of Science and Technology (2023-2027) and serving as Founder & CEO of **Oyu Intelligence LLC**, where I lead the development of cutting-edge AI products and solutions.

## ✨ Features

### 🎯 **Interactive Portfolio Experience**
- **3D Keyboard Skills Showcase** - Interactive 3D keyboard with skill reveals
- **Smooth Animations** - GSAP and Framer Motion powered transitions
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for all devices and screen sizes
- **Real-time Cursors** - Collaborative cursor tracking with Socket.io

### 🤖 **AI Project Showcase**
- **AI-based Car Sharing App** - Smart vehicle allocation with predictive analytics
- **AI-driven Career Planning App** - Personalized career roadmaps and skill gap analysis
- **AI Chatbot Integration in 2D Game** - Dynamic NPC conversations with adaptive storytelling
- **Mongolia Guide App** - Cultural heritage and travel planning platform

### 🛠 **Technical Highlights**
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Advanced Animations** - 3D elements with Spline, smooth scrolling with Lenis
- **Performance Optimized** - Lighthouse score optimized, lazy loading, image optimization
- **Contact Integration** - Email service with Resend API
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

## 🚀 Technology Stack

### **Frontend**
- **Framework**: Next.js 14.2.3 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4 + CSS Modules
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion 11.3 + GSAP 3.12
- **3D Graphics**: Spline + Three.js

### **Backend & Services**
- **API Routes**: Next.js API Routes
- **Email Service**: Resend API
- **Real-time**: Socket.io
- **Validation**: Zod Schema Validation

### **Development & Deployment**
- **Package Manager**: NPM
- **Linting**: ESLint + Prettier
- **Version Control**: Git + GitHub
- **Deployment**: Vercel (recommended)

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18.0 or higher
- NPM or Yarn package manager
- Git for version control

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/boldbat/free_port.git
   cd free_port
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Configure Environment Variables**
   - Add `RESEND_API_KEY` in Vercel dashboard
   - Set `NEXT_PUBLIC_SITE_URL` to your domain

3. **Deploy**
   ```bash
   vercel --prod
   ```

### **Deploy to Netlify**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to Netlify

### **Deploy to GitHub Pages**

1. **Update `next.config.mjs`** for static export:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

2. **Build and export**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### **Email Service Setup**
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Add `RESEND_API_KEY` to your environment variables

### **Analytics Setup (Optional)**
1. Set up Umami analytics
2. Add `UMAMI_DOMAIN` and `UMAMI_SITE_ID` to environment variables

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── assets/            # Images, icons, 3D models
│   └── projects-screenshots/ # Project showcase images
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable UI components
│   │   ├── sections/      # Page sections (Hero, About, Projects)
│   │   ├── ui/           # Base UI components
│   │   └── ...           # Feature-specific components
│   ├── data/             # Configuration and content
│   │   ├── config.ts     # Site configuration
│   │   ├── constants.ts  # Skills and constants
│   │   └── projects.tsx  # Project data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── types/            # TypeScript type definitions
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### **Personal Information**
Update your details in `src/data/config.ts`:
```typescript
const config = {
  author: "Your Name",
  email: "your.email@example.com",
  location: "Your Location",
  // ... other settings
};
```

### **Skills & Technologies**
Modify skills in `src/data/constants.ts`:
```typescript
export const SKILLS: Record<SkillNames, Skill> = {
  // Add or modify skills here
};
```

### **Projects**
Update project showcase in `src/data/projects.tsx`:
```typescript
const projects: Project[] = [
  // Add your projects here
];
```

## 📸 Screenshots

*Add your portfolio screenshots here once deployed*

## 🌐 Live Demo

**Portfolio Website**: [Coming Soon]
**GitHub Repository**: [https://github.com/boldbat/free_port](https://github.com/boldbat/free_port)

## 📞 Contact & Connect

- **Email**: [boldbat.nz@icloud.com](mailto:boldbat.nz@icloud.com)
- **Phone**: +976 86970213
- **Location**: Ulaanbaatar, Mongolia
- **LinkedIn**: [linkedin.com/in/boldbat](https://www.linkedin.com/in/boldbat/)
- **GitHub**: [github.com/boldbat](https://github.com/boldbat)
- **Twitter**: [@boldbat](https://x.com/boldbat)

## 🏢 Professional Background

- **Founder & CEO** - Oyu Intelligence LLC (Sept 2024 - Present)
- **Creative Lead** - Ehlel Brand (June 2024 - Sept 2024)
- **Software Engineer** - Oyunii Undraa Group (March 2023 - June 2024)
- **Web Developer** - Freelancer (2019 - 2024)

## 🎓 Education

**Bachelor's in Artificial Intelligence**  
Mongolian University of Science and Technology (2023-2027)

## 🏆 Achievements

- Multiple hackathon winner and participant
- Competitive programming achievements
- AI/ML competition recognition
- Open source contributor
- Tech community leadership roles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and AI-focused aesthetics
- **Technology Stack**: Next.js, Tailwind CSS, and the amazing open-source community
- **3D Elements**: Spline for interactive 3D components
- **Animations**: Framer Motion and GSAP for smooth user experiences

---

**Built with ❤️ by BOLDBAT.K in Mongolia 🇲🇳**

*Bringing Mongolia closer to the world, one digital experience at a time.*
