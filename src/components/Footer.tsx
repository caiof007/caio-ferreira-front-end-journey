const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-mono text-primary/60">Caio Ferreira</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
