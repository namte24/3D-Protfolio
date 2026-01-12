import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assuming you have these or similar data in your constants
import { eduData } from "../constants"; 
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Animate the Vertical Line drawing itself down
    gsap.from(".edu-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1, // Connects animation to scroll speed
      },
    });

    // 2. Staggered Animation for the Education Cards
    // Instead of sliding from left, these will float up from the bottom
    const cards = gsap.utils.toArray(".edu-card");
    
    cards.forEach((card) => {
      gsap.from(card, {
        y: 50, // Move up 50px
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Start when top of card is near bottom of viewport
          toggleActions: "play none none reverse",
        },
      });
    });

    // 3. Animate the 'dots' on the timeline popping in
    gsap.utils.toArray(".edu-dot").forEach((dot) => {
        gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "back.out(1.7)", // Bouncy effect
            scrollTrigger: {
                trigger: dot,
                start: "top 80%",
            }
        })
    })

  }, { scope: containerRef });

  return (
    <section
      id="education"
      className="flex-center md:mt-32 mt-20 section-padding xl:px-0"
      ref={containerRef}
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education"
          sub="🎓 My Academic Journey"
        />

        <div className="mt-20 relative max-w-4xl mx-auto">
            {/* The Continuous Vertical Line */}
            <div className="absolute left-4 top-2 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-600 edu-line origin-top" />

            <div className="flex flex-col gap-12">
            {eduData.map((item, index) => (
                <div key={index} className="edu-card relative flex items-start gap-8 group">
                
                {/* Timeline Dot */}
                <div className="edu-dot absolute left-[9px] top-0 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-black z-10" />

                {/* Content Card */}
                <div className="ml-10 w-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            {/* Optional: Institution Logo */}
                            <div className="w-12 h-12 rounded-lg bg-white/10  flex-center">
                                <img src={item.logo} alt="school" className="w-full h-full object-fill"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
                                <p className="text-blue-400 font-medium">{item.degree}</p>
                            </div>
                        </div>
                        <span className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-white-50 bg-black/50 backdrop-blur-md">
                            {item.date}
                        </span>
                    </div>

                    <p className="text-white-50 text-lg leading-relaxed mb-4">
                        {item.description}
                    </p>

                    {/* Tags / Skills learned during this education */}
                    {item.skills && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.skills.map((skill, i) => (
                                <span key={i} className="text-xs font-medium text-white/70 px-2 py-1 bg-white/5 rounded hover:bg-white/10 transition-colors">
                                    #{skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;