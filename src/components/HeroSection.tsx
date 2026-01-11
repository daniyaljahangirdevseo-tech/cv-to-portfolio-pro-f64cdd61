import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const roles = [
  "Technical SEO Expert",
  "Full Stack Web Developer",
  "AI Vibe Coder",
  "Digital Marketing Expert",
  "Web Scrapper & AI Automation",
  "Off-Page SEO Expert",
  "On-Page SEO Expert",
];

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const fullName = "Daniyal Jahangir";

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        if (index < fullName.length) {
          index++;
          setDisplayedName(fullName.slice(0, index));
          timeout = setTimeout(type, 150); // Typing speed
        } else {
          isDeleting = true;
          timeout = setTimeout(type, 3000); // Pause before deleting
        }
      } else {
        if (index > 0) {
          index--;
          setDisplayedName(fullName.slice(0, index));
          timeout = setTimeout(type, 100); // Deleting speed
        } else {
          isDeleting = false;
          timeout = setTimeout(type, 500); // Pause before re-typing
        }
      }
    };

    // Initial start
    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFadingOut(false);
      }, 500); // Wait for fade out animation
    }, 4000); // Change role every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[60px] md:min-h-[72px] whitespace-nowrap">
              <span className="text-foreground">{displayedName.split(' ')[0]} </span>
              <span className="text-gradient-primary">{displayedName.split(' ')[1] || ''}</span>
              <span className="ml-1 inline-block w-1 h-6 md:h-12 bg-primary animate-blink align-middle"></span>
            </h1>

            <div className="h-8 md:h-10 mb-6 overflow-hidden">
              <h2 className={`text-xl md:text-2xl text-muted-foreground font-medium ${isFadingOut ? 'animate-fade-out-right' : 'animate-fade-in-left'}`}>
                {roles[roleIndex]}
              </h2>
            </div>

            <p className="opacity-0 animate-fade-up delay-300 text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A motivated Information Technology graduate with hands-on experience in technical SEO,
              web development, and AI-assisted development, seeking opportunities to learn, contribute,
              and grow in dynamic technical environments.
            </p>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-nowrap justify-center lg:justify-start gap-2 sm:gap-4 mb-8 text-[11px] sm:text-sm text-muted-foreground overflow-x-auto no-scrollbar">

              {/* Email */}
              <a
                href="mailto:daniyaljahangir.dev.seo@gmail.com"
                className="flex items-center gap-1.5 hover:text-primary transition-colors whitespace-nowrap"
              >
                <Mail size={14} className="text-primary shrink-0" />
                <span className="hidden sm:inline">daniyaljahangir.dev.seo@gmail.com</span>
                <span className="sm:hidden">Email Me</span>
              </a>

              {/* Separator */}
              <span className="select-none text-muted-foreground opacity-50">|</span>

              {/* Location */}
              <span className="flex items-center gap-1.5 hover:text-accent transition-colors cursor-default whitespace-nowrap">
                <MapPin size={14} className="text-accent shrink-0" />
                <span className="hidden sm:inline">Rangpura Chowk, Sialkot, Punjab 51310, Pakistan</span>
                <span className="sm:hidden">Sialkot, Pakistan</span>
              </span>

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
                href="https://wa.me/message/3ORKWJWZWV4KA1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                Connect on Whatsapp
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <img
                  src={profileImage}
                  alt="Daniyal Jahangir - Technical SEO Expert and Web Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-3xl opacity-30 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float delay-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
