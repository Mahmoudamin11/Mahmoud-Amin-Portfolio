import { Link } from "react-router-dom"
import { useCont } from "../context/PortfolioContext"

import MovingBalls from "../utilities/MovingBalls";

const MainSection = () => {
  const {getCurrTheme} = useCont();
  return (
    <div className='relative flex flex-col width space-up'>
      {getCurrTheme() != 8 && <MovingBalls />}
      <Link to="/about" className={`z-20 text-sec-color uppercase font-semibold text-xl ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} z-10 w-fit trans hover:opacity-90`}>Hello, My name is Mahmoud</Link>
      <h1 className={`z-20  font-bold ${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-rare-color text-[110px] max-[500px]:text-[90px] -mt-4 max-[500px]:mt-0 z-0`}>
        I build <span className="max-[500px]:hidden">websites.</span></h1>
        <h1 className={`z-20 max-[500px]:block hidden font-bold ${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-rare-color text-[110px] max-[500px]:text-[90px] -mt-10 z-0`}>websites.</h1>
      <p className="z-20 text-3xl max-[535px]:text-xl text-text-color mt-5 ">
        I'm a front end web developer and designer based in Cairo, Egypt.
      </p>
      
      <div className="flex z-20 overflow-hidden  gap-2">
        <p className="text-3xl max-[535px]:text-xl relative text-text-color mt-4">
          I also build user friendly
        </p>
        
        <Link to="/portfolio" className={`relative font-semibold text-3xl max-[535px]:text-xl mt-3 before:absolute    before:bottom-0 before:-left-0 before:w-full  before:h-[12px] before:-z-10   before:bg-fourth-color   before:transition-all before:duration-[400ms]  after:absolute     after:bottom-0 after:-left-1 hover:after:left-0 after:w-full  after:h-[12px] after:-z-10 z-10  overflow-x-hidden after:-translate-x-full hover:after:translate-x-0 after:transition-all after:duration-[400ms]  after:bg-sec-color   text-rare-color ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} max-sm:before:h-[8px] max-sm:after:h-[8px]`}>projects</Link>
        <p className="text-3xl max-[880px]:hidden relative text-text-color mt-4">with modern designs.</p>
        
        
      </div>
        <p className=" min-[880px]:hidden max-[535px]:text-xl text-3xl  relative text-text-color mt-4">with modern designs.</p>
      
    </div>
  )
}

export default MainSection