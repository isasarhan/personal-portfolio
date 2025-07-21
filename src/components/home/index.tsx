import type { FC } from 'react';
import HeroSection from './hero-section';
import ProjectSection from './project-section';
import ExperienceSection from '../experience/index.';
import AboutSection from '../about';
import TechnologiesSection from '../technologies';

interface HomeModuleProps { }

const HomeModule: FC<HomeModuleProps> = () => {
    return (
        <>
            <HeroSection />
            {/* <ProjectSection/> */}
        </>
    );
}

export default HomeModule;
