export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          I build fast, accessible, and user-friendly web applications. Passionate about clean code and great user experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
