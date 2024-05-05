import ThemesChanger from "./components/ThemesChanger"
import { WholePage } from "./components/WholePage"
import PortfolioContext from "./context/PortfolioContext"


function App() {
  
  return (
    <PortfolioContext>
      <div className="w-full h-full">
        {/* theme changer */}
        <ThemesChanger />
        <WholePage />
      </div>
    </PortfolioContext>
  )
}

export default App
