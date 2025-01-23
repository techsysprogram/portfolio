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
      <main className="py-12 space-y-16 bg-background max-w-7xl mx-auto">
        <Hero />

        <section className="flex px-[1rem] flex-col gap-10 bg-background">
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </section>
      </main>
    </>
  );
}
