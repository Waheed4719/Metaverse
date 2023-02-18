import { useContext } from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { DisplayModeContext } from '../contexts/DisplayModeContext';

const Home = () => {
  const { isDarkMode } = useContext(DisplayModeContext);
  console.log(isDarkMode, `${isDarkMode ? 'gradient-04-dark' : 'gradient-04'}`);
  return (

    <div className="dark:bg-primary-black bg-primary-pink overflow-hidden transition-bg duration-1000 ease-in-out">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className={`${isDarkMode ? 'gradient-03-dark' : 'gradient-03'}  z-0`} />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className={`${isDarkMode ? 'gradient-04-dark' : 'gradient-04'}  z-0`} />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className={`${isDarkMode ? 'gradient-04-dark' : 'gradient-04'}  z-0`} />
        <Feedback />
      </div>
      <Footer />
    </div>

  );
};

export default Home;
