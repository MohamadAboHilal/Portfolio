import SectionCard from "./SectionCard";

const experiences = [
  {
    year: "2025 — current",
    title: "Full-Stack Software Developer",
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
      "SQL",
      "PostgreSQL",
      "Vue.js",
      "REST APIs",
      "User Authentication",
      "Agile Methodologies",
    ],
    url: "",
  },
  {
    year: "2021 — 2024",
    title: "Software Developer (Apprenticeship)",
    company: "Viamedici",
    description:
      "Developed and maintained full-stack solutions using Java, SpringBoot, Python-Flask, and frontend technologies. Built efficient data interfaces with SQL, XML, and XSLT, contributed to Azure Cloud migrations, and supported project management with JIRA and Confluence. Completed 2000+ hours of training in coding and software development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "SpringBoot",
      "Python-Flask",
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
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">Experience</h2>
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
