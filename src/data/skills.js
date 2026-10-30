/**
 * Centralized Skills and Technologies Configuration
 * Grouped into 4 core categories with verified icon identifiers.
 */

export const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages for object-oriented design and algorithmic problem solving",
    skills: [
      { name: "Java", icon: "SiOpenjdk", color: "#ED8B00", badge: "Core & OOP" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", badge: "ES6+" },
      { name: "SQL", icon: "SiPostgresql", color: "#336791", badge: "Relational Queries" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive, modern, user-centric web interfaces",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB", badge: "Hooks & SPA" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26", badge: "Semantic Markup" },
      { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6", badge: "Modern Styling" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", badge: "Utility-First" }
    ]
  },
  {
    title: "Databases",
    description: "Reliable persistent storage, data modeling, and schema design",
    skills: [
      { name: "MySQL", icon: "SiMysql", color: "#4479A1", badge: "RDBMS" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248", badge: "NoSQL" }
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Version control, developer tooling, and modern workflow environments",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032", badge: "Version Control" },
      { name: "GitHub", icon: "SiGithub", color: "#F8FAFC", badge: "Collaboration" },
      { name: "VS Code", icon: "VscVscode", color: "#007ACC", badge: "IDE" },
      { name: "Vercel", icon: "SiVercel", color: "#FFFFFF", badge: "Deployment" }
    ]
  }
];
