import { AsyncImage } from "loadable-image"
import CustomSkeleton from "../../../utilities/CustomSkeleton"
import me from "../assets/me 2.jpg"
const PictureAndCareer = () => {
    return (
        <div className="flex justify-between max-[850px]:flex-col max-[850px]:gap-12  width mt-20">
        
            <div className=" -translate-x-[15%] -translate-y-[10%] rounded-md w-[800px] max-[850px]:hidden ">
                    <AsyncImage
                        draggable={false}
                        src={me}
                        style={{ width: "100%", height: "120%", borderRadius: "5px"}}
                        loader={<CustomSkeleton width={'100%'} height={'120%'} />}
                    />
                </div>
            <div 
            
            className="min-[850px]:hidden w-[500px] mx-auto translate-x-0 max-[450px]:w-[320px] max-[570px]:w-[400px] max-[500px]:h-[250px] max-[850px]:h-[350px] ">
            <AsyncImage
                draggable={false}
                src={me}
                style={{ width: "100%", height: "100%", borderRadius: "5px"}}
                loader={<CustomSkeleton width={'100%'} height={'100%'} />}
            />
            </div>
            
            
            {/* For text */}
            <div className="flex flex-col justify-center items-center  max-[970px]:text-xl text-2xl text-text-color">
                <p className=" leading-[1.5] font-light max-[850px]:text-2xl max-[850px]:text-center">I'm <span className=" text-rare-color">Mahmoud Amin</span> a {21}-year-old front-end web developer and designer.</p>
                <p className="leading-[1.5] mt-8 font-light max-[850px]:text-2xl max-[850px]:text-center">I'm a computer & information science student at Ain Shams University based in Cairo, Egypt.</p>
                <p className="leading-[1.5] mt-8 font-light max-[850px]:text-2xl max-[850px]:text-center">I have been building websites for more than one year and i really enjoy doing that.</p>
            </div>
        </div>
    )
}

export default PictureAndCareer