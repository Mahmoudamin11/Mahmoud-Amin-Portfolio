import me from '../assets/me3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCont } from '../context/PortfolioContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  

  const {toggleThemeChangerState, getOpenedPage, getCurrTheme, openMenu, toggleMark, menuOpen} = useCont();
  
  
  return (
    <div className=' flex justify-between text-rare-color width py-12 '>
        {/* img and name  */}
        <div className={`group flex items-center gap-3 ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"}`}>
            {/* Try to get an img that only showing the face*/}
            <img src={me} alt="Mhamoud Amin" className='rounded-full w-12 h-12 border-2 border-main-text-color ' />
            <p className='flex gap-1 items-center'>
                <Link to="/home" className={` group-hover:text-sec-color ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} trans font-bold max-[500px]:text-sm`}>Mahmoud Amin</Link>
                <span>
                    {/* Icon if correct  */}
                    <FontAwesomeIcon icon={faCircleCheck} className={`${ getCurrTheme() == 8 ? "animate-rainbowAnimateColors" : "text-third-color"}`} />
                </span>
            </p>
        </div>

        {/* <FontAwesomeIcon icon={faXmark} className="text-rare-color text-2xl font-light" /> */}
        <ul className='flex gap-12 items-center max-[800px]:hidden'>
            <Link to="/home" className={`link py-4  ${getOpenedPage() == "home" ? "active" : ""} flex ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"}  gap-2 items-center`}>
              <span className='font-bold text-[16px]'>01</span>
              <span className=' text-main-text-color font-bold text-[16px]'>home</span>
            </Link>
            <Link to="/portfolio" className={`link py-4 ${getOpenedPage() == "portfolio" ? "active" : ""}   flex ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
              <span className='font-bold text-[16px]'>02</span>
              <span className=' text-main-text-color font-bold text-[16px]'>portfolio</span>
            </Link>
            <Link to="/about" className={`link py-4 ${getOpenedPage() == "about" ? "active" : ""}   flex ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
              <span className='font-bold text-[16px]'>03</span>
              <span className=' text-main-text-color font-bold text-[16px]'>about</span>
            </Link>
            {/* Theme Changer */}
            <button onClick={() => toggleThemeChangerState()} className={`group bg-fourth-color w-14 h-14 rounded-full ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} flex items-center justify-center `}>
              <FontAwesomeIcon icon={faPaintRoller} className='text-xl group-hover:text-sec-color trans' />
            </button>
        </ul>

        <ul className={`flex gap-6 max-[500px]:gap-4 items-center min-[800px]:hidden`}>
          {/* Theme Changer */}
          <button onClick={() => toggleThemeChangerState()} className={`group bg-fourth-color w-11 h-11 rounded-full ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} flex items-center justify-center `}>
              <FontAwesomeIcon icon={faPaintRoller} className=' group-hover:text-sec-color trans' />
          </button>
          <button onClick={() => {openMenu()}}  className={`group bg-fourth-color w-11 h-11 rounded-full ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} flex items-center justify-center `}>
              {toggleMark == false && <FontAwesomeIcon  icon={faBars} className={`text-xl trans ${menuOpen == true ? " rotate-[360deg]" : "rotate-0"} group-hover:text-sec-color trans`} />}
              {toggleMark == true  && <FontAwesomeIcon  icon={faXmark} className={`text-2xl ${menuOpen == false ? " rotate-[-360deg]" : "rotate-0"} trans  group-hover:text-sec-color trans`} />}
          </button>
        </ul>
    </div>
  )
};

export default Navbar ;