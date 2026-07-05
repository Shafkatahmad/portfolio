import { cn } from "@/utils/cn";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className, children }: Props) => {
  return (
    <section id={id} className={cn("py-24", className)}>
      {children}
    </section>
  );
};

export default Section;
