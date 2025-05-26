export const SKILLS = {
  frontend: [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'Next.js', level: 90, icon: '🚀' },
    { name: 'Vue.js', level: 85, icon: '💚' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'JavaScript', level: 95, icon: '💛' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨' },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'GraphQL', level: 80, icon: '🔗' },
    { name: 'REST APIs', level: 85, icon: '🌐' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
  ],
  tools: [
    { name: 'Git', level: 90, icon: '📋' },
    { name: 'Vercel', level: 88, icon: '▲' },
    { name: 'CI/CD', level: 82, icon: '🔄' },
    { name: 'React Native', level: 80, icon: '📱' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Next.js, React, and Node.js featuring payment integration and admin dashboard.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/400/300',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'Modern chat app with real-time messaging, file sharing, and group functionality built with React and Socket.io.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
    image: '/api/placeholder/400/300',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'Comprehensive project management tool with drag-and-drop functionality and team collaboration features.',
    technologies: ['Vue.js', 'Vuetify', 'Firebase', 'TypeScript'],
    image: '/api/placeholder/400/300',
    github: '#',
    demo: '#',
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Senior Front-End Developer',
    company: 'Tech Innovation Co.',
    period: '2022 - Present',
    description: 'Leading front-end development initiatives, mentoring junior developers, and implementing modern UI/UX solutions.',
    achievements: [
      'Increased application performance by 40%',
      'Mentored 5+ junior developers',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
  },
  {
    id: 2,
    title: 'Front-End Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality products.',
    achievements: [
      'Built 15+ responsive web applications',
      'Improved code quality through comprehensive testing',
      'Collaborated with UX/UI designers on user-centric designs',
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: '#', icon: '🔗' },
  { name: 'LinkedIn', url: '#', icon: '💼' },
  { name: 'Twitter', url: '#', icon: '🐦' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' },
];