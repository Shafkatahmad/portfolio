import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
