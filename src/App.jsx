import CoreProblem from "./components/CoreProblem/CoreProblem"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Video from "./components/Video"
import Footer from "./components/footer/Footer"
import HeroVideo from "./assets/loop-video.mp4"
import IndustryTrends from "./components/IndustryTrends"
import HowActWorks from "./components/HowActWorks"
import BenefitsofAct from "./components/BenefitsofAct"

function App() {
 

  return ( 
    <div>
    <Menu/>
    <Header/>
    <CoreProblem/>
    <BenefitsofAct/>
    <IndustryTrends/>
    <HowActWorks/>
    <Video src={HeroVideo}/>
    <Footer/>
     </div>
  )
}

export default App
