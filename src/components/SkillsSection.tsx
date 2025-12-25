import { Search, Code, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'SEO & Digital Marketing',
    icon: Search,
    skills: [
      {
        name: 'Technical SEO',
        color: 'primary',
        items: [
          'Core Web Vitals optimization',
          'Site architecture and URL structure',
          'XML sitemaps and robots.txt configuration',
          'Crawlability and indexability audits',
          'Schema markup implementation (Local Business, Organization, Product, Article, FAQ)',
          'Creating indexing checklists and SOP documentation',
        ],
      },
      {
        name: 'On-Page SEO',
        color: 'accent',
        items: [
          'Page-level optimization for search visibility',
          'SEO-focused page layout & structure improvements',
          'Heading hierarchy optimization (H1–H6)',
          'Meta tags and image alt text optimization',
          'Internal linking optimization',
          'Keyword research and content optimization based on search intent',
        ],
      },
      {
        name: 'Off-Page SEO',
        color: 'primary',
        items: [
          'Backlink analysis and audit',
          'Identifying toxic or low-quality links',
          'Supporting disavow process',
          'Basic understanding of link-building strategies',
        ],
      },
      {
        name: 'Digital Marketing Basics',
        color: 'accent',
        items: [
          'SEO-focused marketing fundamentals',
          'Understanding of traffic, keywords, and user intent',
        ],
      },
    ],
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: [
      {
        name: 'Vibe Coding / AI-Assisted Development',
        color: 'primary',
        items: [
          'Building custom websites using Vibe Coding approach',
          'AI-assisted development for faster delivery',
          'Converting ideas and requirements into functional web applications',
        ],
      },
      {
        name: 'Full-Stack Development',
        color: 'accent',
        items: ['Custom websites using Django', 'Full-stack applications using MERN Stack'],
      },
      {
        name: 'CMS Development',
        color: 'primary',
        items: [
          'WordPress (custom themes, basic plugins)',
          'Shopify (store setup, theme customization)',
        ],
      },
    ],
  },
  {
    title: 'Web Scraping & Automation',
    icon: Bot,
    skills: [
      {
        name: 'Python Automation',
        color: 'primary',
        items: [
          'Web scraping fundamentals using Python',
          'Basic Python automation scripting',
          'Data extraction and simple data analysis workflows',
        ],
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="section-subtitle">Expertise across SEO, development, and automation</p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-elevated p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`rounded-xl p-5 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                      skill.color === 'primary'
                        ? 'bg-primary hover:shadow-[0_0_40px_rgba(255,87,34,0.3)]'
                        : 'bg-accent hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]'
                    }`}
                  >
                    <h4
                      className={`font-bold mb-3 text-lg ${
                        skill.color === 'primary' ? 'text-white' : 'text-black'
                      }`}
                    >
                      {skill.name}
                    </h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className={`text-sm flex items-start gap-2 ${
                          skill.color === 'primary' ? 'text-white/90' : 'text-black/80'
                        }`}>
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                              skill.color === 'primary' ? 'bg-white/70' : 'bg-black/50'
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
