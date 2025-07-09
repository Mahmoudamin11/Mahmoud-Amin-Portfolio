import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useCont } from "../../../context/PortfolioContext";
import honey from "./assets/Honey.webp";
import livin from "./assets/livin.webp";
import movies from "./assets/movies.webp";
import styleClub from "./assets/styleClub.png";
import HomeProject from "./components/HomeProject";

const LatestProjects = memo(() => {
    const { theme } = useCont();

    const projects = [
        {img:styleClub , title:"Style Club Fashion", id:Number(crypto.randomUUID()), link:"https://style-club-fashion.vercel.app/"},
        {img:movies , title:"Movies Finder App", id:Number(crypto.randomUUID()), link:"https://movies-website-six-swart.vercel.app/"},
        {img:livin , title:"Livin Furniture Store", id:Number(crypto.randomUUID()), link:"https://66124ca49678090008f41605--bright-muffin-273ec2.netlify.app/"},
        {img:honey , title:"Mellifera Honey", id:Number(crypto.randomUUID()), link:"https://mahmoudamin11.github.io/Mellifera/"},
    ];
    return (
        <div className="flex flex-col space-up width mb-24">
            <h1 className={`${theme === 9 ? "title-font-lobster" : "title-font"} text-4xl text-rare-color`}>
                Latest Projects
            </h1>

            <div className="grid grid-cols-4 max-[690px]:grid-cols-1 max-[1400px]:grid-cols-3 max-[1040px]:grid-cols-2 gap-y-20 mt-10 place-items-center">
                {projects.map((p, index) => (
                    <HomeProject key={p.id} theme={theme} project={p} index={index} />
                ))}
            </div>

            <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className={`group mt-8 ml-auto flex gap-3 items-center ${theme === 9 ? "cursor-lobsterHover" : "cursor-pointer"} text-xl max-[500px]:text-[16px] text-sec-color font-bold`}>
                <p>See All Projects</p>
                <FontAwesomeIcon icon={faArrowRight} className="text-2xl max-[500px]:text-lg mt-[4px] trans group-hover:translate-x-2" />
            </Link>
        </div>
    );
});

export default LatestProjects;