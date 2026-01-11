import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Daniyal Jahangir – SEO & Web Developer"
        description="Get in touch with Daniyal Jahangir for technical SEO, web development, or professional collaboration opportunities. Contact via email or WhatsApp."
        canonical="https://daniyaljahangir.vercel.app/contact"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
