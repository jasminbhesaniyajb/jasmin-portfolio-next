"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import CodeTerminal from "./code-terminal";
import HeroMascot from "./hero-mascot";

const roles = [
  "React.js & Next.js Expert",
  "React Native Developer",
  "Vue.js Engineer",
  "UI / UX Focused",
];

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/jasminbhesaniyajb" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jasmin-bhesaniya-2aab611b1/" },
  { name: "Email", icon: Mail, url: "mailto:jasminbhesaniya@gmail.com" },
];

const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={elementRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-primary-50/40 via-neutral-50 to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900"
    >
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.4] dark:opacity-[0.5]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary-500/15 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-secondary-500/15 blur-3xl animate-float" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left: intro */}
          <div
            className={cn(
              "relative transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Availability badge */}
            {/* <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for work
              </span>
            </div> */}

            <p className="mb-3 font-mono text-sm text-neutral-500 dark:text-neutral-400">
              Hi, my name is
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient-animated">Jasmin Bhesaniya</span>
            </h1>

            {/* Rotating role */}
            <div className="mt-4 flex items-center gap-2 font-mono text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl">
              <span className="leading-none text-secondary-500">&lt;</span>
              <span
                className="relative inline-flex h-8 max-w-full items-center overflow-hidden transition-[width] duration-500 ease-in-out lg:h-9"
                style={{ width: `${roles[currentRole].length}ch` }}
              >
                {roles.map((role, index) => (
                  <span
                    key={role}
                    aria-hidden={currentRole !== index}
                    className={cn(
                      "absolute inset-0 flex items-center whitespace-nowrap font-semibold text-neutral-800 transition-all duration-500 ease-in-out dark:text-neutral-100",
                      currentRole === index
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0"
                    )}
                  >
                    {role}
                  </span>
                ))}
              </span>
              <span className="leading-none text-secondary-500">/&gt;</span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              I craft beautiful, responsive web applications with{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                5+ years
              </span>{" "}
              of experience across React.js, Next.js, React Native, Vue.js, Remix.js and Flutter  — now
              expanding into full-stack while mentoring the next generation of devs.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/40"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:jasminbhesaniya@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/60 px-6 py-3 font-semibold text-neutral-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-200 dark:hover:text-primary-400"
              >
                Get in touch
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white/70 text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-300 dark:hover:text-primary-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Character mascot — fills the empty lower gap (desktop only) */}
            <div className="pointer-events-none absolute -bottom-6 right-0 z-20 hidden lg:block xl:-bottom-2">
              <HeroMascot className="w-44 xl:w-48" />
            </div>
          </div>

          {/* Right: code terminal */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out lg:pl-6",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <CodeTerminal />
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll to about"
          className="mx-auto mt-14 hidden items-center justify-center text-neutral-400 transition-colors hover:text-primary-500 lg:flex"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
