import { Code, Server, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Python', 'Express', 'MongoDB']
    },
    {
      title: 'Herramientas',
      icon: Wrench,
      skills: ['Git', 'Docker', 'AWS', 'Figma']
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="skills-title">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto" data-testid="skills-description">
            [Descripción de tu stack tecnológico y especialidades]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="text-center" data-testid={`skill-category-${index}`}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`skill-category-title-${index}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-secondary text-sm rounded-full"
                        data-testid={`skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
