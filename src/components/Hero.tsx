import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profileImage})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      <div className="container mx-auto max-w-6xl relative z-10 px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">S N M HANUMANTHARAO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground font-light drop-shadow-md">
              Data Engineer • Data Analyst • Bussiness Analyst
            </h2>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
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
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
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
              className="text-foreground/80 hover:text-primary transition-colors duration-300 drop-shadow-md"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-manikanta-kukunoori-bab61123b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 drop-shadow-md"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:saikukunuri513@gmail.com"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 drop-shadow-md"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float z-10">
        <button 
          onClick={() => scrollToSection("skills")}
          className="text-foreground/80 hover:text-primary transition-colors drop-shadow-md"
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
