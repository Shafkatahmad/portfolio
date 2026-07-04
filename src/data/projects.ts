export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Gadget Heaven",
    category: "Frontend Web Application",
    description:
      "A modern e-commerce style application where users can browse gadgets, view product details, manage favorites, and build a shopping cart. The project demonstrates reusable React components, client-side routing, state management, and responsive UI development.",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "Context API",
    ],
    github:
      "https://github.com/Shafkatahmad/mi8_mo48_b10_a8_Gadget_Heaven_typescript",
    live: "https://mi8-mo48-b10-a8-gadget-heaven.pages.dev/",
  },
  {
    title: "BPL Dream Team",
    category: "Frontend Web Application",
    description:
      "An interactive cricket team builder that allows users to select players while managing budgets and squad constraints. The application demonstrates component composition, state management, reusable UI, and responsive layouts.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "React Toastify"],
    github: "https://github.com/Shafkatahmad/mi7-mo43-B10A7-Dream-xi",
    live: "https://friendly-begonia-f14627.netlify.app/",
  },
  {
    title: "Football Ticket Booking System",
    category: "Production-Oriented Backend API",
    description:
      "A backend-focused university project implementing database design, relational modeling, SQL, booking workflows, and backend development principles for a football ticket booking platform.",
    technologies: ["PostgreSQL", "SQL", "Database Design", "Backend"],
    github: "https://github.com/Shafkatahmad/Football_Ticket_Booking_System",
  },
];
