import { motion } from "framer-motion";
import { Github, Layout, ShoppingBag } from "lucide-react";

const projects = [
  {
    icon: Layout,
    title: "Kings Training Portal",
    description:
      "Portal de inscrição interna para uma empresa fictícia. Permite envio de dados de inscrição e conta com área de RH protegida por senha para aprovar ou reprovar candidatos.",
    techs: ["HTML", "CSS", "IA"],
    highlights: [
      "Estruturação da interface",
      "Organização do layout",
      "Experiência do usuário",
    ],
    github: "https://github.com/caiof007/kings-training-portal.git",
  },
  {
    icon: ShoppingBag,
    title: "Comic Universe Hub",
    description:
      "Loja virtual fictícia de HQs e mangás. Usuários podem navegar pelos produtos, adicionar ao carrinho e simular pagamento.",
    techs: ["HTML", "CSS", "IA"],
    highlights: [
      "Interface visual",
      "Estrutura de loja virtual",
      "Organização de componentes",
    ],
    github: "https://github.com/caiof007/comic-universe-hub.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-primary/80 text-xs mb-3 tracking-[0.3em] uppercase">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-14 tracking-tight">
            Projetos em destaque<span className="text-gradient">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-card border border-border/60 p-7 md:p-8 card-shadow hover:border-primary/20 hover:shadow-[0_8px_40px_-8px_hsl(200_80%_55%_/_0.08)] transition-all duration-400"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-secondary/80">
                  <project.icon className="w-4 h-4 text-primary/80" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
                  aria-label={`GitHub - ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-lg font-heading font-semibold mb-3 text-foreground tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] rounded-md bg-secondary/60 text-primary/80 font-mono tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
