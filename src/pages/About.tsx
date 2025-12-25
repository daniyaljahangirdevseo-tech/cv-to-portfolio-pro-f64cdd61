import Navbar from '@/components/Navbar';
import CareerObjective from '@/components/CareerObjective';
import CompetenciesSection from '@/components/CompetenciesSection';
import LanguagesSection from '@/components/LanguagesSection';
import AdditionalInfo from '@/components/AdditionalInfo';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CareerObjective />
        <CompetenciesSection />
        <LanguagesSection />
        <AdditionalInfo />
      </div>
      <Footer />
    </main>
  );
};

export default About;
