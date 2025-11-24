import profilePhoto from "@/assets/profile.png";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const About = () => {
  
const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "UI/UX", icon: <MdDesignServices className="text-pink-500" /> },
];
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Animated glow effects matching Hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl top-0 right-0 animate-glow" />
        <div className="absolute w-80 h-80 bg-accent/20 rounded-full blur-3xl bottom-0 left-0 animate-glow" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl shadow-elegant border border-border/50 relative overflow-hidden animate-fade-in-up">
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-20 -translate-x-20"></div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left side - Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 glass-card border border-primary/30 text-primary rounded-full text-sm font-medium mb-4">
                About me
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text glow-text">
                  Diopet C. Mascariña
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                Hello, my name is <span className="font-semibold text-foreground">Diopet C. Mascariña</span>. 
                I am a professional <span className="font-semibold gradient-text"> IT FullStack Software Developer & Creative Problem Solver</span>.
              </p>
              
              <div className="space-y-2 text-muted-foreground/80 mb-6">
                <p>• Full Stack</p>
                <p>• Problem Solver</p>
                <p>• Web and App </p>
                <p>• Front-end and Backend</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="gradient-text">Skills</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Image with illustration */}
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                {/* Circular profile photo */}
                <div className="relative">
                  {/* Gradient blob behind matching hero glow */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl opacity-30 animate-glow"></div> */}
                  
                  {/* Main photo circle */}
                  <div className="relative w-full h-full rounded-full w-200 h-200 ">
                    <img 
                      src={profilePhoto} 
                      alt="Diopet C. Mascariña" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative shapes matching theme */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/70 rounded-2xl rotate-12 shadow-lg"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/60 rounded-2xl -rotate-12 shadow-lg"></div>
                </div>

                {/* Illustration elements */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                  {/* Simple designer illustration */}
                  <div className="relative w-32 h-40 opacity-80">
                    {/* Person figure */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-32 bg-muted/80 rounded-t-full"></div>
                    {/* Head */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-muted rounded-full"></div>
                    {/* Hair */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-muted-foreground/60 rounded-t-full"></div>
                    {/* Device/tablet in hand */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-10 h-14 bg-primary/70 rounded-lg border-2 border-primary shadow-lg"></div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-10 -right-8 w-12 h-12 bg-primary/30 rounded-lg rotate-12 animate-bounce border border-primary/50 shadow-lg" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-20 -left-8 hidden md:block">
                  <div className="flex gap-1">
                    <div className="w-2 h-8 bg-primary/70 rounded-full shadow-md"></div>
                    <div className="w-2 h-12 bg-primary rounded-full shadow-md"></div>
                    <div className="w-2 h-6 bg-accent/70 rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;