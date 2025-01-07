import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
