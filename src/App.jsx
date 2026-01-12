import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./components/Navbar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

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
    <Contact/>
    <Footer/>
   </>
  )
}

export default App