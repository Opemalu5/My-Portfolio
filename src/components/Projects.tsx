import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import aiContentImg from "@/assets/project-aicontent.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();
  const autoplayRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
      image: ecommerceImg,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and analytics dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
      demo: "#",
      github: "#",
      image: taskManagerImg,
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool leveraging modern LLMs for generating marketing copy and social media posts.",
      tech: ["React", "Python", "FastAPI", "OpenAI"],
      demo: "#",
      github: "#",
      image: aiContentImg,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
      tech: ["Vue.js", "Tailwind", "Weather API"],
      demo: "#",
      github: "#",
      image: weatherImg,
    },
  ];

  // Sync the carousel API with currentIndex state
  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Custom autoplay implementation
  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [api]);

  // Handle dot click to navigate
  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text glow-text">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Showcasing my recent work and creative solutions
        </p>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="mx-auto w-full"
          onMouseEnter={() => {
            if (autoplayRef.current) {
              clearInterval(autoplayRef.current);
            }
          }}
          onMouseLeave={() => {
            if (api) {
              autoplayRef.current = setInterval(() => {
                api.scrollNext();
              }, 5000);
            }
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <div className="h-full">
                  <Card className="glass-card border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden h-full group hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <Dialog>
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize2 className="w-8 h-8 text-primary" />
                          </button>
                        </DialogTrigger>
                      </div>
                      <DialogContent className="max-w-4xl w-[95vw] p-2">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                    
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1 gradient-primary hover:shadow-lg transition-all"
                          asChild
                        >
                          <a href={project.demo}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 border-2 border-primary hover:border-blue-400 hover:shadow-lg transition-all"
                          asChild
                        >
                          <a href={project.github}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
       
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary shadow-lg"
                    : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;