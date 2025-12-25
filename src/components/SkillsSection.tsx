import { Search, Code, Database, FileCode, Settings, Globe, Server, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'SEO & Digital Marketing',
    icon: Search,
    color: 'primary',
    skills: [
      {
        name: 'Technical SEO',
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
        items: [
          'Backlink analysis and audit',
          'Identifying toxic or low-quality links',
          'Supporting disavow process',
          'Basic understanding of link-building strategies',
        ],
      },
      {
        name: 'Digital Marketing Basics',
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
    color: 'accent',
    skills: [
      {
        name: 'Vibe Coding / AI-Assisted Development',
        items: [
          'Building custom websites using Vibe Coding approach',
          'AI-assisted development for faster delivery',
          'Converting ideas and requirements into functional web applications',
        ],
      },
      {
        name: 'Full-Stack Development',
        items: ['Custom websites using Django', 'Full-stack applications using MERN Stack'],
      },
      {
        name: 'CMS Development',
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
    color: 'primary',
    skills: [
      {
        name: 'Python Automation',
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
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-elevated p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                >
                  <category.icon
                    className={category.color === 'primary' ? 'text-primary' : 'text-accent'}
                    size={24}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background/50 rounded-lg p-5 border border-border/50"
                  >
                    <h4
                      className={`font-medium mb-3 ${
                        category.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}
                    >
                      {skill.name}
                    </h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                              category.color === 'primary' ? 'bg-primary' : 'bg-accent'
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
