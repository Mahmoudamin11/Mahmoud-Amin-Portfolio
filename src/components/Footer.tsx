import { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useCont } from "../context/PortfolioContext";

const Footer = memo(() => {
    const date = new Date();
    const [year] = useState(date.getFullYear());
    // const {getCurrTheme} = useCont();
    const {theme} = useCont();

  return (
    <div className=" border-t-[1px] border-fourth-color space-up p-8 max-[550px]:py-5 max-[550px]:px-2 w-full">
        <div className=" width text-white flex max-[520px]:flex-col max-[550px]:gap-5 justify-between items-center">
            <p className=" text-text-color">&copy;{year}</p>
            <p className=" text-text-color max-sm:text-sm trans font-bold">Mahmoud Mohamed Amin</p>
            <div className="flex gap-4">
                <a href="https://github.com/Mahmoudamin11" target="_blank" className={` text-2xl ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} trans hover:scale-105 text-text-color hover:text-sec-color`}>
                    <FontAwesomeIcon icon={faGithub}  />
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" 
                className={` text-2xl ${theme == 9 ? "cursor-lobsterHover" : "cursor-pointer"} trans hover:scale-105 text-text-color hover:text-sec-color`}>
                    <FontAwesomeIcon icon={faLinkedin}  />
                </a>
            </div>
        </div>
    </div>
  )
})

export default Footer;