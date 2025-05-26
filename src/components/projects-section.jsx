"use client"
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card } from './ui/card';

// Mock projects data - replace with your actual projects
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce frontend with sleek design, shopping cart functionality, product filtering, and responsive checkout flow. Features smooth animations and optimized user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "shadcn/ui"],
    category: "Frontend",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://taskmaster-app.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
    category: "Frontend",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A modern weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://weather-dashboard-pro.vercel.app",
    githubUrl: "https://github.com/username/weather-dashboard",
    techStack: ["Next.js", "Tailwind CSS", "Chart.js", "OpenWeather API"],
    category: "Frontend",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Frontend dashboard for social media metrics with interactive data visualization, engagement tracking, and performance insights with modern UI components.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://social-analytics.vercel.app",
    githubUrl: "https://github.com/username/social-analytics",
    techStack: ["React", "D3.js", "Tailwind CSS", "Chart.js", "shadcn/ui"],
    category: "Frontend",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations, dark mode support, and optimized performance. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://portfolio-website.vercel.app",
    githubUrl: "https://github.com/username/portfolio",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    category: "Frontend",
    featured: false
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A recipe discovery app with ingredient-based search, nutritional information, and meal planning features. Includes user favorites and shopping lists.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
    liveUrl: "https://recipe-finder-pro.vercel.app",
    githubUrl: "https://github.com/username/recipe-finder",
    techStack: ["React", "Tailwind CSS", "Spoonacular API", "Firebase"],
    category: "Frontend",
    featured: false
  }
];

const ProjectsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
//   const [hoveredProject, setHoveredProject] = useState(null);

  const ProjectCard = ({ project, index }) => {
    // const isHovered = hoveredProject === project.id;
    const isHovered = false; // Placeholder for hover state logic
    
    return (
      <div
        className={`group transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        // onMouseEnter={() => setHoveredProject(project.id)}
        // onMouseLeave={() => setHoveredProject(null)}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center';
              }}
            />
            
            {/* Overlay on hover */}
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center space-x-4 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                title="View Live Site"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                title="View Source Code"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                Frontend
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {project.title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center justify-between">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>Live Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      ref={elementRef} 
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A showcase of my recent work and projects. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Interested in Working Together?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I'm always excited to work on new projects and collaborate with talented individuals. 
                  Let's create something amazing together!
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get In Touch
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;