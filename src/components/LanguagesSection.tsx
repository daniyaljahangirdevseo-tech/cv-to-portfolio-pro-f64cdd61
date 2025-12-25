import { Languages } from 'lucide-react';

const languages = [
  {
    name: 'English',
    level: 'Intermediate',
    certification: 'PTE Academic Certified - Score: 65/90',
    percentage: 72,
  },
  {
    name: 'Urdu',
    level: 'Fluent',
    certification: 'Native Speaker',
    percentage: 100,
  },
];

const LanguagesSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient-primary">Languages</span>
          </h2>
          <p className="section-subtitle">Communication proficiency</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="card-elevated p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Languages className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{lang.name}</h3>
                  <p className="text-sm text-primary">{lang.level}</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground">{lang.certification}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
