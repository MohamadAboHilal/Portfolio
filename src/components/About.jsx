const About = () => {
  return (
    <section id="about" className="mb-5">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">About</h2>
      <p className="text-base md:text-lg font-light leading-relaxed tracking-normal text-gray-400">
        I&apos;m enrolled in the B.Sc. Ingenieurinformatik program at{" "}
        <a
          href="https://www.htw-berlin.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-300 hover:text-cyan-400 duration-200"
        >
          HTW Berlin
        </a>
        , and I&apos;m a full-stack developer with three years of professional
        experience gained through an IHK vocational training. I build modern
        applications using
        <span className="font-bold text-gray-300">
          {" "}
          React, Vue.js, Node.js, and TypeScript
        </span>
        . At{" "}
        <a
          href="https://viamedici.com/de/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-300 hover:text-cyan-400 duration-200"
        >
          Viamedici
        </a>
        , I developed and maintained enterprise integrations with SQL, XML,
        XSLT, and Java and contributed to Azure cloud migration initiatives. I
        also completed a Full-Stack Web & App Development Bootcamp at{" "}
        <a
          href="https://www.wbscodingschool.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-300 hover:text-cyan-400 duration-200"
        >
          WBS Coding School
        </a>
        , where I deepened my expertise in JavaScript, React, Node.js, and cloud
        deployment while building AI-powered and data-driven applications.
        <br />
        <br />I work fluently across German, English, and Arabic and enjoy turning
        requirements into accessible, responsive products—from the first API
        design through testing and deployment.
      </p>
    </section>
  );
};

export default About;
