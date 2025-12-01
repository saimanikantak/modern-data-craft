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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Profile Image Side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="animated-border">
                <div className="animated-border-inner">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">S N M HANUMANTHARAO</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Data Engineer • Data Analyst • Bussiness Analyst
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              B.Tech Graduate 2024 passionate about building data pipelines, dashboards
              deriving insights from complex datasets, and automating infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-4">
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

            <div className="flex gap-6 justify-center md:justify-start pt-4">
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
