import './App.css';
import About from './components/About';
import Faqs from './components/Faqs';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Lore />
        <About />
        <Roadmap />
        <Faqs />
      </div>
    </>
  );
}

export default App;
