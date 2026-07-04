import { motion } from "framer-motion";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Building interactive, component-driven user interfaces with modern React patterns.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description:
      "Writing maintainable, type-safe applications with strong developer tooling.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description:
      "Developing scalable backend services and REST APIs using JavaScript and TypeScript.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "Designing relational databases with performance and maintainability in mind.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Crafting responsive, accessible interfaces with utility-first styling.",
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
    description:
      "Managing version control, collaboration, and modern development workflows.",
  },
];

const FeaturedTechnologies = () => {
  return (
    <Section id="technologies">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Core Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Technologies I Build With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            These are the technologies I use most often to build modern,
            scalable, and maintainable web applications.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.article
                key={tech.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{tech.name}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {tech.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedTechnologies;
