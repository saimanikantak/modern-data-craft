import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Animated blob background */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-2xl animate-pulse group-hover:opacity-50 transition-opacity duration-500" 
                   style={{ 
                     borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                     animation: 'pulse 3s ease-in-out infinite'
                   }} />
              
              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-50 blur-xl group-hover:animate-spin" 
                   style={{ animationDuration: '8s' }} />
              
              {/* Profile image with morphing shape */}
              <div className="relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500"
                   style={{ 
                     borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                     width: '320px',
                     height: '320px'
                   }}>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">S N M HANUMANTHARAO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Data Engineer • Data Analyst • Bussiness Analyst
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech Graduate 2024 passionate about building data pipelines, dashboards
            deriving insights from complex datasets, and automating infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/saimanikantak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-manikanta-kukunoori-bab61123b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:saikukunuri513@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection("skills")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
