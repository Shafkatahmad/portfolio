import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/constants/navigation";
import SOCIALS from "@/data/socials";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const drawer = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const MobileMenu = ({
  isOpen,
  onClose,
}: MobileMenuProps) => {
  return (
    <>
      {/* <button
        onClick={onClose}
        className="hidden"
        aria-hidden
      >
        <Menu />
      </button> */}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              variants={drawer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-border bg-background p-6 lg:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <Logo />

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="rounded-lg border border-border p-2 transition hover:border-primary"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-card hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8">
                <a
                  href={SOCIALS.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="w-full">
                    Resume
                  </Button>
                </a>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-3">
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-border p-3 transition hover:border-primary"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-border p-3 transition hover:border-primary"
                  >
                    <FaLinkedin size={18} />
                  </a>

                  <a
                    href={SOCIALS.email}
                    className="rounded-lg border border-border p-3 transition hover:border-primary"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;