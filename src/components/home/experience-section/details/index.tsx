'use client'
import type { FC } from 'react';
import { data } from './data';
import Image from 'next/image';

interface ExperienceDetailsProps {
    id: string;
}



const ExperienceDetails: FC<ExperienceDetailsProps> = ({ id }) => {
    const info = data.find((d) => d.id === id);
    if (!info) return null;

    const { date, details, location, technologies, title, image } = info;

    return (
        <div className=''>
            <div className='mb-15 text-center'>
                <h2 className='text-6xl text-center font-bold mb-5'>{title}</h2>
                <p className="text-white mb-4 text-lg">{location}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-sky-200 text-sky-900 text-lg font-medium px-3 py-1 rounded-full select-none"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* */}
            <div className="grid md:grid-cols-3 my-24 justify-center items-center p-5 w-full">
                <div className='md:w-[350px] md:h-[350px] w-full border-2 border-white  overflow-hidden
                    flex items-center justify-center rounded-3xl bg-white'>
                    <Image alt='' src={image} width={450} height={450} />
                </div>
                <div className='md:col-span-2 py-10'>
                    <div className='flex justify-between items-center flex-col md:flex-row mb-5'>
                        <h2 className='text-sky-400 text-4xl font-bold mb-5'>Work Details</h2>
                        <span className='text-sky-200 font-bold'>{date}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 pb-4">
                        {details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetails;
