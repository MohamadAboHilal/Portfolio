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
    </section>
  );
};

export default Education;
