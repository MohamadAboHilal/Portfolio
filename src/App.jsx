import { HashRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import GlowCursor from "./components/GlowCursor";

function App() {
  return (
    <HashRouter>
      <div className="font-sans min-h-screen bg-gradient-to-b from-[#0a0e18] to-[#020c1b] text-white flex">
        {/* Glow Cursor */}
        <GlowCursor />

        {/* Main Container */}
        <div
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full max-w-7xl mx-auto p-4 lg:p-8 h-full "
          id="main"
        >
          {/* Sidebar */}
          <aside className="w-full lg:w-5/12 h-full mt-8 lg:mt-0 lg:sticky lg:top-20 flex flex-col justify-between">
            <Sidebar />
            <Footer />
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-7/12 p-0 lg:p-8 lg:m-4 overflow-y-auto">
            <About />
            <div className="pt-12" id="experience">
              <Experience />
            </div>
            <div className="pt-12" id="education">
              <Education />
            </div>
            <div className="pt-12" id="skills">
              <Skills />
            </div>
            <div className="pt-12" id="projects">
              <Projects />
            </div>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
