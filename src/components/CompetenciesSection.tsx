import {
  Lightbulb,
  Brain,
  Clock,
  Users,
  MessageSquare,
  HeartHandshake,
  Ear,
  Briefcase
} from 'lucide-react';

const competencies = [
  { name: 'Problem Solving', icon: Lightbulb, description: 'Finding effective solutions to complex challenges' },
  { name: 'Analytical Thinking', icon: Brain, description: 'Breaking down problems with logical analysis' },
  { name: 'Time Management', icon: Clock, description: 'Efficient prioritization and deadline management' },
  { name: 'Team Collaboration', icon: Users, description: 'Working effectively in diverse team environments' },
  { name: 'Clear Communication', icon: MessageSquare, description: 'Articulating ideas with clarity and precision' },
  { name: 'Customer Service', icon: HeartHandshake, description: 'Delivering exceptional client experiences' },
  { name: 'Active Listening', icon: Ear, description: 'Understanding needs through attentive engagement' },
  { name: 'Professional Engagement', icon: Briefcase, description: 'Maintaining high standards in all interactions' },
];

const CompetenciesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Core <span className="text-gradient-accent">Competencies</span>
          </h2>
          <p className="section-subtitle">Soft skills that drive professional excellence</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {competencies.map((comp, index) => (
            <div
              key={comp.name}
              className="card-elevated p-3 md:p-5 text-center group hover:border-accent/50 transition-all hover:-translate-y-1 h-full flex flex-col items-center justify-center"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                <comp.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1 md:mb-2 w-full break-words hyphens-auto leading-tight">{comp.name}</h3>
              <p className="text-xs text-muted-foreground hidden md:block">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
