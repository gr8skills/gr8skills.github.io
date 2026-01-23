import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Temitope Joseph Seidu - Full Stack Developer & Robotic Engineer</title>
        <meta 
          name="description" 
          content="Full Stack Developer with 7+ years experience in fintech, government systems, and IoT. Expert in PHP, TypeScript, Angular, React, and .NET. Based in Lagos, Nigeria." 
        />
        <meta name="keywords" content="Full Stack Developer, React Developer, Angular Developer, PHP Developer, Laravel, .NET, Robotic Engineer, Lagos Nigeria" />
        <meta property="og:title" content="Temitope Joseph Seidu - Full Stack Developer" />
        <meta property="og:description" content="7+ years crafting production-grade solutions in fintech, agriculture, and government systems." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://temitopejs.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;