"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SKILLS } from "@/constants";

const SkillsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        Object.keys(SKILLS).forEach((category) => {
          SKILLS[category].forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [category]: {
                  ...prev[category],
                  [skill.name]: skill.level,
                },
              }));
            }, index * 200);
          });
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const categories = [
    { key: "frontend", label: "Frontend", icon: "🎨", color: "primary" },
    { key: "backend", label: "Backend", icon: "⚙️", color: "secondary" },
    { key: "tools", label: "Tools & Others", icon: "🛠️", color: "accent" },
  ];

  return (
    <section
      id="skills"
      ref={elementRef}
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-14 bg-neutral-50 dark:bg-neutral-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Technologies and tools I work with to create amazing digital
              experiences
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex sm:inline-flex justify-center bg-white dark:bg-neutral-800 rounded-xl p-1 shadow-lg border border-neutral-200 dark:border-neutral-700 min-w-full sm:min-w-0">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap flex-1 sm:flex-none min-w-0 ${
                    activeCategory === category.key
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  }`}
                >
                  <span className="text-sm sm:text-base lg:text-lg flex-shrink-0">
                    {category.icon}
                  </span>
                  <span className="text-[10px] sm:text-sm lg:text-base leading-tight text-center sm:text-left">
                    {/* Show abbreviated text on mobile, full text on larger screens */}
                    <span className="sm:hidden">
                      {category.label.split(" ")[0]}
                    </span>
                    <span className="hidden sm:inline">{category.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-lg sm:text-xl lg:text-2xl">
                    <span className="text-2xl sm:text-3xl lg:text-4xl">
                      {
                        categories.find((cat) => cat.key === activeCategory)
                          ?.icon
                      }
                    </span>
                    <span className="font-semibold text-primary-600 text-center leading-tight">
                      <span className="block sm:inline">
                        {
                          categories.find((cat) => cat.key === activeCategory)
                            ?.label
                        }
                      </span>
                      <span className="block sm:inline sm:ml-1">
                        Technologies
                      </span>
                    </span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {SKILLS[activeCategory].map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group flex flex-col items-center p-4 rounded-xl bg-white dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                      style={{
                        transitionDelay: `${index * 100 + 200}ms`,
                      }}
                    >
                      {/* Skill Logo */}
                      <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to a simple colored circle with first letter if image fails
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg hidden">
                          {skill.name.charAt(0)}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-4 md:p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Always Learning
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  I stay current with the latest technologies and best practices
                  in web development. These are the core technologies I use to
                  build modern, scalable, and user-friendly applications. I'm
                  always exploring new tools and frameworks to enhance my
                  development workflow and create better solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
