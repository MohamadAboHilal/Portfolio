import { FiArrowUpRight } from "react-icons/fi";

const ProjectsCard = ({ title, description, skills, imageUrl, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="mb-12 p-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group flex flex-col md:flex-row items-start">
        {/* Image Section */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-32 h-48 md:h-24 rounded-lg object-contain mb-4 md:mb-0 md:mr-4"
        />

        {/* Text Content Section */}
        <div>
          <h3 className="text-xl font-bold mt-1 text-gray-300 group-hover:text-cyan-400 flex items-center gap-2">
            {title} <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
