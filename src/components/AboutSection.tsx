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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quem sou eu<span className="text-gradient">.</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-card border border-border card-shadow text-center"
                >
                  <trait.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
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
