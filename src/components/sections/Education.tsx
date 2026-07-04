import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Learning & Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My academic journey and hands-on projects have provided a strong
            foundation in computer science, software engineering, and modern web
            development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Bachelor of Computer Science & Engineering
            </h3>

            <p className="mt-2 text-lg font-medium text-primary">
              East West University
            </p>

            <div className="mt-6 space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Calendar size={18} />
                <span>Currently Studying</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Studying core computer science concepts including algorithms,
              database systems, computer architecture, software engineering,
              networking, and modern application development while continuously
              applying them through practical projects.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Self-directed Full Stack Developer
            </h3>

            <p className="mt-2 text-lg font-medium text-primary">
              Personal Projects & Continuous Learning
            </p>

            <p className="mt-8 leading-8 text-slate-400">
              Building production-oriented web applications to strengthen my
              frontend and backend development skills. My projects focus on
              modern React, TypeScript, Node.js, PostgreSQL, Prisma, and clean
              software architecture while following industry best practices.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-background p-5">
              <h4 className="font-semibold">Current Focus</h4>

              <ul className="mt-4 space-y-2 text-slate-400">
                <li>• Full Stack Web Development</li>
                <li>• Backend API Design</li>
                <li>• Database Modeling</li>
                <li>• Clean Architecture</li>
                <li>• System Design Fundamentals</li>
              </ul>
            </div>
          </motion.article>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
