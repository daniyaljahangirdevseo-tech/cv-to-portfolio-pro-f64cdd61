import Navbar from '@/components/Navbar';
import CertificationsSection from '@/components/CertificationsSection';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';

const Certifications = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CertificationsSection />
        <AwardsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Certifications;
