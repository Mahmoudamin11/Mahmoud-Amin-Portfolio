import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useCont } from "../context/PortfolioContext";
const ThemesChanger = () => {
    const themes = [
        {id:1, name:"Classic"},
        {id:2, name:"Dark"},
        {id:3, name:"Koopa Beach"},
        {id:4, name:"Choco Mountain"},
        {id:5, name:"Moo Moo Farm"},
        {id:6, name:"Browser's Castle"},
        {id:7, name:"Yoshi Valley"},
        {id:8, name:"Rainbow Road"},
        {id:9, name:"Lobster Life"},
    ]
    const {toggleThemeChangerState, getThemeChangerState, changeTheme, getCurrTheme} = useCont();
    
  return (
    <div className={`bg-fourth-color w-full h-44  fixed top-0 left-0 z-10 px-2 py-3 flex flex-col justify-center items-center ${getThemeChangerState() == 1 ? " delay-75 mt-0" : "-mt-14"} trans`}>
        {/* x mark absolute tpo-0 left-full */}
        <div onClick={() => toggleThemeChangerState()} className={`absolute top-3 max-[420px]:left-[87%]  max-[520px]:left-[90%] max-[630px]:left-[92%] max-lg:left-[94%] left-[96%] w-10 h-10 rounded-full ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} trans bg-fourth-color hover:bg-main-background flex items-center justify-center`}>
            <FontAwesomeIcon icon={faXmark} className="text-rare-color text-2xl font-light" />
        </div>
        <p className=" text-rare-color font-bold w-full  text-center my-2 ">Select theme</p>
       
        <div className="w-full   max-[1530px]:overflow-y-clip max-[1530px]:overflow-x-scroll  scrollbar scrollbar-thumb-scrollbar-color scrollbar-track-transparent">
            {/* max-[500px]:w-[400%]    max-[500px]:justify-center max[500px]:gap-5*/}
            <div className={`themeQueryHandle w-full max-[500px]:h-28 h-24 flex justify-around  items-center  `}>
                {
                    themes.map((th) => (
                        <div  onClick={() =>changeTheme(th.id)} key={th.id} className={`theme-${th.id}  relative  ${getCurrTheme() == th.id ? "activeTheme" : ""} min-w-[140px]  h-[75px]  rounded-lg hover:scale-105 hover:shadow-xl ${th.id == 9  || getCurrTheme() == 9  ? "hover:cursor-lobsterHover" : "cursor-pointer"} ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} trans bg-main-background flex flex-col items-center justify-center gap-1`}>
                            <p className=" text-rare-color text-sm">{th.name}</p>
                            <div className="flex ">
                                <div className="w-7 h-7 rounded-full bg-sec-color border-2 border-zinc-100">
            
                                </div>
                                <div className="w-7 h-7 rounded-full bg-third-color -ml-2 border-2 border-zinc-100">
                                </div>
                                <div className="w-7 h-7 rounded-full bg-fourth-color -ml-2 border-2 border-zinc-100">
                                </div>
                                <div className="w-7 h-7 rounded-full bg-text-color -ml-2 border-2 border-zinc-100">
                                </div>
                                <div className="w-7 h-7 rounded-full bg-rare-color -ml-2 border-2 border-zinc-100">
                                </div>
                            </div>
                            {getCurrTheme() == th.id && <FontAwesomeIcon icon={faCaretUp} size="2xl" className=" absolute top-full mt-[12px] left-1/2 -translate-x-1/2 text-[40px]  text-sec-color" />}
            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ThemesChanger;
