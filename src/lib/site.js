// Single source of truth for site-wide SEO / metadata.
// ⚠️ If your production domain changes, update `url` here only.
export const siteConfig = {
  name: "Jasmin Bhesaniya",
  title: "Jasmin Bhesaniya — Senior Frontend Developer",
  shortName: "Jasmin Bhesaniya",
  description:
    "Jasmin Bhesaniya is a Senior Frontend Developer with 5+ years of experience building fast, accessible, beautiful web and mobile apps with React, Next.js, React Native and Vue. Explore my portfolio, projects and blog.",
  url: "https://jasminbhesaniya.com",
  locale: "en_US",
  author: "Jasmin Bhesaniya",
  email: "jasminbhesaniya@gmail.com",
  jobTitle: "Senior Frontend Developer",
  location: {
    city: "Ahmedabad",
    region: "Gujarat",
    country: "India",
  },
  // Twitter/X handle (without the URL)
  twitter: "@BhesaniyaJb",
  // Google Search Console verification token
  googleVerification: "zF_IO-8AV8Mx49Dclh-LYjihNIYbLuxh1GXWbXRKXqM",
  social: {
    github: "https://github.com/jasminbhesaniyajb",
    linkedin: "https://www.linkedin.com/in/jasmin-bhesaniya-2aab611b1",
    twitter: "https://x.com/BhesaniyaJb",
    medium: "https://medium.com/@jasminbhesaniya",
  },
  keywords: [
    "Jasmin Bhesaniya",
    "Frontend Developer",
    "Senior Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Vue.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "UI/UX Developer",
    "Web Developer Ahmedabad",
    "Portfolio",
  ],
};

// Convenience: absolute URL helper.
export const absoluteUrl = (path = "") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
