import { Code2, Database, Globe, Wrench, Brain, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Java', 'Hibernate ORM', 'JSP', 'Python', 'SQL'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      skills: ['Query Optimization', 'Schema Design', 'Data Modeling'],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Platforms',
      skills: ['Linux', 'Bash', 'Git', 'Maven', 'VS Code'],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Other Technologies',
      skills: ['Generative AI', 'Power Query', 'MS Access', 'C/C++', 'OOP'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Leadership', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
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

export default Skills;
