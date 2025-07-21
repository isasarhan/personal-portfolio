'use client'
import Spline from '@splinetool/react-spline';
import { Suspense, type FC } from 'react';
import { motion } from 'framer-motion'
import Button from '../common/button';
import { ArrowRightIcon } from '@/assets/icons';

interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = () => {
    return (
        <section className='h-screen relative w-screen  flex items-center flex-col justify-end  lg:flex-row md:justify-start'>
            <div className='md:p-36 z-40 lg:w-4/6 flex flex-col gap-10 top-0 p-8'>
                <motion.h1
                    className=' md:text-8xl text-5xl font-bold'
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5
                    }}
                >
                    Building Fast Reliable Results
                </motion.h1>
                <motion.p className='text-lg text-sky-50 opacity-80'
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 40,
                        damping: 25,
                        delay: 1.5,
                        duration: 1.5
                    }}
                >
                    I deliver robust, production-ready websites and web apps with speed and precision.
                    Every project is backed by clean code, clear communication,
                    and a commitment to getting it done, on time, every time.
                </motion.p>
                <Button url='/about' 
                    className='py-3 px-8 rounded-full border-2 border-white uppercase
                 hover:bg-sky-800 transition-all ease-in-out duration-500 flex justify-between items-center gap-5'>
                    About Me <ArrowRightIcon/>
                </Button>
            </div>

            <Spline
                className='absolute md:-right-[18%] -top-28 -z-50 md:top-0 '
                scene="https://prod.spline.design/rlJrrsGpmE9xxPWE/scene.splinecode"

            />
        </section>
    );
}

export default HeroSection;
