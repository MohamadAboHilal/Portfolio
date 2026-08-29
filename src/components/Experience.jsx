import SectionCard from "./SectionCard";

const experiences = [
  {
    year: "Jan 2025 — Present",
    title: "Freelance Full-Stack Developer",
    company: "Freelance",
    description:
      "Development and implementation of complete web applications for clients, including frontend development with React, Vue.js and Tailwind CSS, as well as backend development with Node.js, Express, and MongoDB. Responsibilities included designing and integrating REST APIs, user authentication, and data persistence. Close collaboration with clients involved requirements analysis, technical consulting, and on-time project delivery. Gained experience in deployment, version control (Git), and agile working methodologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "User Authentication",
      "Agile Methodologies",
    ],
    url: "",
  },
  {
    year: "Nov 2021 — Aug 2024",
    title: "Junior Software Developer (Apprenticeship)",
    company: "Viamedici",
    description:
      "Developed and maintained enterprise system interfaces using Java, SQL, XML, and XSLT. Implemented SQL queries to monitor and improve large customer datasets, contributed to Microsoft Azure cloud migration initiatives, and collaborated in Agile teams using Jira and Confluence.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "SQL",
      "Azure Cloud",
      "XML",
      "XSLT",
      "JIRA",
      "Confluence",
    ],
    url: "https://www.viamedici.com",
  },
];

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl font-semibold mb-6 text-gray-300">Experience</h2>
      {experiences.map((exp, idx) => (
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
    </section>
  );
};

export default Experience;
