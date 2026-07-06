import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useParams } from "react-router-dom";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const ProjectDetailsPage = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <Section className="pt-32">
      <Container>
        <div className="mb-10">
          <Button asChild variant="ghost">
            <Link to="/#projects">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </Button>
        </div>

        <article className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Hero Image */}
          {project.image && (
            <div className="border-b border-border">
              <img
                src={project.image}
                alt={project.title}
                className="h-[300px] w-full object-cover md:h-[450px]"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* Header */}
            <div>
              <p className="text-sm font-medium text-primary">
                {project.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {project.title}
              </h1>
            </div>

            {/* Tech Stack */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold">Technology Stack</h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold">Project Overview</h2>

              <p className="mt-4 leading-8 text-slate-400">
                {project.description}
              </p>
            </section>

            {/* Links */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold">Links</h2>

              <div className="mt-5 flex flex-wrap gap-4">
                <Button asChild variant="secondary">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub size={18} />
                    GitHub Repository
                  </a>
                </Button>

                {project.live && (
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={18} />
                      Live Project
                    </a>
                  </Button>
                )}
              </div>
            </section>

            {/* Challenges */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold">Challenges Faced</h2>

              <ul className="mt-5 space-y-3 text-slate-400">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Future Plans */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold">Future Improvements</h2>

              <ul className="mt-5 space-y-3 text-slate-400">
                {project.futurePlans.map((plan) => (
                  <li key={plan} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default ProjectDetailsPage;
