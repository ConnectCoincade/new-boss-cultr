import React, {useState, useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Lore from '../lore/Lore';
import About from '../about/About';
import Roadmap from '../roadmap/Roadmap';
import Faqs from '../faq/Faqs';
import Footer from '../../container/Footer/Footer'
import AnimatedCursor from "react-animated-cursor";
import Loader from '../../container/Loader/Loader';
import '../home/home.css'
const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSkip = () => {
    setLoading(false);
    console.log("skipp");
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      // setLoading(false);
        handleSkip();
      }, 10000);
    }
  }, [loading]);
  return (
    <>
           <AnimatedCursor
        innerSize={14}
        outerSize={15}
        color="238, 78, 78"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      />
      {loading ? (
        <>
          <Loader />
          <div className="skippdiv">
            <button onClick={handleSkip}>Skip</button>
          </div>
        </>
      ) : (<>
        <Navbar />
        <Hero />
        <Lore />
        <About />
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdKpxcaq8GbvKrT_TLi5s4DTR4znzmR6SmQ&usqp=CAU'} />
        <Roadmap />
        <Faqs />
        <Footer/>
        </> )}
    </>
  )
}

export default Home