'use client'

import { useMemo, useRef, type FC } from 'react';
import { motion } from 'framer-motion'
import { technologies } from './tech';
import { cn } from '@/lib/utils';
interface TechnologiesSectionProps { }

const TechnologiesSection: FC<TechnologiesSectionProps> = () => {
    // const sectionRef = useRef(null)
    // const titleRef = useRef(null)

    // useEffect(() => {
    //     // gsap.registerPlugin(ScrollTrigger)
    //     // gsap.fromTo(titleRef.current,
    //     //     { y: 100, opacity: 0 },
    //     //     {
    //     //         y: -30,
    //     //         opacity: 1,
    //     //         duration: 0.8,
    //     //         scrollTrigger: {
    //     //             trigger: sectionRef.current,
    //     //             start: "top 40%",
    //     //             toggleActions: 'play none none reverse'
    //     //         }
    //     //     }
    //     // )
    //     return ()=>{
    //         ScrollTrigger.getAll().forEach((trigger)=>{
    //             if(trigger.vars.trigger === sectionRef.current)
    //                 trigger.kill()
    //         })
    //     }
    // }, [])
    const items = useMemo(() => technologies.map(({ Icon, name, color }, index) => {

        return (
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
                <Icon size={60} style={{ color: color || '#38bdf8' }} />
                <h1 className="text-white">{name}</h1>
            </motion.div>
        )
    }), []);

    return (
        <section id='technologies'>
            <h2 className='text-6xl text-center font-bold '>Technologies</h2>
            <div className="grid lg:grid-cols-7 grid-cols-2 justify-center p-10 lg:mx-32 gap-15 items-start mx-10 text-center">
                {items}
            </div>
        </section>
    );
}

export default TechnologiesSection;
