import { motion } from "framer-motion"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import mov1 from "../features/portfolio/assets/Movies_App/mov1.png";
import mov2 from "../features/portfolio/assets/Movies_App/mov2.png"
import mov3 from "../features/portfolio/assets/Movies_App/mov3.png"
import mov4 from "../features/portfolio/assets/Movies_App/mov4.png"
import carSelling1 from '../features/portfolio/assets/car_selling/carSelling1.png'
import carSelling2 from '../features/portfolio/assets/car_selling/carSelling2.png'
import carSelling3 from '../features/portfolio/assets/car_selling/carSelling3.png'
import carSelling4 from '../features/portfolio/assets/car_selling/carSelling4.png'
import country1 from '../features/portfolio/assets/countires/country1.png'
import country2 from '../features/portfolio/assets/countires/country2.png'
import country3 from '../features/portfolio/assets/countires/country3.png'
import country4 from '../features/portfolio/assets/countires/country4.png'
import fitflex1 from '../features/portfolio/assets/fitflex_gym/fit1.png'
import fitflex2 from '../features/portfolio/assets/fitflex_gym/fit2.png'
import fitflex3 from '../features/portfolio/assets/fitflex_gym/fit3.png'
import fitflex4 from '../features/portfolio/assets/fitflex_gym/fit4.png'
import linked1 from "../features/portfolio/assets/linkedIn/link1.png"
import linked2 from "../features/portfolio/assets/linkedIn/link2.png"
import linked3 from "../features/portfolio/assets/linkedIn/link3.png"
import linked4 from "../features/portfolio/assets/linkedIn/link4.png"
import liv1 from "../features/portfolio/assets/livin_furniture/liv1.png"
import liv2 from "../features/portfolio/assets/livin_furniture/liv2.png"
import liv3 from "../features/portfolio/assets/livin_furniture/liv3.png"
import liv4 from "../features/portfolio/assets/livin_furniture/liv4.png"
import honey1 from '../features/portfolio/assets/mellifera/honey1.png'
import honey2 from '../features/portfolio/assets/mellifera/honey2.png'
import honey3 from '../features/portfolio/assets/mellifera/honey3.png'
import honey4 from '../features/portfolio/assets/mellifera/honey4.png'
import xo1 from '../features/portfolio/assets/xo_game/xo1.png'
import xo2 from '../features/portfolio/assets/xo_game/xo2.png'
import xo3 from '../features/portfolio/assets/xo_game/xo3.png'
import xo4 from '../features/portfolio/assets/xo_game/xo4.png'
import { useCont } from "../context/PortfolioContext"
import Project from "../features/portfolio/components/Project"
import SkillsIcons from "../features/portfolio/components/SkillsIcons"
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

  
  
  // useEffect(() => { 

  //   for(let i = 0  ; i <= 7;  i++) { 
  //     let link = document.getElementById(`previewSite${i + 1}`);
  //     link!.style.backgroundColor =`${projectsData[i].colorCode}` ;
  //   }
  // }, [])
  
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