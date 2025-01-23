import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className="py-12 space-y-16 bg-background max-w-7xl mx-auto">
      <Navbar />
        <Hero />

        <section className="flex px-10 flex-col gap-10 bg-background">
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </section>
      </main>
    </>
  );
}
