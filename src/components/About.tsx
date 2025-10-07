import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Malla Reddy Engineering College for Women (JNTU)',
      year: '2025',
      grade: 'CGPA: 8.54',
    },
    {
      degree: 'Intermediate',
      institution: 'Excellent Junior College',
      year: '2021',
      grade: '96.4%',
    },
    {
      degree: '10th Class',
      institution: 'Nirmal Hridai High School',
      year: '2019',
      grade: 'GPA: 9.5',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Picture */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50"></div>
              <img
                src={profilePhoto}
                alt="Kadava Mokshagnanjali - Backend Engineer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-glow border-4 border-background"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate About Technology & Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an Information Technology graduate passionate about backend
              engineering, secure systems, and ethical AI deployment. With
              hands-on experience in Java, Hibernate, SQL, and Python, I build
              scalable, data-driven solutions that prioritize performance and
              integrity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and continuously seek to
              bridge technical excellence with human-centered design.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-primary font-semibold">{edu.year}</p>
                    <p className="text-foreground font-medium">{edu.grade}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
