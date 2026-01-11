import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'CyberSavvy: Navigating Linux and Essential Cybersecurity',
    issuer: 'Online Certificate Program',
    date: 'Jan 2024',
    color: 'accent',
    description:
      'Completed comprehensive 8-module cybersecurity course covering cybersecurity fundamentals, online protection strategies, virtualization concepts, Linux security protocols, OSINT techniques, vulnerability scanning methodologies, and ethical exploitation frameworks.',
  },
  {
    title: 'PTE Academic Certificate',
    issuer: 'Pearson Test of English',
    date: 'Mar 2024',
    score: 'Score: 65/90',
    color: 'primary',
    description:
      'Internationally recognized English language proficiency assessment demonstrating professional-level competency across reading, writing, listening, and speaking. Meets admission requirements for Masters programs in English-speaking countries.',
  },
  {
    title: 'Technical SEO Expert Internship',
    issuer: 'Salam Experts (Digital Marketing Agency)',
    date: 'Aug-Oct 2024',
    badge: '3-Month Professional Program',
    color: 'accent',
    description:
      'Gained hands-on professional experience in technical SEO optimization and digital marketing strategy. Learned and applied advanced website audit methodologies, technical SEO best practices, site structure optimization, crawlability analysis, and performance metrics interpretation.',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'DevelopersHub.co',
    date: 'Jun-Jul 2025',
    badge: '6-Week Remote Internship Program',
    color: 'primary',
    description:
      'Hands-on internship specializing in full-stack web development. Gained practical experience building real-time projects utilizing Node.js backend development, RESTful API design and integration, frontend-backend synchronization, database design, and deployment optimization.',
  }
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
              className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group ${cert.color === 'primary'
                ? 'bg-primary hover:shadow-[0_0_40px_rgba(255,87,34,0.3)]'
                : 'bg-accent hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${cert.color === 'primary'
                  ? 'bg-white/20'
                  : 'bg-black/10'
                  }`}>
                  <Award className={cert.color === 'primary' ? 'text-white' : 'text-black'} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 mb-2">
                    <h3 className={`font-bold text-base sm:text-lg leading-tight ${cert.color === 'primary' ? 'text-white' : 'text-black'}`}>{cert.title}</h3>
                    <span className={`text-xs font-mono shrink-0 ${cert.color === 'primary' ? 'text-white/70' : 'text-black/60'}`}>{cert.date}</span>
                  </div>
                  <p className={`text-sm mb-2 ${cert.color === 'primary' ? 'text-white/80' : 'text-black/70'}`}>
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.score && (
                      <span className={`px-2 py-1 text-xs rounded ${cert.color === 'primary' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                        }`}>
                        {cert.score}
                      </span>
                    )}
                    {cert.badge && (
                      <span className={`px-2 py-1 text-xs rounded ${cert.color === 'primary' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                        }`}>
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <p className={`text-sm leading-relaxed ${cert.color === 'primary' ? 'text-white/90' : 'text-black/80'}`}>{cert.description}</p>
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
