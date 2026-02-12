import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    value: "caiof007",
    href: "https://github.com/caiof007/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Caio Ferreira",
    href: "https://www.linkedin.com/in/caio-f-4835983b0",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "caiof12456@gmail.com",
    href: "mailto:caiof12456@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="font-mono text-primary/80 text-xs mb-3 tracking-[0.3em] uppercase">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
            Vamos conversar<span className="text-gradient">?</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-14 leading-relaxed">
            Estou disponível para oportunidades, colaborações e aprendizado. Fique à vontade para entrar em contato.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "E-mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/60 card-shadow hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-secondary/80 group-hover:bg-primary/10 transition-colors duration-300">
                <contact.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {contact.label}
              </span>
              <span className="text-xs text-muted-foreground/60">
                {contact.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
