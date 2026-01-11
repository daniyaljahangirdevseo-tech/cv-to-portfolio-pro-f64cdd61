import Navbar from '@/components/Navbar';
import CertificationsSection from '@/components/CertificationsSection';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Certifications = () => {
  return (
    <>
      <SEO
        title="Certifications & Professional Development"
        description="View certifications and training in Technical SEO, Full Stack Web Development, cybersecurity fundamentals, and English language proficiency."
        canonical="https://daniyaljahangir.vercel.app/certifications"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <CertificationsSection />
          <AwardsSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Certifications;
