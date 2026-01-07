import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '../constants' // Import your data

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    // We only need one ref for the main container now!
    const containerRef = useRef(null)

    useGSAP(() => {
        // This targets all elements with class '.project-card' INSIDE containerRef
        const cards = gsap.utils.toArray('.project-card');

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out", // Added easing for smoothness
                    delay: 0.2 * index, // Stagger effect based on index
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=50',
                        toggleActions: "play none none reverse" // Re-animates when scrolling up
                    }
                }
            )
        })
        
        // Animate the whole section fade-in
        gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    }, { scope: containerRef }) // <--- IMPORTANT: This scopes the selectors

    return (
        <section id="work" ref={containerRef} className='app-showcase py-12'>
            <div className='w-full max-w-7xl mx-auto px-4'>
                <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
                
                {/* Using CSS Grid is better for "more projects" than manual left/right divs.
                   This creates a responsive layout that handles 3, 4, 10, or 20 projects automatically.
                */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    
                    {projects.map((project) => (
                        <div key={project.id} className='project-card flex flex-col gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors'>
                            
                            {/* Image Wrapper */}
                            <div 
                                className='image-wrapper rounded-lg overflow-hidden h-64 w-full flex items-center justify-center border border-white/10'
                                style={{ backgroundColor: project.background || '#1e1e1e' }} 
                            >
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className='object-cover h-full w-full hover:scale-105 transition-transform duration-500'
                                />
                            </div>

                            {/* Text Content */}
                            <div className='text-content flex flex-col flex-grow'>
                                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                                <p className='text-gray-400 text-sm mb-4 flex-grow'>
                                    {project.desc}
                                </p>

                                {/* Links / Buttons */}
                                <div className='flex gap-4 mt-auto'>
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-semibold hover:bg-gray-700 transition'
                                    >
                                        GitHub
                                    </a>
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition'
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection