import Navbar from '@/components/Navbar';
import CareerObjective from '@/components/CareerObjective';
import LanguagesSection from '@/components/LanguagesSection';
import AdditionalInfo from '@/components/AdditionalInfo';
import Footer from '@/components/Footer';
import { User, GraduationCap, Briefcase, Target, Heart } from 'lucide-react';

const educationTimeline = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Sialkot',
    period: '2020 – 2024',
    description: 'Comprehensive study of IT fundamentals, programming, web development, and cybersecurity.',
  },
  {
    degree: 'Intermediate (FSc Pre-Engineering)',
    institution: 'Government College Sialkot',
    period: '2018 – 2020',
    description: 'Foundation in mathematics, physics, and engineering principles.',
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'Allied School Sialkot',
    period: '2016 – 2018',
    description: 'Strong academic foundation with focus on science and mathematics.',
  },
];

const interests = [
  'Web Development & Design',
  'Search Engine Optimization',
  'Artificial Intelligence',
  'Cybersecurity',
  'Tech Innovation',
  'Continuous Learning',
];

const About = () => {
  return (
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
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-primary">Education</h2>
            </div>
            
            <div className="space-y-6">
              {educationTimeline.map((edu, index) => (
                <div 
                  key={index}
                  className="group relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  <div className="bg-card/50 rounded-xl p-6 transition-all duration-300 hover:bg-card group-hover:shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                    </div>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
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
  );
};

export default About;
