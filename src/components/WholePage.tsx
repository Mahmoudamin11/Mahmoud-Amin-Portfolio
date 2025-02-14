import Navbar from './Navbar';
import { useCont } from '../context/PortfolioContext';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const WholePage = (() => {
  const { getThemeChangerState, theme, menuOpen } = useCont();
  const loc = useLocation();
  return (
    <div className={`relative ${menuOpen ? "max-h-[80vh] overflow-hidden" : ""}  ${theme == 8 ? "bg-rainbow" : "bg-main-background"} ${theme == 9 ? "cursor-lobster" : ""} z-20 w-full min-h-[100vh] overflow-x-hidden ${getThemeChangerState() == 1 ? "mt-44" : "mt-0"} trans `}>
      <Navbar />
      <AnimatePresence>
          <Routes location={loc} key={loc.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {menuOpen && <Menu />}
      </AnimatePresence>
      <Footer />
    </div>
  );
});