import AboutSection from '@/components/home/about-section';
import TechnologiesSection from '@/components/home/technologies-section';
import type { FC } from 'react';

interface AboutPageProps { }

const AboutPage: FC<AboutPageProps> = () => {
    return (
        <>
            <AboutSection />
            <TechnologiesSection />
        </>
    );
}

export default AboutPage;
