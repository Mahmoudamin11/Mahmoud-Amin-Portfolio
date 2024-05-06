import Navbar from './Navbar';
import { useCont } from '../context/PortfolioContext';
import Home from '../pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Footer from './Footer';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
export const WholePage = () => {
  const { getThemeChangerState, getCurrTheme , menuOpen} = useCont();
  const loc = useLocation();
  
  return (
    <div className={`relative ${menuOpen ? "max-h-[100vh] overflow-hidden" : ""}  ${getCurrTheme() == 8 ? "bg-rainbow" : "bg-main-background"} ${getCurrTheme() == 9 ? "cursor-lobster" : ""} z-20 w-full min-h-[100vh] overflow-x-hidden ${getThemeChangerState() == 1 ? "mt-44" : "mt-0"} trans `}>
      <Navbar />
      
      <AnimatePresence>
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element = {<Home />} />
          <Route path="/portfolio" element = {<Portfolio />} />
          <Route path="/about" element = {<About />} />
        </Routes>
        {menuOpen && <Menu />}
      </AnimatePresence>
      <Footer />
    </div>
  );
};