/**
 * Centralized Projects Configuration
 * Fully updated with Addanki Manu Sai's authentic GitHub repositories and live deployments.
 */

export const projects = [
  {
    id: "typemaster",
    title: "TypeMaster",
    category: "Frontend Development",
    description: "Developed a responsive typing practice application featuring interactive typing tests, real-time Words Per Minute (WPM) and accuracy calculations, and virtual keyboard guidance to help users improve typing speed and precision. Built reusable React components and implemented dynamic UI updates for an interactive practice experience.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    image: "/images/projects/typemaster.svg",
    github: "https://github.com/addankimanusai/type-master",
    liveDemo: "https://type-master-chi.vercel.app/",
    featured: true,
    highlights: [
      "Real-time Words Per Minute (WPM) calculation engine",
      "Dynamic keystroke accuracy tracking & error highlighting",
      "Interactive virtual keyboard with visual keypress feedback"
    ]
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance Management System",
    category: "Full-Stack Development",
    description: "Engineered a full-stack attendance management system with role-specific dashboards for administrators, faculty, and students. Implemented attendance marking, database-backed record management, and subject-wise attendance reports to streamline academic tracking and reduce manual recordkeeping.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/images/projects/attendance-system.svg",
    github: "https://github.com/addankimanusai/smartcart",
    liveDemo: "https://smart-attendance-nu-navy.vercel.app/login",
    featured: true,
    highlights: [
      "Role-based access control for Admins, Faculty, and Students",
      "Database-backed persistent recordkeeping in MongoDB",
      "Subject-wise analytics and attendance report generator"
    ]
  },
  {
    id: "blood-donation",
    title: "Blood Donation Management System",
    category: "Full-Stack Development",
    description: "Built a full-stack web application connecting blood donors with individuals requiring blood through donor registration, donor search, and emergency blood request management. Integrated PHP and MySQL for server-side processing and data persistence, with a responsive interface and input validation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    image: "/images/projects/blood-donation.svg",
    github: "https://github.com/addankimanusai/Blood-Donation-website",
    liveDemo: "https://blood-donation-manusai.infinityfree.me/",
    featured: true,
    highlights: [
      "Emergency blood request broadcast & notification system",
      "Donor registration with rigorous health criteria validation",
      "Relational MySQL database with optimized search queries"
    ]
  }
];
