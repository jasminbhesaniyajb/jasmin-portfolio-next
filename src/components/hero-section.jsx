"use client";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Senior Front-End Developer",
    "React.js, Next.js Specialist",
    "Vue.js specialist",
    "Code Mentor",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={elementRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.05}%`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.03}%`,
            top: `${60 + mousePosition.y * 0.03}%`,
            animationDelay: "4s",
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20 dark:opacity-10"
              // style={{
              //   left: `${Math.random() * 100}%`,
              //   top: `${Math.random() * 100}%`,
              //   animationDelay: `${Math.random() * 6}s`,
              //   animationDuration: `${6 + Math.random() * 4}s`,
              // }}
            >
              <div className="w-2 h-2 bg-primary-400 rotate-45 transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 animate-fadeInUp">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-6">
            <span
              className="block text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="gradient-text">Jasmin Bhesaniya</span>
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={cn(
                    "absolute transition-all duration-500 ease-in-out",
                    currentRole === index
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  )}
                >
                  {role}
                </span>
              ))}
            </h2>
          </div>

          {/* Description */}
          <p
            className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            Passionate about creating beautiful, responsive web applications
            with 5+ years of experience in
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {" "}
              React.js, Next.js, and modern frontend technologies
            </span>
            . Currently expanding into full-stack development while mentoring
            the next generation of developers.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div
            className="mt-12 flex justify-center space-x-6 animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            {[
              { name: "GitHub", icon: "🔗", url: "#" },
              { name: "LinkedIn", icon: "💼", url: "#" },
              { name: "Twitter", icon: "🐦", url: "#" },
              {
                name: "Email",
                icon: "📧",
                url: "mailto:your.email@example.com",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 group"
                aria-label={social.name}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
    </section>
  );
};

export default HeroSection;
