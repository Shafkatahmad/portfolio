import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "REST API", icon: null },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Database Design", icon: null },
      { name: "SQL", icon: null },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold">Technologies & Tools</h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I enjoy building full stack applications using modern technologies
            with a strong focus on clean architecture, maintainability, and
            developer experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-primary"
                    >
                      {Icon && <Icon size={16} className="text-primary" />}

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
