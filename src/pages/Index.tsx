import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO
        title="Daniyal Jahangir – Technical SEO & Web Developer"
        description="Official portfolio of Daniyal Jahangir, Technical SEO Specialist and Web Developer. Explore skills, experience, projects, and professional background."
        canonical="https://daniyaljahangir.vercel.app/"
        keywords="Daniyal Jahangir, Technical SEO Expert, Web Developer, SEO Specialist, Full Stack Developer, Pakistan, Sialkot"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
