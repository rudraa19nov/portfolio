export const personalInfo = {
  name: "Alex Johnson",
  tagline: "Full-Stack Developer & UI/UX Enthusiast",
  bio: "Passionate full-stack developer with 5+ years of experience creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions and have a keen eye for design and user experience.",
  highlights: [
    { label: "Role", value: "Senior Frontend Developer" },
    { label: "Passion", value: "Creating seamless user experiences" },
    { label: "Interest", value: "AI/ML and emerging web technologies" },
    { label: "Location", value: "San Francisco, CA" }
  ],
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson"
  }
};

export const skills = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vue.js", icon: "💚" },
    { name: "Sass/SCSS", icon: "💄" }
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "GraphQL", icon: "◉" },
    { name: "REST APIs", icon: "🔌" }
  ],
  tools: [
    { name: "Git", icon: "📚" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Figma", icon: "🎭" },
    { name: "Webpack", icon: "📦" },
    { name: "Jest", icon: "🧪" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.alexjohnson.dev",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["Vue.js", "Socket.io", "MongoDB", "Express", "Vuetify"],
    githubUrl: "https://github.com/alexjohnson/task-manager",
    liveUrl: "https://taskmanager.alexjohnson.dev",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "An intelligent analytics dashboard that leverages machine learning to provide actionable insights and predictive analytics for business metrics.",
    techStack: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    githubUrl: "https://github.com/alexjohnson/ai-analytics",
    liveUrl: "https://analytics.alexjohnson.dev",
    image: "/api/placeholder/400/250"
  }
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead frontend development for enterprise applications, mentoring junior developers and implementing modern React architectures."
  },
  {
    id: 2,
    type: "work", 
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Built scalable web applications from conception to deployment, working directly with founders to translate business requirements into technical solutions."
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "University of California, Berkeley",
    location: "Berkeley, CA", 
    period: "2016 - 2020",
    description: "Focused on software engineering and human-computer interaction. Graduated Magna Cum Laude with a 3.8 GPA."
  }
];