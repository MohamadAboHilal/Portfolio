const About = () => {
  return (
    <section id="about" className="mb-5">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">About</h2>
      <p className="text-base md:text-lg font-light leading-relaxed tracking-normal text-gray-400">
        I am a dedicated Full-Stack Software Engineer with hands-on experience
        in building modern, scalable web applications using
        <span className="font-bold text-gray-300">
          {" "}
          React, Vue.js, Node.js, and TypeScript
        </span>
        . My professional journey includes over three years of software
        development at{" "}
        <a
          href="https://viamedici.com/de/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-300 hover:text-cyan-400 duration-200"
        >
          Viamedici
        </a>
        , where I developed and maintained integrations with SQL, XML, XSLT, and
        Java to optimize data exchange and cloud solutions. Recently, I
        completed a comprehensive Full-Stack Web & App Development Bootcamp at{" "}
        <a
          href="https://www.wbscodingschool.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-300 hover:text-cyan-400 duration-200"
        >
          WBS Coding School
        </a>
        , where I deepened my expertise in JavaScript, React, Node.js, and cloud
        deployment while developing AI-powered and data-driven applications.
        <br />
        <br />I am fluent in German, English, and Arabic, and I thrive in
        collaborative, agile environments that encourage creative
        problem-solving. Beyond coding, I enjoy gaming, puzzles, and any
        challenge that sharpens analytical thinking. I am passionate about
        leveraging emerging technologies such as AI and cloud computing to build
        impactful, user-centered digital solutions.
      </p>
    </section>
  );
};

export default About;
