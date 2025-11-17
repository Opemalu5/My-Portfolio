import { useEffect, useState } from "react";
import logo from "@/assets/logo-dm.png";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Hide loading screen after completion
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 animate-fade-out animation-delay-1500 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.9s' }}></div>
      </div>

      {/* Rotating gradient orbs */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col items-center gap-8 animate-scale-in relative z-10">
        {/* Logo with multiple animated rings */}
        <div className="relative w-48 h-48">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
          
          {/* Middle rotating ring (opposite direction) */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-accent border-l-accent animate-spin-reverse"></div>
          
          {/* Inner pulsing glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-2xl animate-pulse opacity-60"></div>
          
          {/* Ping effect */}
          <div className="absolute inset-6 rounded-full bg-primary/40 animate-ping"></div>
          
          {/* Logo container with glass effect */}
          <div className="absolute inset-8 rounded-full glass-card border-2 border-primary/50 shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-gradient"></div>
            <img 
              src={logo} 
              alt="DM Logo" 
              className="relative z-10 w-20 h-20 object-cover rounded-full animate-glow"
            />
          </div>
        </div>
        
        {/* Animated text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold gradient-text glow-text animate-pulse">
            Loading Experience
          </h2>
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Preparing something amazing...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 shadow-lg shadow-primary/50 animate-gradient-x"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage display */}
        <div className="text-3xl font-bold gradient-text glow-text tabular-nums">
          {progress}%
        </div>

        {/* Enhanced loading dots with different animations */}
        <div className="flex gap-3">
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "0ms" }}></div>
            <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDelay: "0ms" }}></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-accent rounded-full animate-bounce shadow-lg shadow-accent/50" style={{ animationDelay: "150ms" }}></div>
            <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping" style={{ animationDelay: "150ms" }}></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "300ms" }}></div>
            <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;