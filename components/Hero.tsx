export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl text-center">
        <p className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          David Beltran
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
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
