import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import { siteConfig } from "@/lib/site";

// Home inherits title/description/OG/Twitter/robots/canonical from the root layout.
export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        image: `${siteConfig.url}/images/jasmin-profile.webp`,
        sameAs: [
          siteConfig.social.linkedin,
          siteConfig.social.github,
          siteConfig.social.twitter,
          siteConfig.social.medium,
        ],
        worksFor: { "@type": "Organization", name: "Simprosys InfoMedia" },
        knowsAbout: [
          "React",
          "Next.js",
          "React Native",
          "Vue.js",
          "Remix",
          "Flutter",
          "Supabase",
          "JavaScript",
          "TypeScript",
          "UI/UX Design",
          "Frontend Development",
          "Web Performance",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-neutral-50 text-neutral-800 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-200">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ContactSection /> */}

        <Footer />
      </main>
    </>
  );
}
