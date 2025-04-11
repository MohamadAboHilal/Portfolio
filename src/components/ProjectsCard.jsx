const ProjectsCard = ({ year, title, description, skills, imageUrl, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="mb-12 p-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group flex items-start">
        {/* Image Section */}
        <img
          src={imageUrl}
          alt={title}
          className="w-32 h-24 rounded-lg object-contain mr-4"
        />

        {/* Text Content Section */}
        <div>
          <p className="text-sm text-gray-400">{year}</p>
          <h3 className="text-xl font-bold mt-1 text-gray-300 group-hover:text-cyan-400">
            {title}
          </h3>
          <p className="mt-2 text-gray-400 ">{description}</p>
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
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
