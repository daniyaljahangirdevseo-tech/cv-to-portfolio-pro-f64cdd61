import { Target } from 'lucide-react';

const CareerObjective = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="card-elevated p-8 md:p-12 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary rounded-full blur-[100px] opacity-10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="section-title text-gradient-primary">Career Objective</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              A motivated Information Technology graduate with hands-on experience in technical SEO, 
              web development, and AI-assisted development, seeking opportunities to learn, contribute, 
              and grow in dynamic technical environments. Aiming to apply strong analytical thinking, 
              problem-solving skills, and a continuous learning mindset to improve digital performance, 
              build scalable web solutions, and contribute to data-driven and AI-enabled projects while 
              developing expertise across modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerObjective;
