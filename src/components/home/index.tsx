import type { FC } from 'react';
import HeroSection from './hero-section';

interface HomeModuleProps { }

const HomeModule: FC<HomeModuleProps> = () => {
    return (
        <>
            <HeroSection />
        </>
    );
}

export default HomeModule;
