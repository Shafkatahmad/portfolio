import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import SOCIALS from "@/data/socials";

const contacts = [
  {
    title: "Email",
    value: "shafkataahmad@gmail.com",
    href: SOCIALS.email,
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+880 1725-766499",
    href: SOCIALS.phone,
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    href: SOCIALS.whatsapp,
    icon: FaWhatsapp,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/shafkatahmed1",
    href: SOCIALS.linkedin,
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/Shafkatahmad",
    href: SOCIALS.github,
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Let's Build Something Meaningful Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether it's an internship, a full-time opportunity, freelance work,
            or simply discussing software development, I'd be happy to connect.
          </p>

          <div className="mt-10">
            <Button asChild size="lg">
              <a href={SOCIALS.email}>
                Get In Touch
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
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
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="font-semibold">{contact.title}</p>

                  <p className="mt-1 text-slate-400">{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
