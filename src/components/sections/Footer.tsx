import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/components/common/Container";
import SOCIALS from "@/data/socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Shaf Ahmad</h3>

            <p className="mt-2 text-sm text-slate-400">
              Full Stack & Backend Developer
            </p>

            <p className="mt-4 text-sm text-slate-500">
              © {year} Shaf Ahmad. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-border p-3 transition-colors hover:border-primary"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-border p-3 transition-colors hover:border-primary"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-slate-500 md:flex-row">
          <p>Built with React + TypeScript + Tailwind CSS</p>

          <p className="flex items-center gap-2">
            Made with
            <Heart size={16} className="fill-primary text-primary" />
            in Bangladesh
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
