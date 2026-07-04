import { motion } from "framer-motion";
import { Gauge, ShieldCheck, TrendingUp } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const philosophies = [
  {
    title: "Performance First",
    description:
      "Fast experiences create better products. I focus on responsive interfaces, efficient rendering, and writing code that scales as applications grow.",
    icon: Gauge,
  },
  {
    title: "Type Safety",
    description:
      "TypeScript helps me build reliable software with fewer runtime errors, clearer APIs, and a better development experience for teams.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves quickly. I invest time in learning modern tools, software architecture, and engineering best practices through real projects.",
    icon: TrendingUp,
  },
];

const DevelopmentPhilosophy = () => {
  return (
    <Section id="philosophy">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Development Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Principles That Guide My Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I believe great software is more than working code. It should be
            maintainable, performant, and enjoyable for both users and
            developers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {philosophies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default DevelopmentPhilosophy;
