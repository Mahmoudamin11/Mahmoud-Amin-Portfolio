import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCont } from "../context/PortfolioContext";
import Project from "../features/portfolio/components/Project";
import SkillsIcons from "../features/portfolio/components/SkillsIcons";
import { projectsData } from "../features/portfolio/data/projectData";

const Portfolio = () => {
  const loc = useLocation();
  const {theme} = useCont();
  
  const {getThemeChangerState, toggleThemeChangerState} = useCont();
  
  useEffect(() => {
    window.scrollTo(0,0);
    if (getThemeChangerState() == 1) { 
      toggleThemeChangerState();
    }
  }, [loc.pathname]);  
  
  return (
    <motion.div 
        initial={{opacity: 0, translateY:"20px", transitionDuration:"150ms"}}
        animate={{opacity:1, translateY: "0px"}}
        exit={{opacity:1, translateY: "0px"}}
        className="flex flex-col  width mx-auto">
      
      <h1 className={`relative mt-16 ${theme == 9 ? "title-font-lobster" : "title-font"} text-center text-[110px] max-[500px]:text-[75px] font-bold text-rare-color `}>
        Portfolio
      </h1>

      <SkillsIcons />
      
      {/* Projects */}
      <div className="flex flex-col  w-full mt-5 items-center">
        
        {/* Portfolio Projects */}
        { 
          projectsData.map((project) => <Project key={project?.id} project={project} theme={theme} /> )
        }
      </div>
    </motion.div>
  )
}

export default Portfolio