import type { FC } from 'react';
import HeroSection from './hero-section';
import ProjectSection from './project-section';
import ExperienceSection from './experience-section';
import AboutSection from './about-section';

interface HomeModuleProps { }

const HomeModule: FC<HomeModuleProps> = () => {
    return (
        <>
            <HeroSection />
            <AboutSection/>
            <ExperienceSection/>
            {/* <ProjectSection/> */}
        </>
    );
}

export default HomeModule;
