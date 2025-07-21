import AboutSection from '@/components/about';
import TechnologiesSection from '@/components/technologies';
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
