/**
 * Central site data - developer info, projects, skills, case studies (from Resume + portfolio)
 */

/** Live portfolio URL (Render) */
export const siteUrl = "https://aditya-gaku.onrender.com";

export const developer = {
  name: "Aditya Kumar",
  role: "UI/UX Designer & Frontend Developer",
  college: "Motilal Nehru National Institute of Technology, Allahabad",
  degree: "B.Tech in Computer Science and Engineering (2022 – 2026)",
  goal: "Placement + SDE + UI/UX roles",
  tagline:
    "Currently working at Pine Labs, building polished product interfaces and scalable frontend experiences.",
  resumeUrl: "/ResumeF.pdf",
  siteUrl,
  email: "adityakumar14052005@gmail.com",
  phone: "+91 9335994196",
  social: {
    github: "https://github.com/ADITY-AKUMAR",
    linkedin: "https://linkedin.com/in/adityakumar14052005/",
    email: "mailto:adityakumar14052005@gmail.com",
    phone: "tel:+919335994196",
    figma: "https://figma.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "7+", label: "Projects" },
  { value: "4+ Months", label: "Industry Experience" },
  { value: "15+", label: "Technologies" },
  { value: "100K+", label: "Data Records Analyzed" },
];

export const skills = {
  Frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  "UI/UX": ["Figma", "Design System", "Wireframing", "Prototyping"],
  Analytics: ["Power BI", "SQL", "Excel"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Postman"],
};

export const experience = [
  {
    title: "UI/UX Design Intern",
    company: "Pine Labs",
    duration: "March 2026 – Present",
    location: "Noida, India",
    description:
      "Worked as a UI/UX Design Intern designing enterprise mobile applications. Created user flows, wireframes, high-fidelity interfaces, interactive prototypes, and reusable design components while collaborating closely with product managers and developers.",
    responsibilities: [
      "Designed intuitive mobile application interfaces using Figma.",
      "Created user flows, wireframes, and high-fidelity UI.",
      "Built reusable design components.",
      "Improved usability and accessibility.",
      "Collaborated with developers for implementation.",
      "Followed Material Design and modern UX practices.",
    ],
    skills: [
      "Figma",
      "UI/UX Design",
      "Design System",
      "Wireframing",
      "Prototyping",
      "Material Design",
      "User Flow",
      "Mobile App Design",
    ],
  },
];

/** Projects from resume - kept portfolio structure, updated content */
export const projects = [
  {
    id: 1,
    title: "Full-Stack MERN Marketplace (Cart-Bazzar)",
    description:
      "Modular e-commerce platform with role-based dashboards, secure checkout (PayPal), and real-time order tracking. REST APIs for product/category management, Bcrypt authentication, and Cloudinary media handling.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Bcrypt",
      "Cloudinary",
      "PayPal",
    ],
    github: "https://github.com/ADITY-AKUMAR/Cart-Bazzar",
    live: null,
    caseStudy: null,
    image: "/cart-bazzar-logo.png",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "Real-time chat with JWT auth, RBAC, and protected routing. Socket.IO powers low-latency messaging, online presence indicators, and secure media sharing built with Tailwind CSS.",
    tech: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "DaisyUI",
      "Cloudinary",
    ],
    github: "https://github.com/ADITY-AKUMAR/ChatBot",
    live: null,
    caseStudy: null,
    image: "/realtime-chat-ui.png",
  },
  {
    id: 3,
    title: "OLA Data Analysis",
    description:
      "Analyzed 100K+ ride booking records using SQL and Excel for booking success rates, revenue metrics, and customer behavior. Visualized insights through interactive dashboards.",
    tech: ["Power BI", "Excel", "MySQL", "SQL"],
    github: "https://github.com/ADITY-AKUMAR/OLA",
    live: null,
    caseStudy: null,
    image: "/ola-data-analysis.png",
  },
  {
    id: 4,
    title: "EliteKicks E-commerce UI Design",
    description:
      "High-end sneaker storefront UI crafted in Figma with bold product cards, clean hero layout, and conversion-focused interaction patterns for modern brands.",
    tech: ["Figma", "UI/UX", "Design Systems"],
    github: "https://github.com/ADITY-AKUMAR/EliteKicksE-commerceUIDesign",
    live: "https://www.figma.com/proto/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&p=f&t=niAau86fREBqYqca-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A8&starting-point-node-id=31%3A2",
    caseStudy:
      "https://www.figma.com/design/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&t=sIyCRwiWwtjj0H1D-1",
    image: "/elitekicks-hero.png",
  },
  {
    id: 5,
    title: "Blinkit Outlet Performance Dashboard",
    description:
      "Interactive Power BI dashboard analyzing outlet performance across locations, item categories, and operational metrics to support faster business decisions.",
    tech: ["Power BI", "Excel"],
    github: "https://github.com/ADITY-AKUMAR/BLINKIT",
    live: null,
    caseStudy: null,
    image: "/blinkit-dashboard.png",
  },
  {
    id: 6,
    title: "Financial Loan Analytics Dashboard",
    description:
      "Loan analytics dashboard measuring application trends, funded amounts, and risk indicators. Designed for business-ready reporting with SQL and Power BI.",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/ADITY-AKUMAR/FINANCIAL_LOAN",
    live: null,
    caseStudy: null,
    image: "/financial-loan-dashboard.png",
  },
  {
    id: 7,
    title: "BuyBestCakes UI/UX Design",
    description:
      "Bakery storefront UI designed in Figma with streamlined product discovery, key visual hierarchy, and checkout-focused interactions for quick orders.",
    tech: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    github: "https://github.com/ADITY-AKUMAR/BuyBestCakes",
    live: "https://www.figma.com/proto/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?page-id=0%3A1&node-id=10-218&p=f&viewport=435%2C160%2C0.1&t=oNoIFyfbtvC0w7HV-1&scaling=scale-down&content-scaling=fixed",
    caseStudy:
      "https://www.figma.com/design/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?node-id=0-1",
    image: "/buybestcakes-hero.png",
  },
];

