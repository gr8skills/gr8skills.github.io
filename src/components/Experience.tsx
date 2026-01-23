import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Blouza Technologies Ltd.",
    location: "Lagos, Nigeria",
    period: "Jul. 2025 – Present",
    role: "Fullstack Developer (PHP / NestJs / React / NextJs)",
    highlights: [
      "Led the development of cutting-edge solutions such as CareSol, EasyPay, and ReMS",
      "Contributed to building tax solutions for local and state governments in Nigeria",
      "Built reusable React components, improving UI performance and maintainability",
      "Optimised SQL queries and implemented caching strategies, improving API response times significantly"
    ],
    technologies: ["Laravel", "React", "NestJS", "NextJS", "MySQL", "Git"]
  },
  {
    company: "PayOnDelivery",
    location: "Houston, Texas",
    period: "Jan. 2025 – Dec. 2025",
    role: "Lead Developer (PHP / React)",
    highlights: [
      "Led the development of user-centric, standard modules that make buying and selling effortless and seamless",
      "Improved on existing implementations and screens",
      "Handled code review, deployments and server management, ensuring 99% uptime",
      "Optimised SQL queries and implemented caching strategies, improving API response times significantly"
    ],
    technologies: ["Laravel", "React", "CircleCI", "GitHub Actions", "MySQL", "Git"]
  },
  {
    company: "NowNow Digital Systems Ltd.",
    location: "Lagos, Nigeria",
    period: "Mar. 2023 – Present",
    role: "Fullstack Developer (PHP / Angular)",
    highlights: [
      "Contributed to the development and maintenance of government revenue automation systems across multiple states in Nigeria",
      "Integrated secure modules for tax collection, business licensing, land revenue management, and vehicle registration",
      "Developed internal microservices using ASP.NET Core Web API, handling authentication, user role permissions, and data synchronisation",
      "Optimized SQL queries and implemented caching strategies, improving API response times by 32%",
      "Built reusable Angular components, improving UI performance and maintainability"
    ],
    technologies: ["Laravel", "Angular", "ASP.NET Core (C#)", "MySQL", "MSSQL", "Git"]
  },
  {
    company: "Winexviv International",
    location: "Lagos, Nigeria",
    period: "July 2019 – Feb. 2023",
    role: "Back-end Developer & Robotic Engineer",
    highlights: [
      "Developed an automated error notifier system that captures critical application failures, raising customer satisfaction by 35%",
      "Contributed to the design and development of the accounts and finance module, integrating wallet services and payment gateways (Rave, Paystack)",
      "Participated in building an HRM system covering staffing, payroll, leave and employee data management",
      "Developed automated hand-washing machines and disinfectant booths during the 2020 pandemic",
      "Built agricultural fruit-sorting systems using Raspberry Pi and embedded C++",
      "Trained students in STREAM robotics programs"
    ],
    technologies: ["Laravel", "AngularJS", "MySQL", "C++", "Arduino", "Raspberry Pi"]
  },
  {
    company: "SFS Capital Nigeria Limited",
    location: "Lagos, Nigeria",
    period: "2019 – 2023",
    role: "Software Engineer & Support",
    highlights: [
      "Designed and modified software systems using mathematical models and engineering principles",
      "Developed internal platforms using React, NextJS, Laravel, and .NET integrations for data processing",
      "Conducted feasibility analysis on large-scale software features"
    ],
    technologies: ["Laravel", "React", "Next.js", ".NET", "Git", "Excel", "SPSS"]
  },
  {
    company: "DONROSE-RK Nigeria Limited",
    location: "Delta, Nigeria",
    period: "Dec. 2016 – Aug. 2018",
    role: "Full Stack Developer & Administrator",
    highlights: [
      "Built a stock management and accounting web application tracking goods movement with Nigerian Breweries",
      "Enabled recovery of ₦7 million worth of pending deliveries within 6 months",
      "Developed systems for diesel usage monitoring, vehicle depreciation tracking, personnel sales performance, and profit analysis"
    ],
    technologies: ["PHP", "MySQL", "Excel", "VBA", "Git"]
  },
  {
    company: "National Youth Service Corps",
    location: "Bayelsa, Nigeria",
    period: "Mar. 2014 – Feb. 2015",
    role: "IT Support (Accounts & Finance)",
    highlights: [
      "Built Excel VBA automation for processing corps members' monthly allowance, reducing workload by 45%",
      "Managed document control systems across departments using Access and Visual Basic"
    ],
    technologies: ["Excel VBA", "Microsoft Access", "Batch Script"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Career Journey</span>
          <h2 className="section-title mt-2">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-2 glow-primary" />
                
                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                    <div className={`flex flex-wrap items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>

                    <ul className={`space-y-2 mb-5 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;