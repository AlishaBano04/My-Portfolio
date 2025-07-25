import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx"; // if added
import Contact from "./sections/Contact.jsx"; // if added
import Footer from "./components/Footer.jsx";
import "./index.css";
import Achievements from "./components/Achievements.jsx";

function App() {
  return (
    <div className="bg-light text-black dark:bg-black dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
