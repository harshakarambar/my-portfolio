import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Experience from "../components/Experience";
import About from "../components/About";
import Certifications from "../components/Certifications";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      <Expertise />
      <Experience />
      <About />
      <Certifications />
      <FinalCTA />
      <Footer />
    </main>
  );
}
