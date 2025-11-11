import { useEffect, useState } from "react";
import logo from "@/assets/logo-dm.png";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-fade-out animation-delay-1500">
      <div className="flex flex-col items-center gap-8 animate-scale-in">
        <div className="relative w-40 h-40">
          {/* Animated glow rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-ping"></div>
          
          {/* Logo container */}
          <div className="relative w-full h-full rounded-full bg-background/80 backdrop-blur-sm border-4 border-primary/30 shadow-2xl flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt="DM Logo" 
              className="w-24 h-24 object-cover rounded-full animate-glow"
            />
          </div>
        </div>
        
        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
