import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Terminal-style intro */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight animate-slide-up">
          <span className="text-gradient">Temitope</span>
          <br />
          <span className="text-foreground">Joseph Seidu</span>
        </h1>

        {/* Title */}
        <p className="font-mono text-xl md:text-2xl text-primary mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Full Stack Developer & Robotic Engineer
        </p>

        {/* Summary */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          8+ years crafting production-grade solutions in fintech, agriculture, government revenue management, manufacturing, and education technology.
        </p>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="mailto:temitope.seidu7@gmail.com" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-secondary-foreground">temitope.seidu7@gmail.com</span>
          </a>
          <a 
            href="tel:+2348069018573" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-secondary-foreground">+234-806-901-8573</span>
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-secondary-foreground">Lagos, Nigeria</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="glow-primary font-semibold"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Experience
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="https://github.com/gr8skills" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="https://linkedin.com/in/gr8skills" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="/src/files/Resume_Temitope_Joseph____updated.pdf" download>
              <FileDown className="w-5 h-5 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;