import { Sparkles, GitBranch, Rocket, BookOpen, Users } from 'lucide-react';

const highlights = [
  {
    icon: GitBranch,
    text: 'Proficient in modern development tools, version control systems, and collaborative coding practices',
  },
  {
    icon: Rocket,
    text: 'Gaining practical experience in web development projects and learning optimization techniques',
  },
  {
    icon: Sparkles,
    text: 'Excellent problem-solving abilities with demonstrated focus on delivering efficient and scalable solutions',
  },
  {
    icon: BookOpen,
    text: 'Commitment to continuous learning and professional development in emerging technologies and industry best practices',
  },
  {
    icon: Users,
    text: 'Strong work ethic and ability to thrive in both independent and team-based environments',
  },
];

const AdditionalInfo = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Additional <span className="text-gradient-primary">Information</span>
          </h2>
          <p className="section-subtitle">Professional attributes and commitment</p>
        </div>

        <div className="card-elevated p-8">
          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={20} />
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
