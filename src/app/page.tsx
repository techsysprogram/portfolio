import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-12 space-y-16">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
