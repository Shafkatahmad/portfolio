import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

type ButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "icon";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary border border-primary",

  secondary:
    "bg-card border border-border text-foreground hover:border-primary hover:bg-slate-800",

  ghost:
    "text-foreground hover:bg-white/5",

  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:bg-primary/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",

  md: "h-11 px-6 text-sm",

  lg: "h-12 px-8 text-base",

  icon: "h-11 w-11",
};

const Button = ({
  asChild = false,
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl",
        "font-medium",
        "transition-all duration-200",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;