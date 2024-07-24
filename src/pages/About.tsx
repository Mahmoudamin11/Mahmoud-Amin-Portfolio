import { AsyncImage } from "loadable-image";
import { memo, useEffect } from "react";
import me from "../assets/me 2.jpg"
import { useCont } from "../context/PortfolioContext"
import {motion} from "framer-motion"
import { useLocation } from "react-router-dom";
const About = memo(() => {
  const loc = useLocation();
  const {getThemeChangerState, toggleThemeChangerState, getCurrTheme} = useCont();
  useEffect(() => {
    if (getThemeChangerState() == 1) { 
      toggleThemeChangerState();
    }
  }, [loc.pathname])
  return (
    <motion.div 
    initial={{opacity: 0, translateY:"20px", transitionDuration:"150ms"}}
        animate={{opacity:1, translateY: "0px"}}
        exit={{opacity:1, translateY: "0px"}}
    className="overflow-y-hidden">
      <h1 className={`relative ${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color text-center mt-16 font-bold`}>
        Hey <span className="max-[500px]:hidden font-bold relative">there.</span>
        
      </h1>
      <h1 className={`relative min-[500px]:hidden S${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color text-center -mt-10 font-bold`}>
        there.
      </h1>
      {/* grid grid-cols-[40%_55%] */}
      <div className="flex justify-between max-[850px]:flex-col max-[850px]:gap-12  width mt-20">
        <div 
        
        className=" -translate-x-[15%]   w-[800px] max-[850px]:hidden ">
          <AsyncImage
            
            src={me}
            style={{ width: "100%", height: "120%"}}
            loader={<div style={{ background: '#888' }} />}
          />
          {/* <img src={me} alt="" className="  w-full h-full" /> */}
        </div>

        <div 
        
        className="min-[850px]:hidden w-[500px] mx-auto translate-x-0 max-[450px]:w-[320px] max-[570px]:w-[400px] max-[500px]:h-[250px] max-[850px]:h-[350px] ">
          {/* <img src={me} alt="" className="  w-full h-full" /> */}
          <AsyncImage
            src={me}
            style={{ width: "100%", height: "100%"}}
            loader={<div style={{ background: '#888' }} />}
          />
        </div>
        
        
        {/* For text */}
        <div className="flex flex-col justify-center items-center  max-[970px]:text-xl text-2xl text-text-color">
            <p className=" leading-[1.5] font-light max-[850px]:text-2xl max-[850px]:text-center">I'm <span className=" text-rare-color">Mahmoud Amin</span> a 20-year-old front-end web developer and designer.</p>
            <p className="leading-[1.5] mt-8 font-light max-[850px]:text-2xl max-[850px]:text-center">I'm a computer & information science student at Ain Shams University based in Cairo, Egypt.</p>
            <p className="leading-[1.5] mt-8 font-light max-[850px]:text-2xl max-[850px]:text-center">I have been building websites for more than one year and i really enjoy doing that.</p>
        </div>
      </div>

      <div className="width space-up mb-10">
        <h2 className={`${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-5xl text-rare-color  font-bold mb-6 max-[850px]:text-center`}>Why do i love coding?</h2>
        <div className="flex flex-col gap-3 max-[850px]:gap-6 width  ">
            
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

      <div className="width space-up mb-10  ml-0">
        <h2 className={`${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-5xl text-rare-color  font-bold mb-6 max-[850px]:text-center`}>What do i do offline?</h2>
        <div className="pl-14  max-[850px]:text-center max-[850px]:pl-0 ">
            <div className="flex gap-2 ">
              <p className="text-text-color text-2xl max-[850px]:text-center font-light">I travel, go out with my friends, exercise everyday, play football often, read books and try to increase my knowledge and experience in my offline life without coding.</p>
            </div>
        </div>
      </div>


    </motion.div>
  )
})

export default About