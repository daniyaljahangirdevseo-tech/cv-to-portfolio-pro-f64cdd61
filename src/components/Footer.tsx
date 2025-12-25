import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-gradient-primary">Daniyal</span>{' '}
              <span className="text-gradient-accent">Jahangir</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Technical SEO Expert & Web Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:daniyaljahangir.dev.seo@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="tel:+923187582288"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Phone</span>
            </a>
            <a
              href="https://linkedin.com/in/daniyal-jahangir-9a0601369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Daniyal Jahangir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
