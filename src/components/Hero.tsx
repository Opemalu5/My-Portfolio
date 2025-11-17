import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

import { ArrowDown } from "lucide-react";

const Hero = () => {

   const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
    const handleDownloadResume = () => {
    // Create a sample resume download link
    // In production, replace this with your actual resume file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Resume.pdf';
    // For now, show a toast notification
    alert('Resume download feature - Add your resume file to enable downloads');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-glow" />
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-glow" />
      </div>
      
      <div className="container mx-auto relative z-10 text-center animate-fade-in">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text glow-text">Diopet C. Mascariña</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Full Stack Software Developer/Programmer & Creative Problem Solver
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I craft elegant digital experiences through clean code and thoughtful design. 
            Specialized in building modern web applications with cutting-edge technologies.
          </p>
          
         <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={scrollToContact}
                className="gradient-primary hover:bg-blue-200/30 transition-colors shadow-elegant hover:shadow-lg"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-primary hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-primary hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>

        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
