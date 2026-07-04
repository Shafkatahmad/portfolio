import { motion } from "framer-motion";
import { BookOpen, Code2, HeartHandshake, Rocket } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const cards = [
  {
    icon: Code2,
    title: "Programming Journey",
    description:
      "My journey into software development began with curiosity about how websites and applications work. Since then, I've focused on building practical projects that strengthen both my frontend and backend development skills.",
  },
  {
    icon: Rocket,
    title: "Current Focus",
    description:
      "I'm currently deepening my understanding of backend architecture, TypeScript, PostgreSQL, Prisma, and scalable API design while continuing to improve my React development workflow.",
  },
  {
    icon: HeartHandshake,
    title: "How I Work",
    description:
      "I enjoy solving real-world problems through clean, maintainable code. I believe software should be readable, scalable, and enjoyable for other developers to work with.",
  },
  {
    icon: BookOpen,
    title: "Beyond Coding",
    description:
      "Outside of coursework and personal projects, I enjoy exploring new technologies, reading technical documentation, and continuously learning modern software engineering practices.",
  },
];

const MyJourney = () => {
  return (
    <Section id="journey">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Learning Through Building
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every project has helped me become a better developer. I enjoy
            learning by building practical applications, exploring modern
            technologies, and continuously improving the way I write software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
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
                  amount: 0.25,
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

                <h3 className="mt-6 text-2xl font-semibold">{card.title}</h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default MyJourney;
