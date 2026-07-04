import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/constants/navigation";
import SOCIALS from "@/data/socials";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveSection(
            visible.target.id.toLowerCase()
          );
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = useMemo(
    () =>
      NAV_LINKS.map((item) => {
        const id = item.href.replace("#", "");

        const active = activeSection === id;

        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
              active
                ? "text-white"
                : "text-slate-400 hover:text-white"
            )}
          >
            {item.label}

            {active && (
              <motion.span
                layoutId="navbar-indicator"
                className="absolute inset-x-2 -bottom-[6px] h-0.5 rounded-full bg-blue-500"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}
          </a>
        );
      }),
    [activeSection]
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/10 bg-background/75 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {links}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SOCIALS.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="sm">
                Resume
              </Button>
            </a>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(true)
            }
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border",
              "bg-card transition-all duration-200",
              "hover:border-primary hover:bg-card/80",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-primary",
              "lg:hidden"
            )}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;