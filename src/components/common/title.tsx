import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface TitleProps {
    text: string
    className?: string
}

const Title: FC<TitleProps> = ({ text, className }) => {
    return (
        <h2 className={cn('text-6xl text-center font-bold', className)}>{text}</h2>
    );
}

export default Title;
