import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();
  let currentPath = location.pathname;
  console.log("Current Path:", currentPath);
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight pb-2 text-gray-300">
          Mohamad Abo Hilal
        </h1>
        <h2 className="mt-2 text-xl text-gray-400 pb-2">
          Software Development Engineer and <br /> Full-Stack Web Developer
        </h2>
        <p className="text-base md:text-lg font-light leading-relaxed tracking-normal text-gray-400">
          I build accessible, modern web applications.
        </p>

        <nav className="mt-12 space-y-4">
          <a
            href="#main"
            className={`block hover:text-cyan-400 transition-colors duration-200 text-lg ${
              currentPath === "/main" ? "text-cyan-400" : "text-gray-300"
            }`}
          >
            About
          </a>
          <a
            href="#experienceAndEducation"
            className={`block hover:text-cyan-400 transition-colors duration-200 text-lg ${
              currentPath === "/experienceAndEducation"
                ? "text-cyan-400"
                : "text-gray-300"
            }`}
          >
            Experience & Education
          </a>
          <a
            href="#projects"
            className={`block hover:text-cyan-400 transition-colors duration-200 text-lg ${
              currentPath === "/projects" ? "text-cyan-400" : "text-gray-300"
            }`}
          >
            Projects
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
