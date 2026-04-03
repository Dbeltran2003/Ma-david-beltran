export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is open.
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8 text-gray-400">
          <a
            href="https://github.com/Dbeltran2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
