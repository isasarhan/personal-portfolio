import type { FC } from 'react';
import HeroSection from './hero-section';
import ProjectSection from './project-section';
import ExperienceSection from './experience-section/index.';
import AboutSection from './about-section';
import TechnologiesSection from './technologies-section';

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
