import { HashRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GlowCursor from "./components/GlowCursor";

function App() {
  return (
    <HashRouter>
      <div className="font-sans min-h-screen bg-gradient-to-b from-[#0a0e18] to-[#020c1b] text-white flex">
        {/* Glow Cursor */}
        <GlowCursor />

        {/* Main Container */}
        <div className="flex w-full max-w-7xl mx-auto p-8 h-full" id="main">
          {/* Left side (Sidebar) fixed */}
          <div className="w-1/2 h-full sticky top-20 mr-4 flex flex-col justify-between">
            <Sidebar />
            <Footer />
          </div>

          {/* Right side (Main Content) */}
          <div className="w-2/3 p-8 m-4 overflow-y-auto">
            <About id="about" />

            <div className="pt-12" id="experienceAndEducation">
              <Experience />
              <Education />
            </div>
            <div className="pt-12" id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
