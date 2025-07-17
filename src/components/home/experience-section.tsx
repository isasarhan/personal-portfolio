import { FC } from "react";
import TechnologiesSection from "./technologies-section";


interface ExperienceSectionProps { }

const ExperienceSection: FC<ExperienceSectionProps> = () => {

    return (
        <section  className='relative '>
            {/* {[...Array(25)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: (0.2 + Math.random()), scale: 1 }}
                    transition={{
                        delay: 0.5 + i * 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 25,
                        duration: 0.8
                    }}
                    className='absolute inset-0 rounded-full -z-30 '
                    style={{
                        backgroundColor: 'white',
                        width: `${(1) + i}px`,
                        height: `${(1) + i}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                />
            ))} */}
            <TechnologiesSection/>
        </section>
    );
}

export default ExperienceSection;
