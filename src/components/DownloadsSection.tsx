import { Download, GraduationCap, Award, FileText, ArrowUpRight } from 'lucide-react';

const educationalDegrees = [
  {
    degree: 'Matriculation',
    documents: [
      { type: 'Certificate', icon: GraduationCap, link: '#' },
      { type: 'Transcript', icon: FileText, link: '#' },
    ],
  },
  {
    degree: 'Intermediate',
    documents: [
      { type: 'Certificate', icon: GraduationCap, link: '#' },
      { type: 'Transcript', icon: FileText, link: '#' },
    ],
  },
  {
    degree: 'Bachelor of Science (BS)',
    documents: [
      { type: 'Certificate', icon: GraduationCap, link: '#' },
      { type: 'Transcript', icon: FileText, link: '#' },
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

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Downloads
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Access my educational degrees and professional certifications
        </p>

        {/* Educational Degrees Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            Educational Degrees
          </h3>
          
          <div className="space-y-6">
            {educationalDegrees.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-1">
                  <h4 className="text-lg font-semibold text-foreground">{item.degree}</h4>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  {item.documents.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      download
                      className={`group p-5 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                        docIndex === 0
                          ? 'bg-primary hover:shadow-[0_0_40px_rgba(255,87,34,0.3)]'
                          : 'bg-accent hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <doc.icon
                            size={24}
                            className={docIndex === 0 ? 'text-white' : 'text-black'}
                          />
                          <div>
                            <p className={`font-medium ${docIndex === 0 ? 'text-white' : 'text-black'}`}>
                              {doc.type}
                            </p>
                            <p className={`text-sm ${docIndex === 0 ? 'text-white/70' : 'text-black/70'}`}>
                              {item.degree}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                            docIndex === 0 ? 'text-white' : 'text-black'
                          }`}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="text-accent" size={28} />
            Certifications & Development
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                download
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index % 2 === 0
                    ? 'bg-primary hover:shadow-[0_0_40px_rgba(255,87,34,0.3)]'
                    : 'bg-accent hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Download
                      size={24}
                      className={`mt-1 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}
                    />
                    <div>
                      <p className={`font-semibold mb-1 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
                        {cert.name}
                      </p>
                      <p className={`text-sm ${index % 2 === 0 ? 'text-white/70' : 'text-black/70'}`}>
                        {cert.type}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ${
                      index % 2 === 0 ? 'text-white' : 'text-black'
                    }`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
