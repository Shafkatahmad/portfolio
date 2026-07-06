import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
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
              key={project.slug}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Image */}
              {project.image && (
                <div className="overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

                    <p className="mt-5 leading-8 text-slate-400">
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

                  <div className="flex flex-col gap-3 lg:w-48">
                    <Button asChild variant="secondary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    </Button>

                    {project.live && (
                      <Button asChild>
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    <Button asChild variant="outline">
                      <Link to={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
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
