# Addanki Manu Sai — Professional Developer Portfolio

A modern, high-performance, dark-themed personal portfolio website built for **Addanki Manu Sai**, Computer Science and Engineering graduate targeting Full-Stack Developer and Software Developer roles.

---

## 🚀 Live Demo & Suggested Deployment
- **Target Platform**: [Vercel](https://vercel.com)
- **Suggested Subdomain**: `addanki-manu-sai-portfolio.vercel.app`

---

## 🛠️ Technology Stack
- **Framework**: [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom dark design system
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons, FontAwesome, VS Code)
- **Interactive Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Contact Service**: [Formspree](https://formspree.io)
- **Activity Integrations**: GitHub REST API & GitHub Contribution Graph

---

## 🎨 Design System Specifications
- **Main Background**: `#09090F`
- **Secondary Background**: `#11111B`
- **Card Background**: `#161624`
- **Primary Accent**: `#8B5CF6` (Purple)
- **Secondary Accent**: `#3B82F6` (Blue)
- **Main Text**: `#F8FAFC`
- **Secondary Text**: `#A1A1AA`
- **Border**: `#29293A`
- **Typography**: Inter (Body) & Space Grotesk (Headings)

---

## 📁 Project Architecture

```
manu-sai-portfolio/
├── public/
│   ├── favicon.svg                  # Brand SVG favicon (MS monogram)
│   ├── resume.pdf                   # Authentic downloadable PDF resume
│   └── images/
│       ├── profile.png              # Authentic professional portrait
│       └── projects/
│           ├── typemaster.svg       # TypeMaster UI preview
│           ├── attendance-system.svg# Smart Attendance Portal preview
│           └── blood-donation.svg   # Blood Donation Portal preview
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navbar with mobile drawer
│   │   ├── Footer.jsx               # Dynamic footer with links
│   │   ├── SectionHeading.jsx       # Reusable section title component
│   │   ├── ProjectCard.jsx          # Project showcase card
│   │   ├── SkillCategory.jsx        # Categorized tech skills with icons
│   │   ├── EducationTimeline.jsx    # Chronological academic timeline
│   │   ├── AchievementCard.jsx      # LeetCode 150+ & TOP GUN batch
│   │   ├── CertificationCard.jsx    # Skilldzire & Udemy credentials
│   │   ├── GithubStats.jsx          # Live GitHub profile & contribution graph
│   │   ├── ContactForm.jsx          # Formspree form with validation
│   │   └── ResumeModal.jsx          # Modal guide for Google Drive link
│   ├── data/
│   │   ├── personalInfo.js          # Central contact & profile info
│   │   ├── projects.js              # Projects data & links
│   │   ├── skills.js                # Categorized skill definitions
│   │   ├── education.js             # Degrees, CGPAs, and institutions
│   │   ├── achievements.js          # Competitive coding milestones
│   │   └── certifications.js        # Verified credentials
│   ├── sections/
│   │   ├── Home.jsx                 # Hero section with 4 action buttons
│   │   ├── About.jsx                # Career objective & education
│   │   ├── Skills.jsx               # Tech stack cards
│   │   ├── Projects.jsx             # Project showcase (expandable)
│   │   ├── GithubSection.jsx        # GitHub activity section
│   │   ├── Achievements.jsx         # Honors & recognitions
│   │   ├── Certifications.jsx       # Professional certificates
│   │   └── Contact.jsx              # Direct contact & message form
│   ├── styles/
│   │   └── index.css                # Tailwind directives & glassmorphism
│   ├── utils/
│   │   └── icons.jsx                # Icon resolver utility
│   ├── App.jsx                      # Main app composition
│   └── main.jsx                     # Application entry point
├── .env                             # Local environment variables
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore configuration
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                      # Vercel deployment & rewrite rules
├── vite.config.js
└── README.md
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization Guide

All personal info and links are stored in centralized files inside `src/data/`.

### 1. Google Drive Resume Link
- Open `src/data/personalInfo.js`.
- Locate `RESUME_DRIVE_URL: ""`.
- Paste your Google Drive shareable link (e.g. `https://drive.google.com/file/d/.../view?usp=sharing`).
- *Note:* The "Download Resume" button works immediately out of the box using the bundled `public/resume.pdf`.

### 2. Project GitHub & Live Demo Links
- Open `src/data/projects.js`.
- Each project has `github` and `liveDemo` properties:
  ```javascript
  {
    title: "TypeMaster",
    github: "https://github.com/addankimanusai/typemaster", // Paste your repository URL
    liveDemo: "https://typemaster-demo.vercel.app"          // Paste your live URL
  }
  ```
- *Note:* When left as an empty string `""`, the buttons automatically render a clean, professional "Coming Soon" state — no broken links, `#`, or 404 errors.

### 3. Contact Form (Formspree)
- Sign up for a free account at [formspree.io](https://formspree.io).
- Create a new form and copy the endpoint URL (format: `https://formspree.io/f/your_form_id`).
- Open your `.env` file and set:
  ```env
  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
  ```
- When deploying on Vercel, add `VITE_FORMSPREE_ENDPOINT` under **Project Settings > Environment Variables**.

---

## 🌐 Vercel Deployment Instructions

Follow these step-by-step instructions to deploy your portfolio to Vercel:

### Step 1: Initialize Git Repository
In the project root directory, run:
```bash
git init
git add .
git commit -m "feat: complete Addanki Manu Sai developer portfolio"
```

### Step 2: Push to GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `manu-sai-portfolio`).
2. Run:
```bash
git branch -M main
git remote add origin https://github.com/addankimanusai/manu-sai-portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository `manu-sai-portfolio` and click **"Import"**.
4. Configure Project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Environment Variables**, add:
   - **Key**: `VITE_FORMSPREE_ENDPOINT`
   - **Value**: Your Formspree endpoint URL (or leave empty initially)
6. Click **"Deploy"**.
7. Once deployed, navigate to **Settings > Domains** in your Vercel dashboard and add your desired domain or subdomain (e.g., `addanki-manu-sai-portfolio.vercel.app`).

---

## 📋 Verified Feature Checklist

- [x] **Single-Screen Hero Impact**: Name, professional title, 2–3 line introduction, and availability indicator.
- [x] **Authentic Profile Photo**: Sourced directly from verified formal photo asset, styled with rounded borders and ambient lighting.
- [x] **Four Functional Hero Buttons**: View Projects, Contact Me, View Resume (with Drive setup handler), and Download Resume (direct PDF).
- [x] **Academic History Vertical Timeline**: Latest qualification first (B.Tech 8.10 CGPA, Intermediate 63%, SSC 9.8 CGPA).
- [x] **Skills & Technologies**: Categorized into Languages, Frontend, Databases, Tools with authentic logos from Simple Icons and Devicons.
- [x] **3 Core Projects**: TypeMaster, Smart Attendance Management System, Blood Donation Management System with custom UI preview mockups.
- [x] **Extensible Project Architecture**: Supports 4+ projects with auto-enabled "View More" toggle.
- [x] **Safe Link Handling**: Pending URLs display "Coming Soon" badges rather than `#` or broken links.
- [x] **Live GitHub Section**: Profile statistics (repositories, followers) + interactive contribution calendar.
- [x] **Milestones & Honors**: LeetCode 150+ solved and TOP GUN batch selection cards.
- [x] **Verified Certifications**: Skilldzire Full Stack Java and Udemy HTML/CSS/JS.
- [x] **Formspree Contact Form**: Full validation, loading spinners, success feedback, and clear configuration banner when unconfigured.
- [x] **Accessible & Responsive**: Optimized for Mobile (375px+), Tablet (768px), and Desktop (1024px+); honors `prefers-reduced-motion`.
- [x] **SEO Optimized**: Complete Open Graph, Twitter cards, meta tags, and custom SVG favicon.

---

## 📄 License
This project is open-source and created for Addanki Manu Sai.
