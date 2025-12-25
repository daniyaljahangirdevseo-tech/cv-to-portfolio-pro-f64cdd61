import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Technical SEO Expert',
    company: 'Salam Experts (Digital Marketing Agency)',
    location: 'Sialkot',
    period: 'August 2024 - Present',
    isCurrent: true,
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
    responsibilities: [
      'Completed intensive 3-week sales training program covering product knowledge, customer engagement, and professional communication',
      'Assisted customers in selecting appropriate electronic products through technical consultation and product expertise',
      'Developed strong active listening and communication skills while managing diverse customer interactions professionally',
      'Maintained empathetic and patient demeanor to ensure positive customer experience and satisfaction levels',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="section-subtitle">Building expertise through hands-on industry roles</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative grid md:grid-cols-2 gap-6 ${
                  index % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-background border-2 border-primary z-10">
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Date badge - visible on mobile only */}
                <div className="md:hidden ml-6 flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="text-primary" />
                  {exp.period}
                </div>

                {/* Content */}
                <div className={`md:[direction:ltr] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card-elevated p-6 ml-6 md:ml-0 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {exp.isCurrent && (
                      <span className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded mb-4">
                        Current Position
                      </span>
                    )}

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-mono [direction:ltr]">
                    <Calendar size={14} className="text-primary" />
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
