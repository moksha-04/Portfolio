import { ExternalLink, Lock, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'WebCloud - Secure Cloud Storage',
      description:
        'Enhanced public cloud security using hybrid encryption techniques to prevent unauthorized data disclosures. Implemented advanced security protocols for data protection.',
      technologies: ['Java', 'Encryption Algorithms', 'Security Frameworks'],
      icon: <Lock className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Smart Surveillance with CNN',
      description:
        'Built an intelligent surveillance system improving recognition accuracy by 30%, enabling efficient video data storage. Leveraged deep learning for real-time analysis.',
      technologies: ['Python', 'CNN', 'Machine Learning', 'Computer Vision'],
      icon: <Eye className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that blend security, AI, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header with Icon */}
              <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
