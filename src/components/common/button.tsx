import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentProps<"button"> {
    url?: string
    children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, url = '#', className,...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
            <Link href={url} >
                <button {...props} className={cn(className, 'cursor-none')}>
                    {children}
                </button>
            </Link>
        </motion.div >
    );
}

export default Button;
