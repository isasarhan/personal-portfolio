'use client'

import { useEffect, useRef, type FC } from 'react';
import { animate, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { technologies } from './tech';
interface TechnologiesSectionProps {}

const TechnologiesSection: FC<TechnologiesSectionProps> = () => {
        const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.fromTo(titleRef.current,
        //     { y: 100, opacity: 0 },
        //     {
        //         y: -30,
        //         opacity: 1,
        //         duration: 0.8,
        //         scrollTrigger: {
        //             trigger: sectionRef.current,
        //             start: "top 40%",
        //             toggleActions: 'play none none reverse'
        //         }
        //     }
        // )
        return ()=>{
            ScrollTrigger.getAll().forEach((trigger)=>{
                if(trigger.vars.trigger === sectionRef.current)
                    trigger.kill()
            })
        }
    }, [])
    return (
        <section>
            <h2 ref={titleRef} className='text-6xl text-center font-bold '>Technologies</h2>
            <div className="grid lg:grid-cols-7 grid-cols-2 justify-center p-10 lg:mx-32 gap-15 items-start mx-10 text-center">
                {technologies.map(({ Icon, name }, index) => (
                    <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.5 + index * 0.2,
                            type: 'spring',
                            stiffness: 100,
                            damping: 25,
                            duration: 0.5
                        }}
                        className='flex flex-col items-center z-50'>
                        <Icon size={75} className='text-sky-400' />
                        <h1 className="bg-gradient-to-r from-sky-400 via-sky-200 to-sky-100 inline-block text-transparent bg-clip-text">{name}</h1>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default TechnologiesSection;
