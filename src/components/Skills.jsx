const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Microsoft Azure", "WebSockets", "Vite"],
  },
  {
    label: "Languages",
    skills: ["German (C1)", "English (C1)", "Arabic (C2)"],
  },
];

const Skills = () => (
  <section aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="text-2xl font-semibold mb-6 text-gray-300">Skills</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <article key={group.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-gray-200">{group.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">{group.skills.join(" · ")}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
