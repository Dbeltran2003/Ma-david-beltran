const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce site with product listings, cart, and checkout flow.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js and Tailwind CSS, deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app with drag-and-drop boards, authentication, and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <p className="text-gray-400 mb-12">A few things I&apos;ve built</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-indigo-700 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Live →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
