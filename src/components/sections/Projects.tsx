import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold">Things I've Built</h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            These projects reflect my continuous learning journey and
            demonstrate my experience building modern frontend and backend
            applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

                  <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:border-primary"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-white transition hover:opacity-90"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
