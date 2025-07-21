'use client'
import { GLobeIcon, TerminalIcon, WebDevIcon, WindowIcon, WordPressIcon } from '@/assets/icons';
import Image from 'next/image';
import type { FC } from 'react';
import ServiceCard from './service-card';

interface AboutSectionProps { }

const AboutSection: FC<AboutSectionProps> = () => {
    return (
        <section className='md:px-36 md:pb-32 p-10' id='about'>
            <div className="flex flex-col text-wrap lg:w-3/5 gap-5 mb-10">
                <h3 className='text-2xl'>Introduction</h3>
                <h1 className='text-7xl font-bold'>Overview</h1>
                <p className='text-lg leading-8'>
                    I'm a skilled software developer with experience in TypeScript and JavaScript,
                    and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner
                    and collaborate closely with clients to create efficient, scalable, and user-friendly
                    solutions that solve real-world problems. Let's work together to bring your ideas to life!
                </p>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
                <ServiceCard Icon={WebDevIcon} />
                <ServiceCard Icon={WindowIcon} borders />
                <ServiceCard Icon={TerminalIcon} />
                <ServiceCard Icon={WordPressIcon} borders />
            </div>
        </section>
    );
}

export default AboutSection;
