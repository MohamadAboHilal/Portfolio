import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex space-x-4 mt-8">
      <a
        href="https://github.com/MohamadAboHilal"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-cyan-400 transition-colors duration-200"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamadabohilal208/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-cyan-400 transition-colors duration-200"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/mohamad_abohilal/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-cyan-400 transition-colors duration-200"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default Footer;
