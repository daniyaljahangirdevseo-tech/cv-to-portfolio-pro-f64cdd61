import { Trophy, GraduationCap } from 'lucide-react';

const awards = [
  {
    title: 'U.S. Scholarship Award',
    date: 'March 2024',
    icon: Trophy,
    description:
      'Recipient of fully-funded U.S. scholarship through College Alumni program, recognizing exceptional academic excellence and demonstrated leadership potential among peer cohort.',
  },
  {
    title: 'Leadership Experience',
    date: 'Ongoing',
    icon: GraduationCap,
    description:
      'Served as Class Representative throughout Matriculation, Intermediate, and Bachelors degree programs, demonstrating consistent commitment to peer communication, academic advocacy, institutional responsibility, and collaborative problem-solving.',
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Awards & <span className="text-gradient-accent">Recognition</span>
          </h2>
          <p className="section-subtitle">Achievements and leadership milestones</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="card-elevated p-8 relative overflow-hidden group hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <award.icon className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">{award.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{award.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
