import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type features = { 
    toggleThemeChangerState:() => void
    getThemeChangerState:() => number
    changeTheme:(id:number) => void
    getCurrTheme:() => number
    changeOpenedPage:(page:string) => void 
    getOpenedPage:() => string
    imgNumber: Number[]
    changeImg : (id:number, sign:boolean) => void
    getImgNumber : (id:number) => number
    openMenu: () => void
    toggleMark: boolean
    menuOpen: boolean
}
const portContext = createContext({}as features)
export function useCont() { 
    return useContext(portContext);
}
type child = { 
    children: ReactNode ;
}

// declare the localStorage 
// if we didn't store it return default value 2 => the dark theme 

export function PortfolioContext({children}:child) { 
    const [themeChangerOpen, setThemeChangerOpen] = useState(0);
    const [openedPage, setopenedPage] = useState("");
    const [currTheme, setcurrTheme] = useState(2);
    const location = useLocation();
    const [imgNumber, setImgNumber] = useState([ 1,1,1,1,1,1 ]);
    
    const [menuOpen, setmenuOpen] = useState(false);
    const [toggleMark, settoggleMark] = useState(false);
    

    useEffect(() => { 
        if (currTheme == 9) { 
            document.body.classList.add("cursor-lobster");
            
        }
        else { 
            document.body.classList.remove("cursor-lobster")
        }
    } ,[currTheme])

    

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
        if (id == getCurrTheme()) { 
            toggleThemeChangerState();
        }
        else { 
            for(let i = 1 ; i <= 9 ;i++) { 
                document.body.classList.remove(`theme-${i}`);
            }
            document.body.classList.add(`theme-${id}`);
            setcurrTheme(id);
        }
    }
    const getCurrTheme = () => { 
        return currTheme ;
    }
    const changeOpenedPage = (page:string) => { 
        setopenedPage(page);
    }
    const getOpenedPage = () => { 
        return openedPage ;
    }

    const changeImg = (id:number,sign:boolean ) => { 
        if (sign) { 
          // ++
          if ( imgNumber[id - 1]  < 4 ) { 
            let imgs = imgNumber ; 
            for(let i  = 0 ; i < imgNumber.length ; i++) { 
              if (i === id -1 ) { 
                imgs[i]++;
              }
            }
            setImgNumber(imgs);
            
          }
        }
        else if (!sign) { 
      
            if (imgNumber[id - 1] > 1) { 
              
              let imgs = imgNumber ; 
              for(let i  = 0 ; i < imgNumber.length ; i++) { 
                if (i === id -1 ) { 
                  imgs[i]--;
                }
              }
              setImgNumber(imgs);
            }
          }
    }
    const getImgNumber = (id:number) => { 
        return imgNumber[id-1];
    }
    
    return( 
        <portContext.Provider value={
            {toggleThemeChangerState,getThemeChangerState, changeTheme, getCurrTheme, 
             changeOpenedPage, getOpenedPage, imgNumber, changeImg, getImgNumber, openMenu, toggleMark, menuOpen
             ,
            }}>
            {children}
        </portContext.Provider>
    )
}

export default PortfolioContext  ;