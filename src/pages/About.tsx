import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import CareerObjective from '@/components/CareerObjective';
import LanguagesSection from '@/components/LanguagesSection';
import AdditionalInfo from '@/components/AdditionalInfo';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { User, GraduationCap, Heart, Calendar } from 'lucide-react';

const educationTimeline = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Gujrat, Affiliated Campus: Govt. Murray College, Sialkot',
    period: '2020 - 2024',
    description: 'Comprehensive study of IT fundamentals, programming, web development, and cybersecurity.',
    color: 'primary'
  },
  {
    degree: 'Intermediate (FSc Pre-Engineering)',
    institution: 'Punjab College of Boys, Sialkot',
    period: '2018 - 2021',
    description: 'Foundation in mathematics, physics, and engineering principles.',
    color: 'primary'
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Govt. Pilot Higher Secondary School, Sialkot',
    period: '2017 - 2019',
    description: 'Strong academic foundation with focus on science and mathematics.',
    color: 'primary'
  },
];

const interests = [
  'Web Development & Design',
  'Search Engine Optimization & Marketing',
  'Artificial Intelligence',
  'Problem Solving',
  'Tech Innovation',
  'Continuous Learning',
  'Vibe Coding',
  'Prompt Engineering',
];

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const section = sectionRef.current;
      const timeline = timelineRef.current;
      const sectionRect = section.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      // Start slightly earlier for better feel
      const sectionTop = sectionRect.top - viewportHeight * 0.2;
      const sectionHeight = sectionRect.height;

      // Calculate progress based on section scroll position
      const startOffset = viewportHeight * 0.3;
      const endOffset = sectionHeight - viewportHeight * 0.5;

      const scrolled = -sectionTop + startOffset;
      const progress = Math.min(Math.max(scrolled / endOffset, 0), 1);

      setScrollProgress(progress);

      // Check which card the animated circle has reached
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardRect = cardRef.getBoundingClientRect();
          const cardTop = cardRect.top;
          const animatedCircleY = timelineRect.top + (progress * timelineRect.height);

          // Trigger active state when circle reaches the card
          if (animatedCircleY >= cardTop - 100) {
            setActiveCardIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="About Daniyal Jahangir – SEO & Web Professional"
        description="Learn more about Daniyal Jahangir, an IT graduate with hands-on experience in Technical SEO, web development, and AI-assisted solutions."
        canonical="https://daniyaljahangir.vercel.app/about"
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <CareerObjective />

          {/* Personal Introduction Section */}
          <section className="py-16 px-6 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <User className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">About Me</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm <span className="text-foreground font-semibold">Daniyal Jahangir</span>,
                    a passionate IT professional from Sialkot, Pakistan. With a strong foundation in
                    Information Technology and hands-on experience in Technical SEO and Web Development,
                    I thrive on solving complex problems and creating impactful digital solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in technology began with curiosity and has evolved into a career focused
                    on helping businesses grow their online presence through optimized websites and
                    strategic SEO implementations. I combine technical expertise with creative thinking
                    to deliver results that matter.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As a fresh graduate, I bring enthusiasm, adaptability, and a hunger for learning.
                    I've worked on real-world projects including AI-assisted development, full-stack
                    applications, and comprehensive SEO strategies for various clients.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in continuous improvement and staying updated with the latest industry
                    trends. Whether it's mastering a new framework or optimizing a website for better
                    performance, I approach every challenge with dedication and precision.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Timeline Section */}
          <section ref={sectionRef} className="py-16 px-6 relative">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">Education</h2>
              </div>

              <div ref={timelineRef} className="relative pl-8 md:pl-0">
                {/* Timeline line background */}
                {/* Desktop: Centered. Mobile: Left aligned */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                {/* Animated line that fills as you scroll */}
                <div
                  className="absolute left-[39px] md:left-1/2 top-0 w-px md:-translate-x-1/2 transition-all duration-100 bg-primary"
                  style={{
                    height: `${scrollProgress * 100}%`,
                  }}
                />

                {/* Start circle at top */}
                <div
                  className="absolute left-[39px] md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full bg-primary border-2 border-primary z-20"
                  style={{
                    boxShadow: '0 0 12px hsl(16 100% 57% / 0.6)'
                  }}
                />

                {/* Animated circle that moves down */}
                <div
                  className="absolute left-[39px] md:left-1/2 w-3 h-3 -translate-x-[5px] md:-translate-x-1/2 rounded-full z-30 transition-all duration-100 bg-primary"
                  style={{
                    top: `${scrollProgress * 100}%`,
                    boxShadow: '0 0 12px hsl(16 100% 57% / 0.6)'
                  }}
                />

                <div className="space-y-12">
                  {educationTimeline.map((edu, index) => (
                    <div
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className={`relative grid md:grid-cols-2 gap-6 ${index % 2 === 0 ? '' : 'md:[direction:rtl]'
                        }`}
                    >
                      {/* Timeline dot */}
                      {/* Desktop: Centered. Mobile: Left aligned matching timeline */}
                      <div className={`absolute left-[39px] md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full z-10 transition-all duration-300 ${activeCardIndex >= index
                        ? 'bg-primary border-primary'
                        : 'bg-background border-2 border-primary'
                        }`}>
                        {activeCardIndex >= index && (
                          <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary" />
                        )}
                      </div>

                      {/* Content Wrapper */}
                      <div className={`md:[direction:ltr] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                        <div
                          className={`bg-card/50 rounded-xl p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:scale-105 cursor-default ${activeCardIndex >= index ? 'border-primary/50' : 'border-transparent'
                            } border`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                            {/* Mobile Date */}
                            <span className="md:hidden flex items-center gap-1.5 text-xs text-primary font-medium font-mono">
                              <Calendar size={12} />
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-accent font-medium mb-2">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>

                          {/* Desktop Date (if needed visible inside card? No, usually outside) */}
                        </div>
                      </div>

                      {/* Date - desktop only, opposite side */}
                      <div
                        className={`hidden md:flex items-start justify-${index % 2 === 0 ? 'start' : 'end'
                          } pt-6 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                      >
                        <span className="flex items-center gap-2 text-sm font-mono [direction:ltr] text-primary font-medium">
                          <Calendar size={16} />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section className="py-16 px-6 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">Interests & Passions</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 bg-card rounded-full text-foreground font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <LanguagesSection />
          <AdditionalInfo />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
