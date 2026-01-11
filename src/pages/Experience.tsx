import Navbar from '@/components/Navbar';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Experience = () => {
  return (
    <>
      <SEO
        title="Professional Experience – Technical SEO & Developer"
        description="Explore Daniyal Jahangir's professional experience in Technical SEO, CMS optimization, backlink audits, and SEO-driven web development."
        canonical="https://daniyaljahangir.vercel.app/experience"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <ExperienceSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Experience;
