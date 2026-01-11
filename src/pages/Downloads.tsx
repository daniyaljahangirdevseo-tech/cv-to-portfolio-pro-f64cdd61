import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { GraduationCap, Award, FileText, Download, ArrowUpRight, FileDown, Languages } from 'lucide-react';

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
      { type: 'Detailed Marks Certificate (DMC)', link: '/documents/BS_DMC.pdf' },
    ],
  },
];

const lettersOfRecommendation = [
  {
    title: 'Letter of Recommendation - Head of Department',
    issuedBy: 'Head of Department (HOD)',
    link: '/documents/LOR_HOD.pdf',
  },
  {
    title: 'Letter of Recommendation - Final Year Project Supervisor',
    issuedBy: 'FYP Supervisor',
    link: '/documents/LOR_FYP_Supervisor.pdf',
  },
  {
    title: 'Letter of Recommendation - Assistant Professor',
    issuedBy: 'Assistant Professor',
    link: '/documents/LOR_Assistant_Professor.pdf',
  },
];

const englishProficiency = [
  {
    title: 'English Proficiency Letter',
    issuedBy: 'Registrar Office',
    link: '/documents/English Proficiency Letter.pdf',
  },
];

const certifications = [
  {
    name: 'CyberSavvy: Navigating Linux and Essential Cybersecurity',
    type: 'Certificate',
    link: '/documents/CyberSavvy_Certificate.jpg',
  },
  {
    name: 'Full Stack Web Development Remote Internship',
    type: 'Certificate',
    link: '/documents/FullStack_Certificate.png',
  },
  {
    name: 'PTE Academic Certificate',
    type: 'Certificate',
    link: '/documents/PTE_Academic_Certificate.png',
  },
  {
    name: 'Technical SEO Expert Internship',
    type: 'Certificate',
    link: '/documents/Technical_SEO_Certificate.png',
  },
];

const Downloads = () => {
  return (
    <>
      <SEO
        title="Download Resume & Academic Documents"
        description="Download Daniyal Jahangir's professional resume, academic degrees, transcripts, and verified certifications in one place. Contact via email or WhatsApp."
        canonical="https://daniyaljahangir.vercel.app/downloads"
      />
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
                Access my resume, educational degrees, and professional certifications
              </p>
            </div>

            {/* Resume Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FileDown className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">
                  Resumes
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Europass Resume - Primary Color */}
                <a
                  href="/documents/Daniyal-Jahangir_Europass-Resume.pdf"
                  download
                  className="group flex items-center justify-between p-6 rounded-xl bg-primary transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/20">
                      <FileText size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-primary-foreground">
                        ATS Friendly Resume
                      </p>
                      <span className="inline-block px-2 py-0.5 mt-1 text-xs font-medium bg-white/20 text-white rounded">
                        With Europass Logo
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="text-primary-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Standard Resume - Accent Color */}
                <a
                  href="/documents/Daniyal_Jahangir_Resume.pdf"
                  download
                  className="group flex items-center justify-between p-6 rounded-xl bg-accent transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-black/10">
                      <FileText size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-accent-foreground">
                        ATS Friendly Resume
                      </p>
                      <span className="inline-block px-2 py-0.5 mt-1 text-xs font-medium bg-black/10 text-black/80 rounded">
                        Standard
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="text-accent-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Educational Degrees Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">
                  Educational Degrees
                </h2>
              </div>

              <div className="space-y-6">
                {educationalDegrees.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center">
                    {/* Degree Name */}
                    <div className="text-foreground font-semibold">
                      {item.degree}
                    </div>

                    {/* Document Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {item.documents.map((doc, docIndex) => (
                        <a
                          key={docIndex}
                          href={doc.link}
                          download
                          className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${docIndex % 2 === 0
                            ? 'bg-primary hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]'
                            : 'bg-accent hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <FileText
                              size={20}
                              className={docIndex % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}
                            />
                            <div>
                              <p className={`font-semibold line-clamp-1 ${docIndex % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                                {doc.type}
                              </p>
                              <p className={`text-sm ${docIndex % 2 === 0 ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>
                                {item.degree}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight
                            size={20}
                            className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${docIndex % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'
                              }`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Letters of Recommendation Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FileDown className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">
                  Letters of Recommendation
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lettersOfRecommendation.map((lor, index) => (
                  <a
                    key={index}
                    href={lor.link}
                    download
                    className={`group flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${index % 2 === 0
                      ? 'bg-primary hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]'
                      : 'bg-accent hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText
                        size={20}
                        className={index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}
                      />
                      <div>
                        <p className={`font-semibold line-clamp-1 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                          {lor.issuedBy}
                        </p>
                        <p className={`text-sm ${index % 2 === 0 ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>
                          Letter of Recommendation
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'
                        }`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* English Proficiency Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Languages className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-primary">
                  English Proficiency
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {englishProficiency.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    download
                    className={`group flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${index % 2 === 0
                      ? 'bg-primary hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]'
                      : 'bg-accent hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText
                        size={20}
                        className={index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}
                      />
                      <div>
                        <p className={`font-semibold line-clamp-1 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                          {item.title}
                        </p>
                        <p className={`text-sm ${index % 2 === 0 ? 'text-primary-foreground/70' : 'text-accent-foreground/70'}`}>
                          {item.issuedBy}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'
                        }`}
                    />
                  </a>
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
                    className={`group flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${index % 2 === 0
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
                      className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-accent-foreground'
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
    </>
  );
};

export default Downloads;
