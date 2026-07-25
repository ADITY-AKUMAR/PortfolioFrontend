/**
 * Home page - composes all portfolio sections
 */
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CaseStudies />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
