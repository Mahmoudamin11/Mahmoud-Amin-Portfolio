import { ProjectType } from "../portfolioTypes";
import movies from "../assets/Movies_App.png";
import linkedIn from "../assets/link3.png";
import livin from "../assets/livin.png";
import mellifera from "../assets/Mellifera.png";
import fitFlex from "../assets/GYM.png";
import rideIt from "../assets/Car Selling.png";
import xo from "../assets/xo.png";
import styleClub from "../assets/Style Club.png";


// const {theme} = useCont();
export const projectsData : ProjectType[] = [
    {id:Number(crypto.randomUUID()), title:"Full-Stack Style Club Fashion Website", txt:"Fashion Website where users can add products to favorites, add to cart and check out with full authentication. The website has full admin dashboard to control everything in the website.", img: styleClub,  date : "10 / 5 / 2025", link:"https://style-club-fashion.vercel.app/", colorCode: "#C1C1C1"},
    {id:Number(crypto.randomUUID()), title:"Full-Stack Movies Finder APP", txt:"Full-stack movies finder app, using Firebase for as database, authentication, Redux tool-kit for state management", img: movies,  date : "7 / 9 / 2024", link:"https://movies-website-six-swart.vercel.app/", colorCode: "#134B70"},
    {id:Number(crypto.randomUUID()), title:"Full-Stack LikedIn Clone", txt:"Full-stack LinkedIn clone, using Firebase for as database, authentication, signing in with Google & Using Redux for storing the posts of the user.", img: linkedIn,  date : "15 / 7 / 2024", link:"https://linkedin-clone-1fcc0.web.app/", colorCode: "#0077b5"},
    {id:Number(crypto.randomUUID()), title:"Livin Furniture Store", txt:"Livin Furniture is a website for selling a lot of furniture types online.", img:livin,  date : "7 / 4 / 2024", link:"https://66124ca49678090008f41605--bright-muffin-273ec2.netlify.app/", colorCode: "#8FB77C"},
    {id:Number(crypto.randomUUID()), title:"Mellifera Honey", txt:"A responsive landing page showing why Mellifera honey company is the best in the market.", img:mellifera,  date : "20 / 1 / 2023 ", link:"https://mahmoudamin11.github.io/Mellifera/", colorCode: "#D3A863"},
    {id:Number(crypto.randomUUID()), title:"FitFlex GYM", txt:"A responsive landing page for  the features provided by the worldwide FitFlex GYM.", img:fitFlex,  date : "7 / 1 / 2024", link:"https://mahmoudamin11.github.io/FitFlex-GYM/", colorCode: "#F46C38"},
    {id:Number(crypto.randomUUID()), title:"Ride it Showroom", txt:"An online showroom website to explore the big world of cars easily.", img:rideIt,  date : "23 / 12 / 2023", link:"https://mahmoudamin11.github.io/Car_Selling/", colorCode: "#005CE5"},
    {id:Number(crypto.randomUUID()), title:"Advanced XO Game", txt:"Advanced XO game, with unbeatable computer and 2 players feature.", img:xo,  date : "20 / 10 / 2023", link:"https://mahmoudamin11.github.io/Advanced-XO-Game/", colorCode: "#2C343F"},
];