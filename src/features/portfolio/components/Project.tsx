
import { AsyncImage } from "loadable-image"
import { memo} from "react"
import { ProjectType } from "../portfolioTypes"
import CustomSkeleton from "../../../utilities/CustomSkeleton"

const Project = memo(({project , theme} : {project : ProjectType , theme : number} ) => {
    return (
        <div key={`projectDiv${project.id}`} className={`flex  max-[1288px]:flex-col max-[1288px]:items-center max-[1288px]:gap-8 gap-20   trans space-up `}>
            
            {/* Project Main Image */}
            <div className="relative overflow-hidden rounded-md max-[700px]:h-[250px] max-[500px]:h-[200px] h-[300px] group flex flex-col  w-[600px] max-[700px]:w-full">
                <div className={`translate-x-0  top-0 left-0 trans absolute  max-[700px]:h-[250px] max-[500px]:h-[200px] h-[300px] w-full `}>
                    <AsyncImage
                        src={project.img}
                        style={{ width: "100%", height: "100%", objectFit : "contain", borderRadius: "5px"} }
                        loader={<CustomSkeleton width={`100%`} height={`100%`} />}
                    />
                </div>        
            </div>
            
            {/* info */}
            <div className=" flex flex-col min-[1288px]:max-w-[550px] max-[1288px]:gap-5 gap-10 justify-center max-[1288px]:items-center">
                <h1 className="text-4xl max-[485px]:text-3xl font-bold text-rare-color">{project.title}</h1>
                <p className="max-[1288px]:text-center text-text-color text-lg font-light">{project.txt}</p>
                <div  className="flex w-full justify-between items-center">
                    <a style={{backgroundColor: `${project.colorCode}`}}  href={project.link} target="_blank" className={`${theme == 9 ? "hover:cursor-lobsterHover cursor-lobster" : "hover:cursor-pointer"} trans hover:opacity-80 max-[700px]:text-sm max-[700px]:px-3 max-[700px]:py-2 font-bold text-white  px-5 py-3 rounded-md trans  `}>Preview Website</a>
                    <span  className=" font-light text-third-color text-lg">{project.date}</span>
                </div>
            </div>
        </div>
    )
})

export default Project