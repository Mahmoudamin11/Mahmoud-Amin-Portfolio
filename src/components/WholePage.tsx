import Navbar from './Navbar';
import { useCont } from '../context/PortfolioContext';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import React, { memo, Suspense } from 'react';
import Loader from '../utils/Loader';
const Home = React.lazy(() => import('../pages/Home') )
const Portfolio = React.lazy(() => import('../pages/Portfolio') )
const About = React.lazy(() => import('../pages/About') )
const Contact = React.lazy(() => import('../pages/Contact') )
export const WholePage = memo(() => {
  const { getThemeChangerState, getCurrTheme, menuOpen } = useCont();
  const loc = useLocation();




  return (
    <div className={`relative ${menuOpen ? "max-h-[80vh] overflow-hidden" : ""}  ${getCurrTheme() == 8 ? "bg-rainbow" : "bg-main-background"} ${getCurrTheme() == 9 ? "cursor-lobster" : ""} z-20 w-full min-h-[100vh] overflow-x-hidden ${getThemeChangerState() == 1 ? "mt-44" : "mt-0"} trans `}>
      <Navbar />
      <AnimatePresence>
        <Suspense fallback={<div className={`w-full h-screen flex items-center justify-center`}>
          <Loader />
        </div>}>
          <Routes location={loc} key={loc.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        {menuOpen && <Menu />}
      </AnimatePresence>
      <Footer />
    </div>
  );
});