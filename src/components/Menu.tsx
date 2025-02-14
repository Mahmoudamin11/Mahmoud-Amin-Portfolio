import { Link } from "react-router-dom"
import { useCont } from "../context/PortfolioContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { memo, useEffect, useState } from "react";


const Menu = memo(() => {
    const {openedPage, theme, openMenu} = useCont();
    const [rotate, setRotate] = useState(false);
    useEffect(() => { 
        if (!rotate)
            setRotate(true);
        else 
            setRotate(false);
    }, [])
    return (
        <div className={`flex  transition-bgColor trans  flex-col justify-center gap-10 w-full h-[100vh] fixed top-0 left-0 z-50 py-20 px-28 max-[500px]:px-20 bg-black`}>
            <Link onClick={() => openMenu()} to="/" className={`linkMenu   py-4  ${openedPage == "home" ? "active" : ""}  flex items-center ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"}  gap-2 items-center`}>
                <span className='font-light text-rare-color'>01</span>
                <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>home</span>
            </Link>

            <Link onClick={() => openMenu()} to="/portfolio" className={`linkMenu   py-4 ${openedPage == "portfolio" ? "active" : ""}   flex items-center ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
                <span className='font-light text-rare-color'>02</span>
                <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>portfolio</span>
            </Link>

            <Link onClick={() => openMenu()} to="/about" className={`linkMenu   py-4 ${openedPage == "about" ? "active" : ""}   flex items-center ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
                <span className='font-light text-rare-color'>03</span>
                <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>about</span>
            </Link>
            <Link onClick={() => openMenu()} to="/contact" className={`linkMenu   py-4 ${openedPage == "contact" ? "active" : ""}   flex items-center ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-sm gap-2 items-center`}>
                <span className='font-light text-rare-color'>04</span>
                <span className='uppercase text-main-text-color font-bold max-[500px]:text-3xl text-4xl text-text-color'>contact</span>
            </Link>

            <button onClick={() => openMenu()} className="group">
                <FontAwesomeIcon  icon={faXmark} className={`group-hover:text-main-background text-rare-color ${rotate  ? "rotate-[360deg]"  : ""} trans ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-3xl absolute top-14 right-10 max-[500px]:right-8`} />
            </button>
        </div>
    )
})

export default Menu