const SectionCard = ({ year, title, company, description, skills, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-12 p-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group"
    >
      <p className="text-sm text-gray-400">{year}</p>
      <h3 className="text-xl font-bold mt-1 text-gray-300 group-hover:text-cyan-400">
        {title} - {company}
      </h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-cyan-300 bg-opacity-15 text-cyan-300 px-2 py-1 text-xs rounded-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
};

export default SectionCard;
