"use client"
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SKILLS = {
  frontend: [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '🔺' },
    { name: 'TypeScript', level: 80, icon: '📘' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
    { name: 'JavaScript', level: 92, icon: '📝' },
    { name: 'HTML/CSS', level: 95, icon: '🌐' }
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'Express.js', level: 82, icon: '🚀' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'PostgreSQL', level: 78, icon: '🐘' },
    { name: 'REST APIs', level: 88, icon: '🔗' }
  ],
  tools: [
    { name: 'Git', level: 90, icon: '📚' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'AWS', level: 65, icon: '☁️' },
    { name: 'Figma', level: 75, icon: '🎯' },
    { name: 'VS Code', level: 95, icon: '💻' },
    { name: 'Webpack', level: 72, icon: '📦' }
  ]
};

const SkillsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        Object.keys(SKILLS).forEach(category => {
          SKILLS[category].forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [category]: {
                  ...prev[category],
                  [skill.name]: skill.level
                }
              }));
            }, index * 200);
          });
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨', color: 'primary' },
    { key: 'backend', label: 'Backend', icon: '⚙️', color: 'secondary' },
    { key: 'tools', label: 'Tools & Others', icon: '🛠️', color: 'accent' },
  ];

  return (
    <section 
      id="skills" 
      ref={elementRef} 
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-neutral-800 rounded-xl p-1 shadow-lg border border-neutral-200 dark:border-neutral-700">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <div className="space-y-6">
              {SKILLS[activeCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100 + 200}ms` 
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {animatedSkills[activeCategory]?.[skill.name] || 0}%
                    </span>
                  </div>
                  <Progress 
                    value={animatedSkills[activeCategory]?.[skill.name] || 0}
                    className="h-3"
                  />
                </div>
              ))}
            </div>

            {/* Skills Visualization */}
            <div className="relative">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    <span className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">
                        {categories.find(cat => cat.key === activeCategory)?.icon}
                      </span>
                      <span>
                        {categories.find(cat => cat.key === activeCategory)?.label} Skills
                      </span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Circular Progress Visualization */}
                  <div className="grid grid-cols-2 gap-6">
                    {SKILLS[activeCategory].map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="text-center group"
                        style={{
                          animationDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          {/* Background Circle */}
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="32"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="transparent"
                              className="text-neutral-200 dark:text-neutral-700"
                            />
                            {/* Progress Circle */}
                            <circle
                              cx="40"
                              cy="40"
                              r="32"
                              stroke="url(#gradient)"
                              strokeWidth="4"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 32}`}
                              strokeDashoffset={`${2 * Math.PI * 32 * (1 - (animatedSkills[activeCategory]?.[skill.name] || 0) / 100)}`}
                              className="transition-all duration-1000 ease-out"
                              strokeLinecap="round"
                            />
                          </svg>
                          
                          {/* Center Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </span>
                          </div>
                          
                          {/* SVG Gradient Definition */}
                          <svg className="w-0 h-0">
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(59 130 246)" />
                                <stop offset="100%" stopColor="rgb(168 85 247)" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        
                        <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-500">
                          {animatedSkills[activeCategory]?.[skill.name] || 0}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Continuous Learning
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  I believe in staying up-to-date with the latest technologies and continuously improving my skills. 
                  These percentages reflect my current proficiency level and practical experience with each technology. 
                  I'm always eager to learn new tools and frameworks that can help create better user experiences.
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