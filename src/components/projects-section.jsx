"use client";
import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Card } from "./ui/card";
import { PROJECTS } from "@/constants";

const MAX_VISIBLE_TECH = 4;

// Guard against missing or placeholder/example URLs that would 404.
const isValidUrl = (url) =>
  typeof url === "string" &&
  url.startsWith("http") &&
  !url.includes("github.com/username/");

const ProjectCard = ({ project, index, isVisible }) => {
  const hasLive = isValidUrl(project.liveUrl);
  const hasGithub = isValidUrl(project.githubUrl);
  const tech = project.techStack ?? [];
  const visibleTech = tech.slice(0, MAX_VISIBLE_TECH);
  const hiddenTech = tech.slice(MAX_VISIBLE_TECH);

  return (
    <div
      className={`group h-full transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="relative h-full gap-0 py-0 overflow-hidden border-neutral-200 dark:border-neutral-700/70 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-300 dark:hover:border-primary-500/50">
        {/* Media */}
        <div className="relative w-full h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center";
            }}
          />

          {/* Hover scrim + quick actions (desktop affordance) */}
          {(hasLive || hasGithub) && (
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/75 via-black/40 to-black/10 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live`}
                  title="View live site"
                  className="translate-y-2 rounded-full bg-white/15 p-3 text-white ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/30 group-hover:translate-y-0"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  title="View source code"
                  className="translate-y-2 rounded-full bg-white/15 p-3 text-white ring-1 ring-white/30 backdrop-blur-md transition-all delay-75 duration-300 hover:bg-white/30 group-hover:translate-y-0"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          )}

          {/* Category badge */}
          {project.category && (
            <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/80 px-2.5 py-1 text-xs font-medium text-neutral-700 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-200">
              {project.category}
            </span>
          )}

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 line-clamp-2 text-xl font-bold text-neutral-800 transition-colors duration-200 group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400">
            {project.title}
          </h3>

          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          {/* Tech stack */}
          {tech.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {visibleTech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700/60 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
              {hiddenTech.length > 0 && (
                <span
                  title={hiddenTech.join(", ")}
                  className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
                >
                  +{hiddenTech.length}
                </span>
              )}
            </div>
          )}

          {/* Footer actions, pinned to the bottom for a consistent baseline */}
          {(hasLive || hasGithub) && (
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-700/50">
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="projects"
      ref={elementRef}
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-16 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="mono-label mb-3">// 03. projects</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A showcase of my recent work and projects. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
