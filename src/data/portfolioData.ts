export const personalInfo = {
  name: "Rudraksha Singh Chauhan",
  tagline: "Full-Stack Developer & UI/UX Enthusiast",
  bio: "Engineering student exploring full-stack development, AI integration, and innovative product building. Always learning, building, and improving.",
highlights: [
  { label: "Role", value: "Aspiring Software Engineer" },
  { label: "Education", value: "Final Year Engineering Student" },
  { label: "Seeking", value: "Jobs & Internships" },
  { label: "Interest", value: "Full Stack Development & AI" }
],
  email: "rudrakshasingh6@email.com",
  phone: "+91 8545800628",
  social: {
    github: "https://github.com/rudraa19nov",
    linkedin: "https://www.linkedin.com/in/rudraksha-singh-chauhan-620294287/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2Ff9HbnnuSvaB9%2FWZwfWQjw%3D%3D",
    // twitter: "https://twitter.com/alexjohnson"
  }
};

export const skills = {
  frontend: [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Redux", icon: "🔄" },
  { name: "TypeScript", icon: "📘" },
  { name: "Responsive Design", icon: "📱" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Material UI", icon: "🧩" }
],
 backend: [
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Firebase", icon: "🔥" },
  { name: "JWT Authentication", icon: "🔐" },
  { name: "Python", icon: "🐍" },
  //{ name: "C++", icon: "💻" }
],
  tools: [
  { name: "Git", icon: "📚" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💙" },
  { name: "Postman", icon: "📮" },
  { name: "Docker", icon: "🐳" },
  { name: "Canva", icon: "🖌️" },
  { name: "Render", icon: "▲" },
  //{ name: "Netlify", icon: "🌐" },
  { name: "Firebase", icon: "🔥" }
]
};

export const projects = [
  {
    id: 1,
    title: "AI Learner Hub",
    description: "An AI-powered platform designed for engineering students to explore technologies, career paths, and learning resources based on their interests. Features personalized recommendations, roadmaps, and curated content for skill development.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration"],
    githubUrl: "https://github.com/rudraa19nov/ai-learner-hub",
    liveUrl: "https://your-live-link.com",
    image: "/api/placeholder/400/250"
  },

  {
    id: 2,
    title: "Airbnb Clone",
    description: "A full-stack Airbnb-inspired web application with property listings, authentication, booking features, image uploads, and responsive UI design.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/rudraa19nov/airbnb-clone",
    liveUrl: "https://airnb-uiw8.onrender.com/",
    image: "/api/placeholder/400/250"
  },

  {
    id: 3,
    title: "Alumni Connect",
    description: "A MERN stack platform built to strengthen alumni-student connections through networking, mentorship opportunities, announcements, and communication features.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/rudraa19nov/alumni-connect",
    liveUrl: "https://your-live-link.com",
    image: "/api/placeholder/400/250"
  },

  {
    id: 4,
    title: "Krishi Sakhi",
    description: "A smart agriculture solution developed during Smart India Hackathon to support farmers with technology-driven assistance, information access, and digital solutions.",
    techStack: ["React.js", "Node.js", "MongoDB", "AI Tools"],
    githubUrl: "https://github.com/rudraa19nov/krishi-sakhi",
    liveUrl: "https://your-live-link.com",
    image: "/api/placeholder/400/250"
  }
];

export const experience = [
  {
    id: 1,
    type: "achievement",
    title: "Smart India Hackathon (SIH) Winner",
    company: "Smart India Hackathon",
    location: "India",
    period: "2025",
    description: "Worked with a team to develop 'Krishi Sakhi', an innovative solution for farmers. Contributed to full-stack development, problem solving, and project presentation during the national-level hackathon."
  },
  {
    id: 2,
    type: "project",
    title: "Full Stack Developer",
    company: "Personal Projects",
    location: "Remote",
    period: "2024 - Present",
    description: "Built multiple web applications including AI Learner Hub, Airbnb Clone, and Alumni Connect using MERN stack and AI integration."
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Technology in Engineering",
    company: "Bundekhand Institute of Engineering and Technology, Jhansi",
    location: "Jhansi",
    period: "2023 - 2027",
    description: "Final year engineering student focused on full-stack development, AI applications, and software engineering."
  }
];