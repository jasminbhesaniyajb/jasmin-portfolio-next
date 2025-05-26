"use client"
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text transition-colors duration-300">
      <h1 className="text-red-500">sjkjd fffffffffffffffffffffffffffffffffffffffff</h1>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
