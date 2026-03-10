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
  { value: '7+', label: 'Projects completed' },
  { value: '15+', label: 'Technologies used' },
  { value: 'Ready', label: 'Internship & Full Time ready' },
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
    image: '/cart-bazzar-logo.png',
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description:
      'Full-stack real-time chat with JWT auth, RBAC, and protected routing. Socket.IO for low-latency 1:1 and group chat. Online status indicators, secure image sharing via Cloudinary. UI built with Tailwind CSS and DaisyUI.',
    tech: ['React (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'DaisyUI', 'Cloudinary'],
    github: 'https://github.com/ADITY-AKUMAR/ChatBot',
    live: null,
    image: '/realtime-chat-ui.png',
  },
  {
    id: 3,
    title: 'OLA Data Analysis',
    description:
      'Analyzed 100K+ ride booking records using SQL and Excel for booking success rates, revenue metrics, and customer behavior. Interactive Power BI dashboards for booking trends, cancellations, revenue by payment method, and driver performance.',
    tech: ['Power BI', 'Excel', 'MySQL', 'SQL'],
    github: 'https://github.com/ADITY-AKUMAR/OLA',
    live: null,
    image: '/ola-data-analysis.png',
  },
  {
    id: 4,
    title: 'EliteKicks E-commerce UI Design',
    description:
      'High-end sneaker e-commerce homepage and product listing UI built in Figma. Focused on bold hero visuals, clean product grids, and conversion-focused CTAs for modern footwear brands.',
    tech: ['Figma', 'UI/UX', 'Design Systems'],
    github: 'https://github.com/ADITY-AKUMAR/EliteKicksE-commerceUIDesign',
    live: 'https://www.figma.com/proto/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&p=f&t=niAau86fREBqYqca-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A8&starting-point-node-id=31%3A2',
    image: '/elitekicks-hero.png',
  },
  {
    id: 5,
    title: 'Blinkit Outlet Performance Dashboard',
    description:
      'Interactive Power BI dashboard analyzing Blinkit outlet performance across locations, item types, and outlet types for actionable business insights.',
    tech: ['Power BI', 'Excel'],
    github: 'https://github.com/ADITY-AKUMAR/BLINKIT',
    live: null,
    image: '/blinkit-dashboard.png',
  },
  {
    id: 6,
    title: 'Financial Loan Analytics Dashboard',
    description:
      'Financial loan analytics dashboard tracking applications, funded amount, received amount, and risk metrics. Built with SQL and Excel, visualized in Power BI.',
    tech: ['Power BI', 'SQL', 'Excel'],
    github: 'https://github.com/ADITY-AKUMAR/FINANCIAL_LOAN',
    live: null,
    image: '/financial-loan-dashboard.png',
  },
  {
    id: 7,
    title: 'BuyBestCakes UI/UX Design',
    description:
      'End-to-end bakery storefront UI crafted in Figma with emphasis on product discovery, quick ordering flow, and trust-building visual hierarchy for first-time buyers.',
    tech: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
    github: 'https://github.com/ADITY-AKUMAR/BuyBestCakes',
    live: 'https://www.figma.com/proto/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?page-id=0%3A1&node-id=10-218&p=f&viewport=435%2C160%2C0.1&t=oNoIFyfbtvC0w7HV-1&scaling=scale-down&content-scaling=fixed',
    image: '/buybestcakes-hero.png',
  },
];

/** Case studies - detailed UI/UX write-ups with Figma design + prototype */
export const caseStudies = [
  {
    id: 1,
    title: 'EliteKicks E-commerce UI Design',
    problem:
      'Sneaker brand needed a modern, conversion-focused storefront that showcases hero products and makes browsing collections effortless.',
    research:
      'Analyzed top e-commerce shoe brands, studied UX patterns for product discovery, and collected feedback from sneaker buyers on pain points.',
    wireframe:
      'Created responsive wireframes in Figma for hero, popular products, best collection, latest products, and newsletter/footer sections.',
    solution:
      'Designed a bold, card-based layout with clear hierarchy, strong CTAs, and consistent visual language across homepage and product listing.',
    result:
      'Improved clarity of product information, smoother browsing experience, and a polished UI ready to be handed off for development.',
    figmaDesignUrl:
      'https://www.figma.com/design/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&t=sIyCRwiWwtjj0H1D-1',
    figmaPrototypeUrl:
      'https://www.figma.com/proto/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&p=f&t=niAau86fREBqYqca-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A8&starting-point-node-id=31%3A2',
  },
  {
    id: 2,
    title: 'BuyBestCakes Bakery App UI Design',
    problem:
      'Users struggled to quickly find relevant cakes by occasion, flavor, and budget in existing bakery interfaces, leading to drop-offs before checkout.',
    research:
      'Reviewed popular bakery and food-ordering flows, compared card/list browsing patterns, and identified key trust triggers such as ratings, freshness cues, and delivery clarity.',
    wireframe:
      'Designed low-to-mid fidelity wireframes for landing, category browse, product detail, cart, and checkout paths with clear CTA placement and reduced interaction friction.',
    solution:
      'Built a clean, visual-first interface with category shortcuts, strong product cards, guided order flow, and consistent spacing/type scale to improve scannability across devices.',
    result:
      'The final prototype delivers a faster browse-to-cart journey, clearer purchase decisions, and a dev-ready UI direction for implementation.',
    figmaDesignUrl:
      'https://www.figma.com/design/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?node-id=0-1',
    figmaPrototypeUrl:
      'https://www.figma.com/proto/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?page-id=0%3A1&node-id=10-218&p=f&viewport=435%2C160%2C0.1&t=oNoIFyfbtvC0w7HV-1&scaling=scale-down&content-scaling=fixed',
  },
];

/** Achievements from resume */
export const achievements = [
  'Secured Top 5 in WebStar event at CodeSangam (MNNIT’s coding event) among 100+ participants.',
  'Earned Web Development Certification from Angela Yu (Udemy Bootcamp).',
  'Team Lead for Green Club website — raised awareness and improved personal skills (June 2023 – July 2024).',
];
