import CV from "../assets/Mohamad Abo Hilal CV.pdf";
import SectionCard from "./SectionCard";
const education = [
  {
    year: "2024 — 2025",
    title: "Junior Full-Stack Development Bootcamp",
    company: "WBS CODING SCHOOL",
    description:
      "Completed 680 hours of intensive training in full-stack web development with expertise in JavaScript, React.js, Node.js, HTML/CSS, and database integration (SQL/NoSQL). Gained hands-on experience in Git, web deployment, testing, IT security, UI/UX design, and SEO, while collaborating on team-based agile projects.",
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "SQL",
      "NoSQL",
      "Git",
      "Web Deployment",
      "Testing",
      "IT Security",
      "UI/UX Design",
      "SEO",
      "Agile Collaboration",
      "Project Presentation",
    ],
    url: "https://www.wbscodingschool.com", // Add the URL here
  },
  {
    year: "2021 — 2024",
    title: "Computer Science Expert in Software Development",
    company: "OSZ für Informations- und Medizintechnik",
    description:
      "Completed in-depth training in modern software development, specializing in database modeling, application optimization, and integration within complex IT systems. Skilled in Agile methodologies, debugging, automated testing, and quality assurance to deliver reliable, secure solutions.",
    skills: [
      "Software Development",
      "Database Modeling",
      "Agile Methodologies",
      "Debugging",
      "Automated Testing",
      "Quality Assurance",
      "System Integration",
    ],
    url: "https://www.oszimt.de", // Add the URL here
  },
];

const Education = () => {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">Education</h2>
      {education.map((exp, idx) => (
        <SectionCard
          key={idx}
          year={exp.year}
          title={exp.title}
          company={exp.company}
          description={exp.description}
          skills={exp.skills}
          url={exp.url} // Pass the URL here
        />
      ))}

      <div className="mt-12 pl-4 mb-12">
        <a
          className="inline-flex items-baseline leading-tight hover:text-cyan-400 focus-visible:text-cyan-400 font-semibold text-gray-300 group/link text-semibold"
          href={CV}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Education;
