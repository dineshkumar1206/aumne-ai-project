import CoreProblem from "./components/CoreProblem/CoreProblem"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Video from "./components/Video"
import Footer from "./components/footer/Footer"
import HeroVideo from "./assets/loop-video.mp4"
import IndustryTrends from "./components/IndustryTrends"

function App() {
 

  return ( 
    <div>
    <Menu/>
    <Header/>
    <CoreProblem/>
    <IndustryTrends/>
    <Video src={HeroVideo}/>
    <Footer/>
     </div>
  )
}

export default App
