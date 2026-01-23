const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {currentYear} Temitope Joseph Seidu
        </p>
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-primary">React</span> & <span className="text-primary">TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;