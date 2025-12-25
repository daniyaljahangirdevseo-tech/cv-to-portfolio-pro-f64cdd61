import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

const educationalDegrees = [
  {
    degree: 'Matriculation',
    documents: [
      { type: 'Certificate', link: '#', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop' },
      { type: 'Transcript', link: '#', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop' },
    ],
  },
  {
    degree: 'Intermediate',
    documents: [
      { type: 'Certificate', link: '#', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop' },
      { type: 'Transcript', link: '#', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop' },
    ],
  },
  {
    degree: 'Bachelor of Science (BS)',
    documents: [
      { type: 'Certificate', link: '#', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop' },
      { type: 'Transcript', link: '#', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop' },
    ],
  },
];

const certifications = [
  {
    name: 'CyberSavvy: Navigating Linux and Essential Cybersecurity',
    type: 'Certificate',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
  },
  {
    name: 'Full Stack Web Development Virtual Internship',
    type: 'Certificate',
    link: '#',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
  },
  {
    name: 'PTE Academic Certificate',
    type: 'Certificate',
    link: '#',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=300&fit=crop',
  },
  {
    name: 'Technical SEO Expert Internship',
    type: 'Certificate',
    link: '#',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2d6?w=400&h=300&fit=crop',
  },
];

const Downloads = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Downloads
          </h1>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Access my educational degrees and professional certifications
          </p>

          {/* Educational Degrees Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Educational Degrees
            </h2>
            
            {educationalDegrees.map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold text-muted-foreground mb-4">{item.degree}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {item.documents.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      download
                      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,87,34,0.3)] cursor-pointer"
                    >
                      {/* Card Image */}
                      <div className="aspect-[4/3] relative">
                        <img
                          src={doc.image}
                          alt={`${item.degree} ${doc.type}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      
                      {/* Card Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{doc.type}</h4>
                            <p className="text-white/70 text-sm">{item.degree}</p>
                          </div>
                          <ArrowUpRight
                            size={24}
                            className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Certifications Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Certifications & Development
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  download
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] cursor-pointer"
                >
                  {/* Card Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                        <p className="text-white/70 text-sm">{cert.type}</p>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-white flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
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
