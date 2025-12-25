import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'CyberSavvy: Navigating Linux and Essential Cybersecurity',
    issuer: 'Online Certificate Program',
    date: '2024',
    color: 'accent',
    description:
      'Completed comprehensive 8-module cybersecurity course covering cybersecurity fundamentals, online protection strategies, virtualization concepts, Linux security protocols, OSINT techniques, vulnerability scanning methodologies, and ethical exploitation frameworks.',
  },
  {
    title: 'Full Stack Web Development Virtual Internship',
    issuer: 'DevelopersHub.co',
    date: '2024',
    badge: '6-Week Intensive Program',
    color: 'primary',
    description:
      'Hands-on internship specializing in full-stack web development. Gained practical experience building real-time projects utilizing Node.js backend development, RESTful API design and integration, frontend-backend synchronization, database design, and deployment optimization.',
  },
  {
    title: 'PTE Academic Certificate',
    issuer: 'Pearson Test of English',
    date: '2024',
    score: 'Score: 65/90',
    color: 'accent',
    description:
      'Internationally recognized English language proficiency assessment demonstrating professional-level competency across reading, writing, listening, and speaking. Meets admission requirements for Masters programs in English-speaking countries.',
  },
  {
    title: 'Technical SEO Expert Internship',
    issuer: 'Salam Experts (Digital Marketing Agency)',
    date: 'March 2024',
    badge: '3-Month Professional Program',
    color: 'primary',
    description:
      'Gained hands-on professional experience in technical SEO optimization and digital marketing strategy. Learned and applied advanced website audit methodologies, technical SEO best practices, site structure optimization, crawlability analysis, and performance metrics interpretation.',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Certifications & <span className="text-gradient-accent">Development</span>
          </h2>
          <p className="section-subtitle">Continuous learning and professional growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`rounded-xl p-6 transition-transform hover:-translate-y-1 group ${
                cert.color === 'primary'
                  ? 'bg-primary'
                  : 'bg-accent'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg shrink-0 transition-colors ${
                  cert.color === 'primary' 
                    ? 'bg-primary-foreground/20' 
                    : 'bg-accent-foreground/20'
                }`}>
                  <Award className={cert.color === 'primary' ? 'text-primary-foreground' : 'text-accent-foreground'} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className={`font-semibold text-lg leading-tight ${cert.color === 'primary' ? 'text-primary-foreground' : 'text-accent-foreground'}`}>{cert.title}</h3>
                    <span className={`text-xs font-mono shrink-0 ${cert.color === 'primary' ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>{cert.date}</span>
                  </div>
                  <p className={`text-sm mb-2 ${cert.color === 'primary' ? 'text-primary-foreground/80' : 'text-accent-foreground/80'}`}>
                    {cert.issuer}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.score && (
                      <span className={`px-2 py-1 text-xs rounded ${
                        cert.color === 'primary' ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-accent-foreground/20 text-accent-foreground'
                      }`}>
                        {cert.score}
                      </span>
                    )}
                    {cert.badge && (
                      <span className={`px-2 py-1 text-xs rounded ${
                        cert.color === 'primary' ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-accent-foreground/20 text-accent-foreground'
                      }`}>
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${cert.color === 'primary' ? 'text-primary-foreground/90' : 'text-accent-foreground/90'}`}>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
