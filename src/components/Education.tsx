import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Academic Background</span>
          <h2 className="section-title mt-2">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Bachelor of Technology
            </h3>
            <p className="text-xl text-primary font-medium mb-2">
              Computer Engineering Technology
            </p>
            <p className="text-muted-foreground mb-6">
              Rufus Giwa Polytechnic, Owo, Ondo State, Nigeria
            </p>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              September 2013
            </p>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {["Digital Electronics", "Algorithm", "Matlab", "C++"].map((course) => (
                  <span 
                    key={course}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;