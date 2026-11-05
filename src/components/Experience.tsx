import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Gofly Travel & Tours Limited",
    location: "Lagos, Nigeria",
    period: "Jan. 2026 – Present",
    role: "Full Stack Developer (PHP / Angular)",
    highlights: [
      "Build and maintain features on makeifly.com, the company's flight and hotel booking platform",
      "Integrated a hotel booking supplier and a new payment gateway",
      "Moved the build pipeline to GCP Cloud Build and packaged the application with Docker for staging",
      "Deployed the app on Cloud Run so it scales up on its own during busy booking periods"
    ],
    technologies: ["Laravel", "Angular", "MySQL", "Docker", "GCP Cloud Build", "Cloud Run"]
  },
  {
    company: "Blouza Technologies Ltd.",
    location: "Lagos, Nigeria (Remote)",
    period: "Jul. 2025 – Present",
    role: "Full Stack Developer (PHP / NestJS / React)",
    highlights: [
      "Lead development of CareSol, EasyPay and ReMS, and contribute to the rest of the product line, much of it revenue and tax software for state and local governments",
      "Build REST APIs in NestJS and Laravel; reworked slow data aggregation queries, bringing average API latency down noticeably",
      "Set up GCP environments with Terraform so development and production are configured the same way",
      "Wrote GitHub Actions pipelines that lint, run the test suite, and push an image to Artifact Registry only when everything passes",
      "Maintain a set of shared React components used across the company's frontends"
    ],
    technologies: ["NestJS", "Laravel", "React", "Next.js", "PostgreSQL", "Terraform", "GitHub Actions", "Artifact Registry"]
  },
  {
    company: "PayOnDelivery",
    location: "Houston, Texas (Remote)",
    period: "Jan. 2025 – Dec. 2025",
    role: "Lead Developer (PHP / React)",
    highlights: [
      "Owned the engineering roadmap for a cross-border marketplace and shipped its buyer-to-seller checkout and payment flows",
      "Reviewed pull requests, ran deployments and looked after the servers, keeping uptime at 99.9% with automated alerts and recovery",
      "Migrated the app off its old hosting onto AWS EC2, with S3 for file storage and CircleCI for deploys"
    ],
    technologies: ["Laravel", "React", "MySQL", "AWS EC2", "S3", "CircleCI"]
  },
  {
    company: "NowNow Digital Systems Ltd.",
    location: "Lagos, Nigeria",
    period: "Mar. 2023 – Jan. 2026",
    role: "Full Stack Developer (PHP / Angular)",
    highlights: [
      "Worked on government revenue platforms in several states, covering tax collection, business licensing, land revenue and vehicle registration",
      "Built internal services in ASP.NET Core Web API for authentication, role permissions and two-way data sync with the older PHP systems still in use",
      "Helped containerise the state-level services and move them to GKE, giving each state its own isolated deployment and better fault tolerance",
      "Rewrote slow SQL queries and added Redis caching, cutting API response times by 32%",
      "Built reusable Angular components that made the admin screens faster and easier to maintain"
    ],
    technologies: ["Laravel", "Angular", "ASP.NET Core (C#)", "SQL Server", "MySQL", "Redis", "GKE"]
  },
  {
    company: "Winexviv International",
    location: "Lagos, Nigeria",
    period: "Jul. 2019 – Feb. 2023",
    role: "Backend Developer & Robotics Engineer (educare)",
    highlights: [
      "Built an error notifier for the educare platform that flags critical failures as they happen; issue resolution improved by 35% after it went live",
      "Helped design the accounts and finance module, including multi-currency wallets and a fallback between Paystack and Rave when one gateway failed",
      "Worked on an HRM system covering staffing, payroll, leave and employee records",
      "Set up Azure Pipelines for some business units so builds were verified before going out to Azure App Service",
      "Built automated hand-washing machines and disinfectant booths during the 2020 pandemic and a fruit-sorting system on Raspberry Pi; also taught STREAM robotics classes"
    ],
    technologies: ["Laravel", "AngularJS", "MySQL", "Azure Pipelines", "Azure App Service", "C++", "Arduino", "Raspberry Pi"]
  },
  {
    company: "SFS Capital Nigeria Limited",
    location: "Lagos, Nigeria",
    period: "",
    role: "Software Engineer & Support",
    highlights: [
      "Built internal data-processing tools and portals in React, Next.js and Laravel on top of existing .NET APIs",
      "Did feasibility analysis on large proposed features, using mathematical modelling to test designs before development started"
    ],
    technologies: ["Laravel", "React", "Next.js", ".NET APIs"]
  },
  {
    company: "Freelance",
    location: "Oyo State, Nigeria",
    period: "Sep. 2018 – Jun. 2019",
    role: "Software Developer",
    highlights: [
      "Built and maintained web applications for small businesses in Laravel and MySQL, handling everything from requirements through to hosting and support"
    ],
    technologies: ["Laravel", "MySQL"]
  },
  {
    company: "DONROSE-RK Nigeria Limited",
    location: "Delta, Nigeria",
    period: "Dec. 2016 – Aug. 2018",
    role: "Full Stack Developer & Administrator",
    highlights: [
      "Built a stock management and accounting web app that tracked goods moving through the company's distribution network",
      "Helped recover ₦7 million in unaccounted deliveries within six months",
      "Added tools for diesel usage, vehicle depreciation, sales staff performance and profit analysis"
    ],
    technologies: ["PHP", "MySQL", "Excel VBA"]
  },
  {
    company: "Freelance",
    location: "Delta, Nigeria",
    period: "Mar. 2015 – Nov. 2016",
    role: "Web Developer",
    highlights: [
      "Built websites and small database-backed web tools in PHP and MySQL for local businesses, and kept them running after launch"
    ],
    technologies: ["PHP", "MySQL"]
  },
  {
    company: "National Youth Service Corps",
    location: "Bayelsa, Nigeria",
    period: "Mar. 2014 – Feb. 2015",
    role: "IT Support (Accounts & Finance)",
    highlights: [
      "Automated the monthly allowance processing for corps members in Excel VBA, cutting the workload by 45%",
      "Ran document control across departments using Microsoft Access and Visual Basic"
    ],
    technologies: ["Excel VBA", "Microsoft Access", "Visual Basic"]
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
                key={`${exp.company}-${exp.location}-${exp.period}`}
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
                      {exp.period && (
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      )}
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