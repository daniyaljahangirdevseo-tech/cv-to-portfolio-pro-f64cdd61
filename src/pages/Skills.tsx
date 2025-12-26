import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import Footer from '@/components/Footer';

const Skills = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <SkillsSection />
        <CompetenciesSection />
      </div>
      <Footer />
    </main>
  );
};

export default Skills;
