"use client"
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card } from './ui/card';
import { PROJECTS } from '@/constants';

const ProjectsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const ProjectCard = ({ project, index }) => {
    const isHovered = false;
    
    return (
      <div
        className={`group transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <Card className="h-full pt-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
          {/* Project Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110"
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
            {/* <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                Frontend
              </span>
            </div> */}

            {/* Featured Badge */}
            {/* {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-full">
                  Featured
                </span>
              </div>
            )} */}
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
            {project.liveUrl && (
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
            </div>
            )}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      ref={elementRef} 
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-16 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A showcase of my recent work and projects. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="p-4 md:p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Interested in Working Together?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I'm always excited to work on new projects and collaborate with talented individuals. 
                  Let's create something amazing together!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;