export const SKILLS = {
  frontend: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "REST API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
  ],
  tools: [
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Threease_pro",
    description: "This web app is use for hospital management and this project focuses on the user interface that is accessible to the hospital staff and the patients.",
    image: "/images/threease_pro.png",
    liveUrl: "https://reserve.threease.com/",
    githubUrl: "https://github.com/username/ecommerce-platform",
    techStack: ["Nuxt.js", "Vuex", "Typescript", "HTML5", "CSS3", "SCSS", "Vuetify", "storybook"],
    category: "Frontend",
  },
  {
    id: 2,
    title: "Makro PRO Mobile App",
    description: "This is a mobile application and Ecommerce app for android and ios. This app is use for online shopping or buying products and used to give customer access to online food orders.",
    image: "/images/makro_pro_mobile_app.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.makromangoapp.production&pcampaignid=web_share",
    techStack: ["React Native", "Redux", "redux-saga", "Graphql","Typescript"],
    category: "Frontend",
    featured: false
  },
  {
    id: 3,
    title: "Makro PRO Web",
    description: "This is a mobile application and Ecommerce app for android and ios. This app is use for online shopping or buying products and used to give customer access to online food orders.",
    image: "/images/makro_pro_web.png",
    liveUrl: "https://www.makro.pro/en",
    // githubUrl: "https://github.com/username/weather-dashboard",
    techStack: ["Next.js", "Redux", "redux-saga", "GraphQL","Typescript"],
    category: "Frontend",
    featured: false
  },
  {
    id: 4,
    title: "Easy Render",
    description: "Easy-Render is a platform designed to connect clients seeking digital art or design services with talented freelance artists. The platform serves as a marketplace where clients can post their project requirements and artists can bid on those projects based on their expertise and availability.",
    image: "/images/easy_render.png",
    liveUrl: "https://app.easyrender.com/",
    // githubUrl: "https://github.com/username/social-analytics",
    techStack: ["Next.js", "Zustand", "Shadcn ui", "react-onesignal", "HTML5", "CSS3", "Tailwind CSS"],
    category: "Frontend",
    featured: false
  },
  {
    id: 5,
    title: "MHERC (Mental Health Education and Resource Centre)",
    description: "MHERC is a comprehensive platform providing a range of mental health services categorized for easy access. Users can log in to manage their favorite services and utilize robust filtering and search functionalities to find exactly what they need. The platform includes an interactive map displaying service locations with detailed info markers.",
    image: "/images/mherc_web.png",
    liveUrl: "https://mhaservicefinder.mherc.org.nz/",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn ui", "HTML5", "CSS3", "Directus SDK API"],
    category: "Frontend",
    featured: false
  },
  {
    id: 6,
    title: "GothamMeds",
    description: "GothamMeds is a feature-rich e-commerce platform designed for seamless online shopping.",
    image: "/images/gotham.png",
    liveUrl: "https://gothammeds.com/",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn ui", "HTML5", "CSS3"],
    category: "Frontend",
    featured: false
  },
  // {
  //   id: 7,
  //   title: "GothamMeds Admin",
  //   description: "GothamMeds Management Dashboard ",
  //   image: "/images/gotham_admin.png",
  //   // liveUrl: "https://gothammeds.com/",
  //   techStack: ["Next.js", "Tailwind CSS", "Shadcn ui", "HTML5", "CSS3"],
  //   category: "Frontend",
  //   featured: false
  // }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Senior Front-End Developer",
    company: "Tech Innovation Co.",
    period: "2022 - Present",
    description:
      "Leading front-end development initiatives, mentoring junior developers, and implementing modern UI/UX solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Mentored 5+ junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built 15+ responsive web applications",
      "Improved code quality through comprehensive testing",
      "Collaborated with UX/UI designers on user-centric designs",
    ],
  },
];
