'use client'
import { cn } from '@/lib/utils';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import { gsap } from 'gsap';
import { useMousePosition } from '@/hooks/mouse-position';

interface ServiceCardProps {
    borders?: boolean;
    Icon: IconType;
}

const ServiceCard: FC<ServiceCardProps> = ({ borders = false, Icon }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const position = useMousePosition()
    
    return (
        <div
            ref={cardRef}
            className={cn(
                `hover:rotate-y-[30deg] hover:rotate-z-[5deg] hover:rotate-x-[-25deg] transition-all ease-in-out duration-150`,
                'flex flex-col items-center p-0.5 bg-gradient-to-br from-sky-800 via-sky-600 to-sky-200 rounded-xl transform transition-transform duration-300',
                !borders ? 'text-black' : ''
            )}
        >
            <div
                className={cn(
                    'rounded-xl py-5 px-12 h-full min-h-80 flex justify-evenly items-center flex-col w-full',
                    borders ? 'bg-black' : ''
                )}
            >
                <Icon size={75} />
                <span className='text-xl text-center'>Web Developer</span>
            </div>
        </div>
    );
};

export default React.memo(ServiceCard);