/** Case studies - detailed UI/UX write-ups with Figma design + prototype */
export const caseStudies = [
  {
    id: 1,
    title: "EliteKicks E-commerce UI Design",
    problem:
      "Sneaker brand needed a modern, conversion-focused storefront that showcases hero products and makes browsing collections effortless.",
    research:
      "Analyzed top e-commerce shoe brands, studied UX patterns for product discovery, and collected feedback from sneaker buyers on pain points.",
    userFlow:
      "Mapped buyer journeys from landing to product discovery, collection filtering, and checkout completion to reduce decision friction.",
    wireframes:
      "Created responsive wireframes for hero, popular products, collection grid, and checkout interactions, prioritizing scan-friendly layouts.",
    highFidelityUI:
      "Delivered polished high-fidelity screens with strong visual hierarchy, consistent typography, and bold product callouts for desktop and mobile.",
    prototype:
      "Built a clickable prototype in Figma to demo navigation, product selection, and checkout flow with smooth transitions.",
    outcome:
      "Resulted in a refined UI direction that improves product visibility, increases engagement, and supports a performance-focused storefront.",
    lessonsLearned:
      "Learned the importance of balancing bold visual styling with clear checkout affordances and consistent spacing across responsive breakpoints.",
    figmaDesignUrl:
      "https://www.figma.com/design/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&t=sIyCRwiWwtjj0H1D-1",
    figmaPrototypeUrl:
      "https://www.figma.com/proto/BU8rAwFnw9VmJrW1J278bm/Untitled?node-id=31-2&p=f&t=niAau86fREBqYqca-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A8&starting-point-node-id=31%3A2",
  },
  {
    id: 2,
    title: "BuyBestCakes Bakery App UI Design",
    problem:
      "Users struggled to quickly find relevant cakes by occasion, flavor, and budget in existing bakery interfaces, leading to drop-offs before checkout.",
    research:
      "Reviewed popular bakery and food-ordering flows, compared card/list browsing patterns, and identified key trust triggers such as ratings, freshness cues, and delivery clarity.",
    userFlow:
      "Outlined a streamlined browse-to-buy flow with category filters, product cards, cart preview, and quick checkout interactions.",
    wireframes:
      "Designed low-to-mid fidelity wireframes for landing, category browse, product detail, cart, and checkout paths with clear CTA placement.",
    highFidelityUI:
      "Created a clean, visual-first interface with a strong product hierarchy, intuitive filters, and accessible CTA buttons.",
    prototype:
      "Built a full prototype in Figma to validate navigation, quick ordering, and responsive interaction patterns.",
    outcome:
      "Delivered a UI direction that boosts discoverability, simplifies product selection, and reduces purchase friction.",
    lessonsLearned:
      "Refined my approach to bakery UX by focusing on visual trust signals, fast category access, and clear checkout progression.",
    figmaDesignUrl:
      "https://www.figma.com/design/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?node-id=0-1",
    figmaPrototypeUrl:
      "https://www.figma.com/proto/Mv8bKFfhnCm7V3CYWsOGQC/Untitled?page-id=0%3A1&node-id=10-218&p=f&viewport=435%2C160%2C0.1&t=oNoIFyfbtvC0w7HV-1&scaling=scale-down&content-scaling=fixed",
  },
];

export const achievements = [
  {
    title: "Top 5 Team",
    subtitle: "WebStar, CodeSangam",
    icon: "🏆",
    details:
      "Placed in the top 5 team rankings at WebStar during the CodeSangam hackathon.",
  },
  {
    title: "UI/UX Design Intern",
    subtitle: "Pine Labs",
    icon: "🎖",
    details:
      "Contributed to mobile UI/UX design for enterprise financial products as a Pine Labs intern.",
  },
  {
    title: "Web Development Certification",
    subtitle: "Angela Yu",
    icon: "📜",
    details:
      "Completed a full-stack web development certification with project-based training.",
  },
  {
    title: "Team Lead",
    subtitle: "Green Club Website",
    icon: "🌱",
    details:
      "Led a team to design and deliver the Green Club website for environmental awareness.",
  },
];
