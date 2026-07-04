import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const learningTopics = [
  "Advanced React",
  "TypeScript",
  "FastAPI",
  "Prisma",
  "Clean Architecture",
  "System Design",
];

const CurrentlyLearning = () => {
  return (
    <Section id="learning">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Currently Learning
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Always Improving
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Technology evolves quickly, and I enjoy continuously learning new
            tools, architectural patterns, and best practices that help me build
            more reliable and scalable software.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="font-medium">{topic}</span>

              <ArrowUpRight
                size={18}
                className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CurrentlyLearning;
