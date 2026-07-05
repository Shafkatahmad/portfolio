import { Link } from "react-router-dom";

import { cn } from "@/utils/cn";
import { SITE } from "@/constants/site";

import profileImage from "@/assets/images/profile.jpg";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      to="/"
      aria-label="Go to homepage"
      className={cn(
        "group inline-flex items-center gap-3 select-none",
        className,
      )}
    >
      {/* Logo Mark */}
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl",
          "border border-border",
          "bg-card",
          "transition-all duration-300",
          "group-hover:border-primary",
          "group-hover:shadow-[0_0_24px_rgba(37,99,235,0.15)]",
        )}
      >
        {/* <span className="text-lg font-bold text-primary">
          S
        </span> */}
        <img
          src={profileImage}
          alt="Portrait of Shaf Ahmad"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-sm font-semibold tracking-tight",
            "text-foreground transition-colors duration-300",
            "group-hover:text-white",
          )}
        >
          {SITE.name}
        </span>

        <span
          className={cn(
            "text-xs text-slate-400",
            "transition-colors duration-300",
            "group-hover:text-slate-300",
          )}
        >
          {SITE.title}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
