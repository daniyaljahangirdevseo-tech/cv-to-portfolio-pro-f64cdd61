import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CareerObjective from '@/components/CareerObjective';
import SkillsSection from '@/components/SkillsSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import LanguagesSection from '@/components/LanguagesSection';
import AwardsSection from '@/components/AwardsSection';
import AdditionalInfo from '@/components/AdditionalInfo';
import DownloadsSection from '@/components/DownloadsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CareerObjective />
      <SkillsSection />
      <CompetenciesSection />
      <ExperienceSection />
      <CertificationsSection />
      <LanguagesSection />
      <AwardsSection />
      <AdditionalInfo />
      <DownloadsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
