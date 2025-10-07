import { Server, Palette, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Server className="w-12 h-12" />,
      title: 'Backend Development',
      description:
        'Secure, scalable systems using Java, Hibernate, SQL, and Python. Building robust APIs and optimizing database performance.',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Web Design & UI/UX',
      description:
        'Responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Creating intuitive experiences that users love.',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Data Analytics',
      description:
        'Power Query & MS Access solutions for data visualization and reporting. Transforming raw data into actionable insights.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your technical needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
