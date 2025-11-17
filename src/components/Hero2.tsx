import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization and reporting.",
    image: project1,
    tags: ["React", "TypeScript", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-Commerce App",
    description: "Modern shopping application with smooth animations and intuitive user experience.",
    image: project2,
    tags: ["React", "Tailwind", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Chat Platform",
    description: "Intelligent messaging platform powered by machine learning and neural networks.",
    image: project3,
    tags: ["React", "AI/ML", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden glass border-2 border-primary/20 animate-scale-in">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">{currentProject.title}</h3>
              <p className="text-muted-foreground">{currentProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="outline" asChild>
                  <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button className="gradient-primary" asChild>
                  <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 gradient-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
