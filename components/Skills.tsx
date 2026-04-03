const skillGroups = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <p className="text-gray-400 mb-12">Technologies I work with</p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm hover:border-indigo-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
