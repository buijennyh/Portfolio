import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div> 
      <h1 className="text-2xl font-bold bg-[#FFF468]"> portfolio website </h1>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
