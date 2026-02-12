import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Refined ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-primary/80 text-xs mb-6 tracking-[0.3em] uppercase"
          >
            Olá, eu sou
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-4 leading-[1.1] tracking-tight">
            Caio Ferreira
            <br />
            <span className="text-gradient">Maurício da Silva</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground mb-2 font-light tracking-wide"
          >
            Desenvolvedor Front-end em formação
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm text-muted-foreground/50 max-w-md mx-auto mb-12 font-light italic"
          >
            "Transformando curiosidade em código, uma linha de cada vez."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <a
              href="https://github.com/caiof007/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-all duration-300 text-sm font-medium border border-border/50 hover:border-border hover:elevated-shadow"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/caio-f-4835983b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-[0_0_20px_-4px_hsl(200_80%_55%_/_0.3)] hover:shadow-[0_0_28px_-4px_hsl(200_80%_55%_/_0.4)]"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground/40 hover:text-primary/70 transition-colors duration-300">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
