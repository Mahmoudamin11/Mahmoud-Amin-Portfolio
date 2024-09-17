import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useCont } from '../context/PortfolioContext';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import confetti from "../assets/confetti.json";

const Contact = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('') 
    const [isExploding, setIsExploding] = useState(false) 
    const [displayedWord, setDisplayedWord] = useState('Send Message')
    const loc = useLocation();
    const {getThemeChangerState, toggleThemeChangerState, getCurrTheme} = useCont();
    useEffect(() => {
        if (getThemeChangerState() == 1) { 
        toggleThemeChangerState();
        }
    }, [loc.pathname])
    
    // Email validation function
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        
        setError('');
        
        if (!name) {
            setError('Name is required');
            return;
        }
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (!msg) {
            setError('Message cannot be empty');
            return;
        }

        const serviceId = 'service_yb6320f'
        const templateId = 'template_o4h4uyi'
        const userId = 'BJdoEjZIaOenWZrkb'
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Mahmoud_Amin',
            message: msg,
        }

        try {
            setDisplayedWord("Loading...")
            emailjs.send(serviceId, templateId, templateParams, userId)
            .then((res) => {
                setIsExploding(true);
                setName('')
                setEmail('')
                setMsg('')
            })
        } catch (err:any) {
            console.error('there is an error while sending the email: ', err);
            setError(err!);
        } finally {
            setTimeout(() => {
                setIsExploding(false);
                setDisplayedWord('Send Message');
            }, 3000)
        }
    }
    
    const changeName = (e:any) => {
        setDisplayedWord('Send Message')
        setName(e.target.value)
    };
    const changeEmail = (e:any) => {
        setDisplayedWord('Send Message')
        setEmail(e.target.value)
    };
    const changeMSG = (e:any) => {
        setDisplayedWord('Send Message')
        setMsg(e.target.value)
    };
    

        
    return (
        <motion.section
        initial={{opacity: 0, translateY:"20px", transitionDuration:"150ms"}}
        animate={{opacity:1, translateY: "0px"}}
        exit={{opacity:1, translateY: "0px"}}
        className="" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className={`${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color font-bold`}>
                            Get in <span className='max-[500px]:hidden font-bold'>Touch</span>
                        </h2>
                        <h1 className={`relative min-[500px]:hidden S${getCurrTheme() == 9  ? "title-font-lobster" : "title-font"} text-[110px] max-[500px]:text-[75px] text-rare-color text-center -mt-10 font-bold`}>
                            Touch.
                        </h1>
                        <p className="mx-auto  max-w-3xl text-xl text-text-color">
                            Let's create something great together!
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full max-sm:pr-0 pr-6">
                            <p className="mt-3 mb-10 text-lg text-rare-color max-sm:pl-2">
                                Have a project or idea you'd like to discuss? I'm always open to new opportunities and collaborations. Whether it's a quick question or something more, feel free to drop me a message.
                            </p>
                            <ul className="mb-6 md:mb-0 max-sm:flex flex-col max-sm:pl-2">
                                <li className="flex ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sec-color text-main-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-1 text-lg font-medium leading-6 text-rare-color">My Address
                                        </h3>
                                        <p className="text-text-color">2nd Cairo region</p>
                                        <p className="text-text-color">Cairo, Egypt</p>
                                    </div>
                                </li>
                                <li className="flex ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sec-color text-main-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-1 text-lg font-medium leading-6 text-rare-color">Contact
                                        </h3>
                                        <p className="text-text-color">Mobile: +20 122 8050 484</p>
                                        <p className="text-text-color">Mail: mahmoudamin123321@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sec-color text-main-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 ">
                                        <h3 className="mb-1 text-lg font-medium leading-6 text-rare-color">Working
                                            hours</h3>
                                        <p className="text-text-color">Always giving you highest priority</p>
                                        <p className="text-text-color">Saturday - Thursday: 08:00 - 20:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Form */}
                        <div className="card h-fit relative max-w-6xl max-sm:pl-2 p-5 md:px-10 md:py-3" id="form">
                            {isExploding &&
                                <div className=' absolute w-full h-full top-0 left-0'>
                                    <Lottie animationData={confetti} loop={false} />
                                </div>
                            }
                            <h2 className="mb-4 text-2xl font-bold text-rare-color">Ready to Get Started?</h2>
                            <form id="contactForm" onSubmit={sendEmail}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input type="text" id="name" value={name} onChange={changeName} autoComplete="given-name" placeholder="Your name" className={`mb-2 w-full  rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md ${getCurrTheme() == 8 || getCurrTheme() == 2 ? "text-fourth-color":"text-text-color"} ${getCurrTheme() == 9 ? "cursor-lobsterHover focus:cursor-lobster" : ""} outline-none focus:border-third-color`} name="name" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input type="email" id="email" value={email} onChange={changeEmail} autoComplete="email" placeholder="Your email address" className={`mb-2 w-full  rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md ${getCurrTheme() == 8 || getCurrTheme() == 2 ? "text-fourth-color":"text-text-color"} ${getCurrTheme() == 9 ? "cursor-lobsterHover focus:cursor-lobster" : ""} outline-none focus:border-third-color`} name="email" />
                                        </div>
                                    </div>
                                    <div className={`mx-0 mb-1 sm:mb-4 `}>
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <textarea id="textarea" value={msg} onChange={changeMSG} name="textarea" maxLength={500} cols={30} rows={5} placeholder="Write your message..." className={`mb-2 w-full  rounded-md border border-gray-400 max-h-[200px] py-2 pl-2 pr-4 shadow-md ${getCurrTheme() == 8 || getCurrTheme() == 2 ? "text-fourth-color":"text-text-color"} ${getCurrTheme() == 9 ? "cursor-lobsterHover focus:cursor-lobster" : ""} outline-none focus:border-third-color`}></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className={`w-full bg-sec-color trans hover:opacity-80 text-main-background font-bold px-6 py-3 font-xl rounded-md sm:mb-0 ${getCurrTheme() == 9 ? "cursor-lobsterHover" : "cursor-pointer"} outline-text-color`}>{displayedWord}</button>
                                </div>
                            </form>
                            {error && (
                                <div className=" mt-3 text-red-500 text-center">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;