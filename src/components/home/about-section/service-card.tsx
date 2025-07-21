'use client'
import { cn } from '@/lib/utils';
import type { FC } from 'react';
import React, {  } from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
    borders?: boolean;
    Icon: IconType;
}

const ServiceCard: FC<ServiceCardProps> = ({ borders = false, Icon }) => {
    
    return (
        <div
            className={cn(
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
