import { AsyncImage } from "loadable-image";
import { memo, useEffect, useState } from "react";
import me from "../assets/me 2.jpg"
import { useCont } from "../context/PortfolioContext"
import {motion} from "framer-motion"
import { useLocation } from "react-router-dom";
import CustomSkeleton from "../utilities/CustomSkeleton";
import PictureAndCareer from "../features/about/components/PictureAndCareer";
const About = memo(() => {
  const loc = useLocation();
  const {getThemeChangerState, toggleThemeChangerState, theme} = useCont();
  useEffect(() => {
    if (getThemeChangerState() == 1) { 
      toggleThemeChangerState();
    }
  }, [loc.pathname]);
  const date = new Date();
  const [age] = useState(date.getFullYear() - 2003);
  return (
    <motion.div 
    initial={{opacity: 0, translateY:"20px", transitionDuration:"150ms"}}
        animate={{opacity:1, translateY: "0px"}}
        exit={{opacity:1, translateY: "0px"}}
    className="overflow-y-hidden">
      <h1 className={`relative ${theme == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color text-center mt-16 font-bold`}>
        Hey <span className="max-[500px]:hidden font-bold relative">there.</span>
        
      </h1>
      <h1 className={`relative min-[500px]:hidden ${theme == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color text-center -mt-10 font-bold`}>
        there.
      </h1>
      
      <div className="flex flex-col gap-20 ">
        
        <PictureAndCareer />

        <div className="width min-[850px]:mt-8">
          <h2 className={`${theme == 9  ? "title-font-lobster" : "title-font"} text-5xl text-rare-color  font-bold mb-6 max-[850px]:text-center`}>Why do i love coding?</h2>
          <div className="pl-14  max-[850px]:text-center max-[850px]:pl-0 ">
              <div className="flex items-center max-[850px]:items-start gap-4 ">
                <span className="w-2 h-2 rounded-full bg-rare-color max-[850px]:hidden"></span>
                <p className="text-text-color text-2xl max-[850px]:text-center font-light">I feel happy when i accomplish a task that was assigned to me.</p>
              </div>
              <div className="flex items-center gap-4 ">
                <span className="w-2 h-2 rounded-full bg-rare-color max-[850px]:hidden"></span>
                <p className="text-text-color text-2xl max-[850px]:text-center font-light">I love working in a team and collaborate with them to do great work!  </p>
              </div>
          </div>
        </div>

        <div className="width  ml-0">
          <h2 className={`${theme == 9  ? "title-font-lobster" : "title-font"} text-5xl text-rare-color  font-bold mb-6 max-[850px]:text-center`}>What do i do offline?</h2>
          <div className="pl-14  max-[850px]:text-center max-[850px]:pl-0 ">
              <div className="flex gap-2 ">
                <p className="text-text-color text-2xl max-[850px]:text-center font-light">I travel, go out with my friends, exercise everyday, play football often, read books and try to increase my knowledge and experience in my offline life without coding.</p>
              </div>
          </div>
        </div>

      </div>
      
    </motion.div>
  )
})

export default About