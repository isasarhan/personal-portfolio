'use client'
import { GLobeIcon, TerminalIcon, WebDevIcon, WindowIcon, WordPressIcon } from '@/assets/icons';
import Image from 'next/image';
import type { FC } from 'react';
import ServiceCard from './service-card';

interface AboutSectionProps { }

const AboutSection: FC<AboutSectionProps> = () => {
    return (
        <section className='md:pb-32 ' id='about'>
            <div className="flex flex-col text-wrap lg:w-3/5 gap-5 mb-10">
                <h3 className='text-2xl'>Introduction</h3>
                <h1 className='text-7xl font-bold'>Overview</h1>
                <p className='text-lg leading-8'>
                    Full-Stack Developer skilled in Next.js, TypeScript, and GraphQL, currently at EST: YorkPress.
                    Led migrations to Next.js 15, rebuilt complex dashboards, and contributed to microservices using TypeGraphQL.
                    Also experienced in WordPress, supporting custom development, performance, and security updates.
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
