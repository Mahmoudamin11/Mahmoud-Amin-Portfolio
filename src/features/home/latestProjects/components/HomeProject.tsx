import { memo } from "react"
import { Img } from "react-image";
import CustomSkeleton from "../../../../utilities/CustomSkeleton";
type HomePrject = { 
    theme: number;
    project : { 
        id: number,
        title: string,
        img:string,
        link: string,
    };
    index: number

}
const HomeProject = memo(({theme, project, index}:HomePrject) => {
    return (
        <a href={project.link} target="_blank" className={`flex trans flex-col items-center justify-center gap-5 ${theme === 9 ? "cursor-lobsterHover" : "cursor-pointer"}`}>
            <div
                className={`font-bold text-2xl titleLinks 
                    ${index === 1 ? "after:bg-[#8FB77C]" : index === 3 ? "after:bg-[#F46C38]" : index === 2 ? "after:bg-[#D3A863]" : "after:bg-[#508C9B]"} 
                    after:trans before:trans text-rare-color trans 
                    ${theme === 9 ? "cursor-lobsterHover" : "cursor-pointer"}`}>
                {project.title}
            </div>
            <div 
            className={`group bg-fourth-color relative w-64 h-80 overflow-scroll hide-scrollbar ${theme === 9 ? "cursor-lobsterHover" : "cursor-pointer"}`}>
                <Img
                    src={project.img}
                    alt={project.title}
                    loader={<CustomSkeleton width={"100%"} height={"100%"} />}
                    className="duration-[1000ms] transition-all transform"
                />
            </div>
        </a>
    )
})

export default HomeProject