import { Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Intern',
      company: 'VaultofCodes',
      period: 'Feb 2023 - Mar 2023',
      description: [
        'Developed secure backend features using Java, Hibernate, and SQL',
        'Built RESTful APIs and optimized database queries',
        'Collaborated using Git & GitHub for version control',
      ],
      skills: ['Java', 'Hibernate', 'SQL', 'REST APIs', 'Git'],
    },
    {
      title: 'UI/UX Designer',
      company: 'TNM',
      period: 'Mar 2023 - Jun 2023',
      description: [
        'Designed and developed a responsive website for a startup',
        'Integrated backend logic with intuitive UI components',
        'Created user-centered design solutions',
      ],
      skills: ['UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
