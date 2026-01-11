import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Skills = () => {
  return (
    <>
      <SEO
        title="Technical SEO & Web Development Skills"
        description="Discover technical SEO, CMS optimization, web development, and AI-assisted coding skills including WordPress, Shopify, Django, and Node.js."
        canonical="https://daniyaljahangir.vercel.app/skills"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <SkillsSection />
          <CompetenciesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Skills;
