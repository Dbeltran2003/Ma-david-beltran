import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} David Beltran. Built with Next.js & Tailwind CSS.
      </footer>
    </>
  );
}
