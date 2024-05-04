import livin from "../assets/livin.png";
import fitFlex from "../assets/fitFlex.jpg";
import cars from "../assets/carselling.jpg";
import honey from "../assets/Honey.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCont } from "../context/PortfolioContext";
const LatestProjects = () => {
    const {getCurrTheme} = useCont()
    const projects = [
        {img:livin , title:"Livin Furniture Store", id:1},
        {img:fitFlex , title:"FitFlex Muscle GYM", id:2},
        {img:honey , title:"Mellifera Honey", id:3},
        {img:cars , title:"Ride it showroom", id:4},
        // {img:xo , title:"Advanced XO Game", id:"5"},
    ]
    
    const scrollProject = (id:number, enter:boolean) => { 
        let img = document.getElementById(`${id}`);
        if (enter)
            img!.style.transform = `translate(0, calc(-100% + 320px))`;
        else
            img!.style.transform = `translate(0,0)`;
    }

    const goToProject = (id:number) => { 
        
        setTimeout(() => { 
            document.getElementById(`projectDiv${id}`)?.scrollIntoView();
        }, 1000)
    }
  return (
    <div className='flex flex-col space-up width mb-24'>
        <h1 className={`${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-4xl text-rare-color`}>Latest Projects</h1>
        {/* Projects */}
        <div className="grid grid-cols-4 max-[690px]:grid-cols-1 max-[1400px]:grid-cols-3 max-[1040px]:grid-cols-2 gap-y-20 mt-10 place-items-center">
            
            { 
                projects.map((p, index) => (
                    <div  key={p.id} className="flex trans flex-col items-center justify-center gap-5   ">
                        
                        <Link to='/portfolio' onClick={() => goToProject(p.id)} onMouseEnter={() => scrollProject(p.id, true)} onMouseLeave={() => scrollProject(p.id, false)}   
                            className={` font-bold text-2xl titleLinks  ${index == 0 ?  "after:bg-[#8FB77C]" : index == 1 ? "after:bg-[#F46C38]" : index == 2 ? "after:bg-[#D3A863]" : index == 3 ? "after:bg-[#005CE5]"  :  "after:bg-sec-color"} after:trans before:trans  text-rare-color trans  ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"}  `}>
                            {p.title}
                        </Link>
                        <div  className="group bg-fourth-color  relative w-64 h-80 overflow-hidden   ">
                            <img id={`${p.id}`} key={p.id} src={p.img} alt="" className={`  duration-[1000ms] translate-0  transition-all `} />
                        </div>
                    </div>
                ))
            }
        </div>
        <Link to="/portfolio" className={`group  mt-8 ml-auto flex gap-3 items-center ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-xl max-[500px]:text-[16px] text-sec-color font-bold`}>
            <p>See All Projects</p>
            <FontAwesomeIcon icon={faArrowRight} className=" text-2xl max-[500px]:text-lg mt-[4px] trans group-hover:translate-x-2" />
        </Link>
    </div>
  )
}

export default LatestProjects;