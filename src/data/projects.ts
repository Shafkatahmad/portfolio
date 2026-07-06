import bplDreamTeam from "@/assets/images/projects/bplDreamTeam.png";
import gadgetHeaven from "@/assets/images/projects/gadgetHeaven.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  challenges: string[];
  futurePlans: string[];
};

export const projects: Project[] = [
  {
    slug: "gadget-heaven",

    title: "Gadget Heaven",

    category: "Frontend Web Application",

    image: gadgetHeaven,

    description:
      "Gadget Heaven is a modern e-commerce-inspired web application where users can browse products, explore detailed product pages, manage a shopping cart, and maintain a wishlist. The application emphasizes reusable React components, responsive layouts, client-side routing, and clean state management while delivering a smooth user experience.",

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

    challenges: [
      "Managing global cart and wishlist state efficiently across multiple pages.",
      "Designing reusable product components while keeping the UI consistent.",
      "Implementing client-side routing without unnecessary re-renders.",
      "Creating a responsive layout that works well across different screen sizes.",
    ],

    futurePlans: [
      "Integrate a real backend API instead of static JSON data.",
      "Add user authentication and personalized accounts.",
      "Implement product search, filtering, and sorting.",
      "Introduce payment gateway integration and order management.",
    ],
  },

  {
    slug: "bpl-dream-team",

    title: "BPL Dream Team",

    category: "Frontend Web Application",

    image: bplDreamTeam,

    description:
      "BPL Dream Team allows users to build their own cricket squad while managing player selection rules and budget limitations. The project demonstrates effective state management, reusable components, responsive layouts, and interactive user feedback.",

    technologies: ["React", "JavaScript", "HTML", "CSS", "React Toastify"],

    github: "https://github.com/Shafkatahmad/mi7-mo43-B10A7-Dream-xi",

    live: "https://friendly-begonia-f14627.netlify.app/",

    challenges: [
      "Managing complex player selection constraints.",
      "Preventing duplicate player selection.",
      "Keeping budget calculations synchronized with user actions.",
      "Providing clear user feedback using notifications.",
    ],

    futurePlans: [
      "Fetch player data from a REST API.",
      "Add player search and filtering.",
      "Allow users to save multiple teams.",
      "Introduce authentication and cloud storage.",
    ],
  },

  {
    slug: "football-ticket-booking-system",

    title: "Football Ticket Booking System",

    category: "Production-Oriented Backend API",

    description:
      "A backend-focused university project centered around database design and booking workflows. The system models users, football matches, stadiums, seats, bookings, and payment information while emphasizing normalization, relational database design, SQL, and backend development principles.",

    technologies: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "ERD",
      "Backend Development",
    ],

    github: "https://github.com/Shafkatahmad/Football_Ticket_Booking_System",

    challenges: [
      "Designing a normalized relational database schema.",
      "Modeling real-world booking relationships accurately.",
      "Maintaining referential integrity using foreign keys.",
      "Writing optimized SQL queries for complex operations.",
    ],

    futurePlans: [
      "Develop a complete REST API using Node.js and Express.",
      "Implement JWT authentication and authorization.",
      "Add online payment integration.",
      "Create an admin dashboard for match and ticket management.",
    ],
  },
];

export default projects;
