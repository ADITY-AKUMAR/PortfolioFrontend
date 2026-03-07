/**
 * Central site data - developer info, projects, skills, case studies (from Resume + portfolio)
 */

/** Live portfolio URL (Render) */
export const siteUrl = 'https://aditya-gaku.onrender.com';

export const developer = {
  name: 'Aditya Kumar',
  role: 'MERN Stack Developer & UI/UX Designer',
  college: 'Motilal Nehru National Institute of Technology, Allahabad',
  degree: 'B.Tech in Computer Science and Engineering (2022 – 2026)',
  goal: 'Placement + SDE + UI/UX roles',
  tagline: 'I build scalable web apps with clean UI and real-world solutions.',
  resumeUrl: '/ResumeF.pdf',
  siteUrl,
  email: 'adityakumar14052005@gmail.com',
  phone: '+91 9335994196',
  social: {
    github: 'https://github.com/ADITY-AKUMAR',
    linkedin: 'https://linkedin.com/in/adityakumar14052005/',
    twitter: 'https://twitter.com',
    figma: 'https://figma.com',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '3+', label: 'Projects completed' },
  { value: '15+', label: 'Technologies used' },
  { value: 'Ready', label: 'Internship ready' },
];

export const skills = {
  'Programming': ['C++', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Frontend': ['React.js', 'Tailwind CSS', 'DaisyUI'],
  'Backend': ['Node.js', 'Express.js', 'MongoDB'],
  'Databases': ['MongoDB', 'MySQL'],
  'Data & Analytics': ['Power BI', 'Microsoft Excel'],
  'Tools': ['Git', 'GitHub', 'Postman', 'VS Code'],
  'Other': ['REST APIs', 'JWT', 'Socket.IO', 'Cloudinary'],
  'UI/UX': ['Figma', 'Wireframing', 'Prototyping'],
};

/** Projects from resume - kept portfolio structure, updated content */
export const projects = [
  {
    id: 1,
    title: 'Full-Stack MERN Marketplace (Cart-Bazzar)',
    description:
      'Modular e-commerce platform with role-based dashboards, secure checkout (PayPal), and real-time order tracking. REST APIs for product/category management, Bcrypt authentication. Scalable backend with Cloudinary media handling, optimized for 100+ concurrent users.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bcrypt', 'Cloudinary', 'PayPal'],
    github: 'https://github.com/ADITY-AKUMAR/Cart-Bazzar',
    live: null,
    image: null,
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description:
      'Full-stack real-time chat with JWT auth, RBAC, and protected routing. Socket.IO for low-latency 1:1 and group chat. Online status indicators, secure image sharing via Cloudinary. UI built with Tailwind CSS and DaisyUI.',
    tech: ['React (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'DaisyUI', 'Cloudinary'],
    github: 'https://github.com/ADITY-AKUMAR/ChatBot',
    live: null,
    image: null,
  },
  {
    id: 3,
    title: 'OLA Data Analysis',
    description:
      'Analyzed 100K+ ride booking records using SQL and Excel for booking success rates, revenue metrics, and customer behavior. Interactive Power BI dashboards for booking trends, cancellations, revenue by payment method, and driver performance.',
    tech: ['Power BI', 'Excel', 'MySQL', 'SQL'],
    github: 'https://github.com/ADITY-AKUMAR/OLA',
    live: null,
    image: null,
  },
];

/** Case studies - kept existing portfolio placeholders; update Figma links when ready */
export const caseStudies = [
  {
    id: 1,
    title: 'E-commerce UX Redesign',
    problem: 'High cart abandonment and confusing checkout flow.',
    research: 'User interviews and heatmaps to identify friction points.',
    wireframe: 'Low and high-fidelity wireframes in Figma.',
    solution: 'Simplified checkout, one-click guest checkout, and clearer CTAs.',
    result: 'Improved conversion and lower bounce rate.',
    figmaUrl: 'https://figma.com',
  },
  {
    id: 2,
    title: 'Dashboard Usability Study',
    problem: 'Users struggled to find key metrics quickly.',
    research: 'Task-based usability testing with 5 participants.',
    wireframe: 'Information architecture and wireframe iterations.',
    solution: 'Reorganized navigation and added customizable widgets.',
    result: 'Faster task completion and higher satisfaction scores.',
    figmaUrl: 'https://figma.com',
  },
];

/** Achievements from resume */
export const achievements = [
  'Secured Top 5 in WebStar event at CodeSangam (MNNIT’s coding event) among 100+ participants.',
  'Earned Web Development Certification from Angela Yu (Udemy Bootcamp).',
  'Team Lead for Green Club website — raised awareness and improved personal skills (June 2023 – July 2024).',
];
