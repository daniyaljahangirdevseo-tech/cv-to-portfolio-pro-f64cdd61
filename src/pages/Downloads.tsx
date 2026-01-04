import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Award, FileText, Download, ArrowUpRight, FileDown } from 'lucide-react';

const educationalDegrees = [
  {
    degree: 'Matriculation',
    documents: [
      { type: 'Certificate', link: '/documents/Matriculation_Certificate.pdf' },
      { type: 'Transcript', link: '/documents/Matriculation_Transcript.pdf' },
    ],
  },
  {
    degree: 'Intermediate',
    documents: [
      { type: 'Certificate', link: '/documents/Intermediate_Certificate.pdf' },
      { type: 'Transcript', link: '/documents/Intermediate_Transcript.pdf' },
    ],
  },
  {
    degree: 'Bachelor of Science (BS)',
    documents: [
      { type: 'Certificate', link: '/documents/BS_Certificate.pdf' },
      { type: 'Transcript', link: '/documents/BS_Transcript.pdf' },
    ],
  },
];

const certifications = [
  {
    name: 'CyberSavvy: Navigating Linux and Essential Cybersecurity',
    type: 'Certificate',
    link: '#',
  },
  {
    name: 'Full Stack Web Development Virtual Internship',
    type: 'Certificate',
    link: '#',
  },
  {
    name: 'PTE Academic Certificate',
    type: 'Certificate',
    link: '#',
  },
  {
    name: 'Technical SEO Expert Internship',
    type: 'Certificate',
    link: '#',
  },
];

const Downloads = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Downloads
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access my resume, educational degrees and professional certifications
            </p>
          </div>

          {/* Resume Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FileDown className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-primary">
                Resume
              </h2>
            </div>
            
            <a
              href="/documents/Daniyal_Jahangir_Resume.pdf"
              download
              className="group flex items-center justify-between p-6 rounded-xl bg-primary transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/20">
                  <FileText size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-lg text-primary-foreground">
                    Professional Resume
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Download my complete professional resume (PDF)
                  </p>
                </div>
              </div>
              <ArrowUpRight 
                size={24} 
                className="text-primary-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </a>
          </div>

          {/* Educational Degrees Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-primary">
                Educational Degrees
              </h2>
            </div>
            
            <div className="space-y-4">
              {educationalDegrees.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-4 items-center">
                  {/* Degree Name */}
                  <div className="text-foreground font-semibold">
                    {item.degree}
                  </div>
                  
                  {/* Document Cards */}
                  {item.documents.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      download
                      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                        doc.type === 'Certificate'
                          ? 'bg-primary hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]'
                          : 'bg-accent hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FileText 
                          size={20} 
                          className={doc.type === 'Certificate' ? 'text-primary-foreground' : 'text-accent-foreground'} 
                        />
                        <div>
                          <p className={`font-semibold ${doc.type === 'Certificate' ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                            {doc.type}
                          </p>
                          <p className={`text-sm ${doc.type === 'Certificate' ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>
                            {item.degree}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight 
                        size={20} 
                        className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          doc.type === 'Certificate' ? 'text-primary-foreground' : 'text-accent-foreground'
                        }`} 
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Development Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-primary">
                Certifications & Development
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  download
                  className={`group flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                    index % 2 === 0
                      ? 'bg-primary hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]'
                      : 'bg-accent hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Download 
                      size={20} 
                      className={index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'} 
                    />
                    <div>
                      <p className={`font-semibold ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                        {cert.name}
                      </p>
                      <p className={`text-sm ${index % 2 === 0 ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>
                        {cert.type}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'
                    }`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Downloads;
