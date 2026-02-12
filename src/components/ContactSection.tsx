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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar<span className="text-gradient">?</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Estou disponível para oportunidades, colaborações e aprendizado. Fique à vontade para entrar em contato.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "E-mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border card-shadow hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                <contact.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {contact.label}
              </span>
              <span className="text-xs text-muted-foreground">
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
