import Navbar from '@/components/Navbar';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Experience = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  );
};

export default Experience;
