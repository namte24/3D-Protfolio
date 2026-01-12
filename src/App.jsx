import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./components/Navbar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"


const App = () => {
  return (
   <>
   <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <Experience/>
    <TechStack />
   </>
  )
}

export default App