import About from "./components/About"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  return (
    <div> 
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
