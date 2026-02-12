import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Sparkles } from "lucide-react";

const traits = [
  { icon: Lightbulb, label: "Curioso" },
  { icon: Target, label: "Dedicado" },
  { icon: Sparkles, label: "Organizado" },
  { icon: Users, label: "Trabalho em equipe" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-primary/80 text-xs mb-3 tracking-[0.3em] uppercase">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 tracking-tight">
            Quem sou eu<span className="text-gradient">.</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
              <p>
                Meu interesse por tecnologia começou aos 12 anos, quando a curiosidade por entender como jogos funcionam me levou a querer criar o meu próprio. Aos 14 anos, comecei a estudar programação utilizando o VS Code, explorando como as coisas são construídas por trás das telas.
              </p>
              <p>
                Atualmente, estudo <span className="text-foreground font-medium">HTML</span> e <span className="text-foreground font-medium">CSS</span> e exploro o uso de <span className="text-foreground font-medium">inteligência artificial</span> como ferramenta de apoio no desenvolvimento, através do curso <span className="text-foreground font-medium">Bit Vai na Web</span>.
              </p>
              <p>
                Meu objetivo é ingressar profissionalmente na área de TI, contribuindo com soluções bem estruturadas e interfaces que fazem a diferença.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center justify-center gap-2.5 p-5 rounded-xl bg-card border border-border/60 card-shadow text-center hover:border-primary/20 transition-colors duration-300"
                >
                  <trait.icon className="w-4 h-4 text-primary/70" />
                  <span className="text-xs font-medium text-foreground tracking-wide">
                    {trait.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
