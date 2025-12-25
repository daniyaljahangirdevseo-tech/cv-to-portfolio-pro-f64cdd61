import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile.png';
import signatureImage from '@/assets/signature.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            </div>
            
            <h1 className="opacity-0 animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Daniyal </span>
              <span className="text-gradient-primary">Jahangir</span>
            </h1>
            
            <h2 className="opacity-0 animate-fade-up delay-200 text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Technical SEO Expert & Web Developer
            </h2>
            
            <p className="opacity-0 animate-fade-up delay-300 text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A motivated Information Technology graduate with hands-on experience in technical SEO, 
              web development, and AI-assisted development, seeking opportunities to learn, contribute, 
              and grow in dynamic technical environments.
            </p>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:daniyaljahangir.dev.seo@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span className="hidden sm:inline">daniyaljahangir.dev.seo@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="tel:+923187582288"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>+92 318 7582288</span>
              </a>
            </div>

            <div className="opacity-0 animate-fade-up delay-500 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://linkedin.com/in/daniyal-jahangir-9a0601369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                View Experience
              </a>
            </div>

            {/* Location */}
            <div className="opacity-0 animate-fade-up delay-500 mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-accent" />
              <span>Rangpura Chowk, Sialkot, Punjab 51310, Pakistan</span>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <img
                  src={profileImage}
                  alt="Daniyal Jahangir - Technical SEO Expert and Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-3xl opacity-30 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float delay-200" />
            </div>
            
            {/* Signature */}
            <div className="mt-6">
              <img
                src={signatureImage}
                alt="Daniyal's Signature"
                className="h-16 md:h-20 object-contain opacity-80 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
