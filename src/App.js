import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Beyond from "./sections/Beyond.jsx";
import "./index.css";
import Achievements from "./components/Achievements.jsx";

function App() {
  return (
    <div className="bg-light text-black dark:bg-black dark:text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Beyond />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
