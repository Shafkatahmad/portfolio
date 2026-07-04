import { Outlet } from "react-router-dom";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
