import ProjectsCard from "./ProjectsCard";
import TheraSyncImage from "../assets/TheraSync.png";
import LofiImage from "../assets/Lofi.png";

const projects = [
  {
    title: "TheraSync",
    description:
      "A web application that leverages AI to connect patients with the most suitable therapists based on their journaled feelings and emotional state. Users can track their emotions, receive personalized tips and advice, and communicate directly with therapists through an integrated chat feature.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Firebase",
      "JWT",
      "Socket.io",
    ],
    imageUrl: TheraSyncImage,
    url: "https://therasync.onrender.com/",
  },
  {
    title: "Lo-Fi Radio",
    description:
      "Lo-Fi Radio is a fullstack music streaming application where users can stream handpicked lo-fi tracks, create a personal favorites library, and enjoy a smooth, modern audio player experience. The app offers real-time favorites management, user authentication, polished animations, and responsive design for mobile and desktop.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
    imageUrl: LofiImage,
    url: "https://lofiradio-wheat.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">Projects</h2>
      {projects.map((exp, idx) => (
        <ProjectsCard
          key={idx}
          title={exp.title}
          description={exp.description}
          skills={exp.skills}
          imageUrl={exp.imageUrl}
          url={exp.url}
        />
      ))}
    </section>
  );
};

export default Projects;
