import { motion } from "framer-motion";
import { Github, ExternalLink, Layout, ShoppingBag } from "lucide-react";

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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projetos em destaque<span className="text-gradient">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-2xl bg-card border border-border p-6 md:p-8 card-shadow hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-secondary">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub - ${project.title}`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-primary font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
