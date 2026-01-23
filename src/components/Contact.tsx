import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="section-title mt-2">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            I'm always interested in hearing about new opportunities, challenging projects, or just connecting with fellow developers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a 
                href="mailto:temitope.seidu7@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border card-hover group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">temitope.seidu7@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+2348069018573"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border card-hover group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+234-806-901-8573</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">15b, Alhaji Hussein, Lekki Phase 1, Lagos</p>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="flex flex-col justify-between p-8 rounded-2xl bg-card border border-border">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                <p className="text-muted-foreground mb-6">
                  Find me on these platforms and let's start a conversation.
                </p>
                
                <div className="flex gap-4 mb-8">
                  <a 
                    href="https://github.com/gr8skills" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/gr8skills" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full glow-primary"
                asChild
              >
                <a href="mailto:temitope.seidu7@gmail.com">
                  <Send className="w-5 h-5 mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;