import { About } from "@/components/About";
import { Awards, Competitions, Extracurriculars } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Providers } from "@/components/Providers";
import { about, education } from "@/data/about";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

/**
 * schema.org Person markup. Helps Google show a rich result for the name
 * and links the profile to the right social accounts.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: about.bio,
  email: `mailto:${contact.email}`,
  url: site.url,
  alumniOf: education.map((entry) => ({
    "@type": "EducationalOrganization",
    name: entry.school,
  })),
  sameAs: [contact.linkedin, contact.github],
};

export default function HomePage() {
  return (
    <>
      {/* Keyboard users can jump straight past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Providers />
        <About />
        <Experience />
        <Projects />
        <Competitions />
        <Awards />
        <Certificates />
        <Extracurriculars />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
