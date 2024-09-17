import  {  memo, useEffect } from 'react'
import { useCont } from '../context/PortfolioContext';

const MovingBalls = memo(() => {
    const {getCurrTheme} = useCont();
    let arr : Number[] = [];
    
    
    for(let i = 1; i <= 45; i++) { 
        arr.push(i);
    }
    
    useEffect(() => { 
        for(let i = 1 ; i <= 45; i++) { 
            
            let ball = document.getElementById(`ball${i}`);
            let topRand =  Math.floor(Math.random() * 101);
            let leftRand ;
            if (i <= 15) { 
                leftRand = Math.floor(Math.random() * 34)
            }
            else if (i > 15 && i <= 30) { 
                leftRand = 33 + Math.floor(Math.random() * 34)
            }
            else { 
                leftRand = 66 + Math.floor(Math.random() * 34)
            }
            ball!.style.left = `${leftRand}%`;
            ball!.style.top = `${topRand}%` ;
            
            

            if (i % 2 == 1) { 
                ball!.style.backgroundColor = "var(--sec-color)"
                ball!.style.opacity = "0.6"

            }
            else
                ball!.style.backgroundColor = "var(--fourth-color)"

            
        }
        
    }, [])
    
    return (
        <div className=''>
            {
                arr.map((b , index) => (
                    <span  id={`ball${b}`} key={`ball${index}`} className={`z-10 animate-wholeBall   w-[12px] h-[12px] ${getCurrTheme() == 9 ? "opacity-50" : ""}  rounded-full  absolute`}>
                    </span>
                ))
            }
        </div>
    )
})

export default MovingBalls