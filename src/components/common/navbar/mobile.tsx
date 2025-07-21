'use client'
import { useState, type FC } from 'react';
import Link from 'next/link';
import SocialIcon from './social-icon';
import Button from '../button';
import { data } from './data';
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon, MenuIcon, WhatsappIcon, XIcon } from '@/assets/icons';

interface NavbarMobileProps {
    toggleContactForm(): void
}

const NavbarMobile: FC<NavbarMobileProps> = ({ toggleContactForm }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const toggleMenu = () => {
        setIsOpenMenu(prev => !prev)
    }

    return (
        <>
            <div>
                <div className='md:hidden flex items-center'>
                    <motion.button
                        whileTap={{
                            scale: 0.8
                        }}
                        onClick={toggleMenu}
                    >
                        {isOpenMenu ? <XIcon size={25} /> : <MenuIcon size={25} />}
                    </motion.button>
                </div>
                {isOpenMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden absolute top-24 left-0 w-full bg-sky-900 p-5 flex flex-col gap-5">
                        <nav className='flex flex-col space-y-6'>
                            {data.map(({ label, url }, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 25,
                                        delay: 0.3 + index * 0.2,
                                        duration: 1.2
                                    }}
                                    key={label}
                                >
                                    <Link href={url}>
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <div className='border border-y-slate-400'></div>
                        <div className="flex gap-5">
                            <SocialIcon Icon={LinkedInIcon} href={'#'} />
                            <SocialIcon Icon={GithubIcon} href={'#'} />
                            <SocialIcon Icon={WhatsappIcon} href={'#'} />
                        </div>
                        <Button
                            onClick={toggleContactForm}
                            className='w-full shadow bg-gradient-to-r from-sky-800 to-sky-300 rounded-lg py-2 px-4 
                    hover:scale-125 transition-all ease-in-out duration-200'>
                            Contact Me
                        </Button>

                    </motion.div>
                )}
            </div>
        </>
    );
}

export default NavbarMobile;
