import FeaturedTechnologies from "@/components/sections/FeaturedTechnologies";
import Hero from "@/components/sections/Hero";
import MyJourney from "@/components/sections/MyJourney";
import DevelopmentPhilosophy from "@/components/sections/DevelopmentPhilosophy";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import CurrentlyLearning from "@/components/sections/CurrentlyLearning";
import Contact from "@/components/sections/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedTechnologies />
      <MyJourney />
      <DevelopmentPhilosophy />
      <Skills />
      <Education />
      <Projects />
      <CurrentlyLearning />
      <Contact />
    </>
  );
};

export default HomePage;
