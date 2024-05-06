import { Link } from "react-router-dom"
import { useCont } from "../context/PortfolioContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Menu = () => {
    const {getOpenedPage, getCurrTheme, openMenu} = useCont();
    const [rotate, setrotate] = useState(false);
    useEffect(() => { 
        if (!rotate)
            setrotate(true);
        else 
            setrotate(false);
    }, [])
  return (
    <div className={`flex  transition-bgColor trans  flex-col justify-center gap-10 w-full h-full fixed top-0 left-0 z-50 py-20 px-28 max-[500px]:px-20 bg-black`}>
        <Link onClick={() => openMenu()} to="/" className={`linkMenu   py-4  ${getOpenedPage() == "home" ? "active" : ""}  flex items-center ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"}  gap-2 items-center`}>
            <span className='font-light text-rare-color'>01</span>
            <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>home</span>
        </Link>

        <Link onClick={() => openMenu()} to="/portfolio" className={`linkMenu   py-4 ${getOpenedPage() == "portfolio" ? "active" : ""}   flex items-center ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
            <span className='font-light text-rare-color'>02</span>
            <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>portfolio</span>
        </Link>

        <Link onClick={() => openMenu()} to="/about" className={`linkMenu   py-4 ${getOpenedPage() == "about" ? "active" : ""}   flex items-center ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
            <span className='font-light text-rare-color'>03</span>
            <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>about</span>
        </Link>

        <button onClick={() => openMenu()} className="group">
            <FontAwesomeIcon  icon={faXmark} className={`group-hover:text-main-background text-rare-color ${rotate  ? "rotate-[360deg]"  : ""} trans ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-3xl absolute top-14 right-10 max-[500px]:right-8`} />
        </button>
    </div>
  )
}

export default Menu