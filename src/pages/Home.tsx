import MainSection from '../features/home/mainSection/MainSection'
import LatestProjects from '../features/home/latestProjects/LatestProjects'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { memo, useEffect } from 'react'
import { useCont } from '../context/PortfolioContext'

const Home = memo(() => {
  const loc = useLocation() ; 
  const {getThemeChangerState, toggleThemeChangerState} = useCont();

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
        className={``}
    >
        <MainSection />
        <LatestProjects/>
        
    </motion.div>
  )
})

export default Home