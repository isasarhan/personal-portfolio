import Link from 'next/link';
import type { FC } from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion'

interface SocialIconProps {
    href: string
    className?: string
    Icon: IconType
    size?: number
}

const SocialIcon: FC<SocialIconProps> = ({ href, Icon, size = 22, className }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
            >
                <Link href={href} target='_blank'><Icon size={size} className={`hover:text-sky-500 transition-all ease-in-out duration-300 ${className}`} /></Link>
            </motion.div>
        </>
    );
}

export default SocialIcon;
