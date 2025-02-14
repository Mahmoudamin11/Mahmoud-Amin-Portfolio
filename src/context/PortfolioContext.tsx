import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type features = { 
    toggleThemeChangerState:() => void
    getThemeChangerState:() => number
    changeTheme:(id:number) => void
    theme : number,
    changeOpenedPage:(page:string) => void 
    openedPage: string
    openMenu: () => void
    toggleMark: boolean
    menuOpen: boolean
}
const portContext = createContext({}as features)
export function useCont() { 
    return useContext(portContext);
}
type Child = { 
    children: ReactNode ;
}

export function PortfolioContext({children}:Child) { 
    const [themeChangerOpen, setThemeChangerOpen] = useState(0);
    const [openedPage, setopenedPage] = useState("");
    const [theme, setTheme] = useState(2);
    const location = useLocation();
    const [menuOpen, setmenuOpen] = useState(false);
    const [toggleMark, settoggleMark] = useState(false);
    

    useEffect(() => { 
        if (theme == 9) { 
            document.body.classList.add("cursor-lobster");
            
        }
        else { 
            document.body.classList.remove("cursor-lobster")
        }
    } ,[theme])
    
    const openMenu = () => { 
        if (getThemeChangerState() == 1) { 
            setThemeChangerOpen(0);
            setTimeout(() => { 
                if (menuOpen) { 
                    setmenuOpen(false);
                    setTimeout(() => {
                        settoggleMark(false);
                    }, 250);
                    }
                    else{
                    setmenuOpen(true);
                    setTimeout(() => {
                        settoggleMark(true);
                    }, 250);
                }
            }, 320)
        }
        
        else { 
            if (menuOpen) { 
                setmenuOpen(false);
                setTimeout(() => {
                    settoggleMark(false);
                }, 250);
                }
                else{
                setmenuOpen(true);
                setTimeout(() => {
                    settoggleMark(true);
                }, 250);
            }
        }
    }
    
    useEffect(() => { 
        let page = location.pathname.substring(1);
        if (page == "")
            page = "home"
        changeOpenedPage(page);
    }, [location])

    const toggleThemeChangerState = () => { 
        if (themeChangerOpen) { 
            setThemeChangerOpen(0);
        }
        else
            setThemeChangerOpen(1);
    }
    const getThemeChangerState = () => {
        return themeChangerOpen;
    }
    const changeTheme = (id:number)  =>  { 
        if (id == theme ) { 
            toggleThemeChangerState();
        }
        else { 
            for(let i = 1 ; i <= 9 ;i++) { 
                document.body.classList.remove(`theme-${i}`);
            }
            document.body.classList.add(`theme-${id}`);
            setTheme(id);
        }
    }
    const changeOpenedPage = (page:string) => { 
        setopenedPage(page);
    }
    return( 
        <portContext.Provider value={
            {toggleThemeChangerState,getThemeChangerState, changeTheme, theme, 
                changeOpenedPage, openedPage, openMenu, toggleMark, menuOpen,
            }}>
            {children}
        </portContext.Provider>
    )
}
export default PortfolioContext  ;