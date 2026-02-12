const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-mono text-primary">Caio Ferreira</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
