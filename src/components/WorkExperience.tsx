import { Briefcase, Calendar } from "lucide-react";

const experiences = [
 
  {
    title: "Software Developer / Programmer",
    company: "Ropali",
    period: "2025 - present",
    description: "Developed responsive web applications. Collaborated with cross-functional teams to deliver high-quality software products.",
    achievements: [
      "Built 10+ client projects",
      "Improved code quality by 60%",
      "Integrated payment systems"
    ]
  },
  {
    title: "IT Support",
    company: "Concentrix",
    period: "2024",
    description: "...",
    achievements: [
      "Designed 20+ UI components",
      "Achieved 95+ Lighthouse scores",
      "Collaborated with designers"
    ]
  },
  {
    title: "Customer Service Representative",
    company: "Alorica",
    period: "2023 - 2024",
    description: "...",
    achievements: [
      "Completed 50+ tasks",
      "Learned agile methodology",
      "Fixed 100+ bugs"
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center animate-fade-in">
          <h2 className="mb-4 text-5xl font-bold text-gradient md:text-5xl gradient-text glow-text">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey and the amazing companies I've worked with
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary md:block" />

          <div className="space-y-15">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content card */}
                  <div className="w-full md:w-5/12">
                    <div className="glass-card group hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
                      <div className="mb-6 flex items-start justify-between">
                        <div className="flex items-center gap-10">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                            <Briefcase className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-sm font-semibold text-primary">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="mb-4 text-muted-foreground">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span className="text-sm text-foreground/80">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot - hidden on mobile */}
                  <div className="hidden md:block relative z-10">
                    <div className="h-6 w-6 rounded-full border-4 border-background bg-primary shadow-glow animate-glow-pulse" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
