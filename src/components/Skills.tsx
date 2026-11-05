import { Code, Database, Server, Layout, Cloud, GitBranch, Cpu, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["PHP 8.x", "JavaScript", "TypeScript", "C# (.NET Core)", "Python", "C++ (Embedded/IoT)", "Kotlin"]
  },
  {
    title: "Backend & Architecture",
    icon: Server,
    skills: ["Laravel (Eloquent, Queues)", "NestJS", "ASP.NET Core Web API", "Entity Framework Core", "Express.js", "Node.js", "Spring Boot", "REST / GraphQL", "Microservices", "Event-Driven (SignalR)"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular", "React", "Next.js", "Blazor", "HTML5 / CSS3"]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Redis", "Query Optimisation & Indexing", "Migrations", "Data Synchronisation"]
  },
  {
    title: "Cloud (Primary: GCP)",
    icon: Cloud,
    skills: ["GKE", "Cloud Run", "Cloud Functions", "Cloud Build", "Artifact Registry", "AWS EC2 / S3 / EKS", "Azure App Services", "Azure Functions"]
  },
  {
    title: "CI/CD & Infrastructure as Code",
    icon: GitBranch,
    skills: ["GitHub Actions", "CircleCI", "Azure Pipelines", "Docker", "Docker Compose", "Terraform (GCP/AWS)"]
  },
  {
    title: "Automation & Robotics",
    icon: Cpu,
    skills: ["Embedded C++", "Arduino", "Raspberry Pi", "Robotic Process Automation"]
  }
];

const strengths = ["Critical Thinker", "Creative", "Flexible", "Problem Solver"];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">What I Work With</span>
          <h2 className="section-title mt-2">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Zap className="w-5 h-5 text-primary" />
          {strengths.map((strength, index) => (
            <span key={strength} className="flex items-center gap-3">
              <span className="text-muted-foreground font-medium">{strength}</span>
              {index < strengths.length - 1 && <span className="text-border">•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;