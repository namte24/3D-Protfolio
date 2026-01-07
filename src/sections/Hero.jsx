import {words} from "../constants/index"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import AnimatedCounter from "../components/animatedCounter"


const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1', {
            y: 50,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 2,
            ease: 'power2.inOut'
        })
    })

  return (
    <section id="hero" className="relative overflow-hidden"> 
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/* Left side: Hero content*/}
            <header className="flex flex-col justify-center md:w-full w-screen md: px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1 className="mb-16">
                        <span className="slide">
                            <span className="wrapper">
                               {words.map((word) =>(
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img 
                                        src={word.imgPath}
                                        alt={word.text}
                                        className="xl:size-20 md:size-15 size-15 md:p-2 p-1 rounded-full "/>
                                        <span className="text-6xl">{word.text}</span>
                                    </span>
                               ))} 
                            </span>
                        </span>
                        </h1>
                        <h1 className="mt-10 text-3xl md:text-4xl font-bold">I'm <span className="font-caveat text-6xl purple-500">Tenzing</span></h1>
                        <h1 className="text-3xl md:text-4xl font-bold">Welcome to my Digital Workspace!</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 font-sm"> I hold a Master’s in Computer Science and am a passionate Software Developer. <br/>I specialize in building intelligent, full-stack applications that bridge<br/> complex backend logic with intuitive user experiences. </p>
                    <Button 
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="My work"/>
                </div>
            </header>

            {/* Right side 3D Section*/}
            <figure>
                <div className="hero-3d-layout"> 
                    <HeroExperience />
                </div>
            </figure>
            
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero