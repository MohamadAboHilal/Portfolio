import CV from "../assets/Mohamad Abo Hilal CV.pdf";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight pb-2 text-gray-300">
          Mohamad Abo Hilal
        </h1>
        <h2 className="mt-2 text-xl text-gray-400 pb-2 font-semibold">
          Software Engineering Student &amp; <br /> Full-Stack Developer
        </h2>
        <p className="text-base md:text-lg font-light leading-relaxed tracking-normal text-gray-400">
          I build accessible, modern web applications from Berlin.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-7">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=moabohilal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-2.5 text-center text-sm font-semibold leading-none text-slate-950 hover:bg-cyan-200 transition-colors"
          >
            Get in touch
          </a>
          <a
            href={CV}
            download="Mohamad-Abo-Hilal-CV.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-center text-sm font-semibold leading-none text-gray-200 hover:border-cyan-300 hover:text-cyan-300 transition-colors"
          >
            Download résumé
          </a>
        </div>

        {/* Nav visible only on large screens */}
        <nav className="mt-12 space-y-4 hidden lg:block">
          <a
            href="#main"
            className="block hover:text-cyan-400 transition-colors duration-200 text-lg text-gray-300"
          >
            About
          </a>
          <a
            href="#experience"
            className="block hover:text-cyan-400 transition-colors duration-200 text-lg text-gray-300"
          >
            Experience
          </a>
          <a href="#education" className="block hover:text-cyan-400 transition-colors duration-200 text-lg text-gray-300">
            Education
          </a>
          <a href="#skills" className="block hover:text-cyan-400 transition-colors duration-200 text-lg text-gray-300">
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-cyan-400 transition-colors duration-200 text-lg text-gray-300"
          >
            Projects
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
