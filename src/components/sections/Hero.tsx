import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDocker, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

import profileImage from "@/assets/images/profile.jpg";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { SITE } from "@/constants/site";
import SOCIALS from "@/data/socials";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 lg:flex lg:min-h-screen lg:items-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />

                <span className="text-sm font-medium">Available for</span>

                <span className="text-border">•</span>

                <span className="text-sm text-muted-foreground">
                  Internship
                </span>

                <span className="text-border">•</span>

                <span className="text-sm text-muted-foreground">Full-Time</span>

                <span className="text-border">•</span>

                <span className="text-sm text-muted-foreground">Freelance</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Hello, I'm
              </p>

              <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Shafkat Ahmad
              </h1>

              <h2 className="mt-5 text-xl font-semibold text-slate-300 md:text-2xl">
                {SITE.title}
              </h2>

              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
                {SITE.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
            >
              I'm a Computer Science student and Full Stack & Backend Developer
              who enjoys designing scalable backend APIs, modeling efficient
              databases, and building end-to-end web applications with modern
              TypeScript technologies. I'm passionate about writing
              maintainable, type-safe code and continuously improving my skills
              through real-world projects and production-oriented development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowRight size={18} />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href={SOCIALS.resume} target="_blank" rel="noreferrer">
                  <Download size={18} />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-border p-3 transition-all duration-200 hover:-translate-y-1 hover:border-primary"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-border p-3 transition-all duration-200 hover:-translate-y-1 hover:border-primary"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={SOCIALS.email}
                aria-label="Email"
                className="rounded-xl border border-border p-3 transition-all duration-200 hover:-translate-y-1 hover:border-primary"
              >
                <Mail size={22} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-3"
            >
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      y: -4,
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-slate-300 backdrop-blur transition-colors hover:border-primary"
                  >
                    <Icon size={16} className="text-primary" />

                    <span>{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl" />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Portrait of Shaf Ahmad"
                  className="h-[420px] w-[340px] object-cover lg:h-[560px] lg:w-[420px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="mt-20 hidden justify-center lg:flex"
        >
          <a
            href="#technologies"
            aria-label="Scroll to Featured Technologies"
            className="group flex flex-col items-center gap-3 text-slate-500 transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em]">
              Scroll
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full border border-border p-2 group-hover:border-primary"
            >
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
