import { Briefcase, Calendar, MapPin, Code, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const experiences = [
  {
    title: 'Technical SEO Expert',
    company: 'Salam Experts (Digital Marketing Agency)',
    location: 'Sialkot',
    period: 'August 2024 - Present',
    isCurrent: true,
    color: 'primary',
    responsibilities: [
      'Conducted comprehensive website audits and technical SEO assessments for 5+ client websites, identifying optimization opportunities and resolving indexing issues',
      'Implemented SEO strategies resulting in improved search visibility and organic traffic metrics',
      'Performed advanced web scraping and competitive data analysis to extract market insights and optimization opportunities',
      'Collaborated with development and marketing teams to ensure website performance optimization and mobile responsiveness standards',
      'Developed and maintained technical documentation for SEO protocols, optimization procedures, and best practices',
      'Managed multiple concurrent projects while maintaining quality standards and meeting aggressive deadlines',
      'Applied problem-solving skills to troubleshoot technical issues and optimize website architecture',
    ],
  },
  {
    title: 'Sales Trainee',
    company: 'Naeem Electronics',
    location: 'Sialkot',
    period: 'July 2024',
    isCurrent: false,
    color: 'accent',
    responsibilities: [
      'Completed intensive 3-week sales training program covering product knowledge, customer engagement, and professional communication',
      'Assisted customers in selecting appropriate electronic products through technical consultation and product expertise',
      'Developed strong active listening and communication skills while managing diverse customer interactions professionally',
      'Maintained empathetic and patient demeanor to ensure positive customer experience and satisfaction levels',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Passion Projects & Professional Work',
    location: 'Remote',
    period: 'August 2024 - Present',
    isCurrent: true,
    color: 'primary',
    isVibeCoding: true,
    responsibilities: [
      'Developing custom websites and applications using Django',
      'Building modern full-stack solutions with the MERN Stack',
      'Leveraging AI tools to enhance development speed and problem-solving',
      'Working on office-assigned projects as well as personal learning-driven builds',
      'Turning concepts into functional, real-world web applications',
      'Passionate about continuous learning and experimenting with new technologies',
    ],
  },
];

const ExperienceSection = () => {
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
      const sectionTop = sectionRect.top;
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
          const timelineCenter = timelineRect.left + timelineRect.width / 2;
          const cardTop = cardRect.top;
          const animatedCircleY = timelineRect.top + (progress * timelineRect.height);
          
          if (animatedCircleY >= cardTop - 50) {
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
    <section ref={sectionRef} id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="section-subtitle">Building expertise through hands-on industry roles</p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {/* Animated line that fills as you scroll */}
          <div 
            className="absolute left-0 md:left-1/2 top-0 w-px bg-primary md:-translate-x-1/2 transition-all duration-100"
            style={{ 
              height: `${scrollProgress * 100}%`,
            }}
          />
          
          {/* Start circle at top */}
          <div 
            className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-primary border-2 border-primary z-20"
            style={{ 
              boxShadow: '0 0 12px hsl(16 100% 57% / 0.6)'
            }}
          />
          
          {/* Animated circle that moves down */}
          <div 
            className="absolute left-0 md:left-1/2 w-3 h-3 -translate-x-1/2 md:-translate-x-1/2 rounded-full z-30 transition-all duration-100"
            style={{ 
              top: `${scrollProgress * 100}%`,
              backgroundColor: activeCardIndex >= 0 && experiences[activeCardIndex]?.color === 'accent' 
                ? 'hsl(var(--accent))' 
                : 'hsl(var(--primary))',
              boxShadow: activeCardIndex >= 0 && experiences[activeCardIndex]?.color === 'accent'
                ? '0 0 12px hsl(75 100% 50% / 0.6)'
                : '0 0 12px hsl(16 100% 57% / 0.6)'
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative grid md:grid-cols-2 gap-6 ${
                  index % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 rounded-full z-10 transition-all duration-300 ${
                  activeCardIndex >= index 
                    ? exp.color === 'primary' ? 'bg-primary border-primary' : 'bg-accent border-accent'
                    : 'bg-background border-2 ' + (exp.color === 'primary' ? 'border-primary' : 'border-accent')
                }`}>
                  {exp.isCurrent && (
                    <span className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                      exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                  )}
                </div>

                {/* Date badge - visible on mobile only */}
                <div className="md:hidden ml-6 flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className={exp.color === 'primary' ? 'text-primary' : 'text-accent'} />
                  {exp.period}
                </div>

                {/* Content */}
                <div className={`md:[direction:ltr] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`rounded-xl p-6 ml-6 md:ml-0 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                    exp.color === 'primary' 
                      ? 'bg-primary hover:shadow-[0_0_40px_rgba(255,87,34,0.3)]' 
                      : 'bg-accent hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]'
                  }`}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-lg shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        exp.color === 'primary' ? 'bg-white/20' : 'bg-black/10'
                      }`}>
                        {exp.isVibeCoding ? (
                          <Code className={exp.color === 'primary' ? 'text-white' : 'text-black'} size={20} />
                        ) : (
                          <Briefcase className={exp.color === 'primary' ? 'text-white' : 'text-black'} size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${exp.color === 'primary' ? 'text-white' : 'text-black'}`}>{exp.title}</h3>
                        <p className={`text-sm ${exp.color === 'primary' ? 'text-white/80' : 'text-black/70'}`}>{exp.company}</p>
                        <div className={`flex items-center gap-1 text-xs mt-1 ${exp.color === 'primary' ? 'text-white/70' : 'text-black/60'}`}>
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {exp.isCurrent && (
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded mb-4 ${
                        exp.color === 'primary' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                      }`}>
                        {exp.isVibeCoding && <Sparkles size={12} />}
                        {exp.isVibeCoding ? 'Passion Project' : 'Current Position'}
                      </span>
                    )}

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className={`text-sm flex items-start gap-2 ${
                          exp.color === 'primary' ? 'text-white/90' : 'text-black/80'
                        }`}>
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            exp.color === 'primary' ? 'bg-white/70' : 'bg-black/50'
                          }`} />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Date - desktop only */}
                <div
                  className={`hidden md:flex items-start justify-${
                    index % 2 === 0 ? 'start' : 'end'
                  } pt-6 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <span className={`flex items-center gap-2 text-sm font-mono [direction:ltr] ${
                    exp.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
