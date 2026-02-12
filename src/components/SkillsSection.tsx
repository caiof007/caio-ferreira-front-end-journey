import { motion } from "framer-motion";
import { Code2, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Front-end",
    skills: ["HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Ferramentas & Competências",
    skills: [
      "Uso de IA no desenvolvimento",
      "Organização de layout",
      "Estruturação de interfaces",
      "Responsividade básica",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-primary/80 text-xs mb-3 tracking-[0.3em] uppercase">
            Habilidades
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-14 tracking-tight">
            O que eu sei fazer<span className="text-gradient">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl bg-card border border-border/60 p-7 md:p-8 card-shadow"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="p-2.5 rounded-lg bg-secondary/80">
                  <group.icon className="w-4 h-4 text-primary/80" />
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground tracking-tight">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -1, transition: { duration: 0.15 } }}
                    className="px-4 py-2 rounded-lg bg-secondary/60 text-secondary-foreground text-sm font-medium border border-border/40 hover:border-primary/20 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
