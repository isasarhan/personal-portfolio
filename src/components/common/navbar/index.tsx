'use client'
import { useState, type FC } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon, WhatsappIcon } from '@/assets/icons';
import SocialIcon from './social-icon';
import Button from '../button';
import { data } from '../data';
import { useMediaQuery } from 'react-responsive';
import NavbarMobile from './mobile';
import ContactForm from './contact-form';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isContactOpen, setIsContactOpen] = useState(false)

    const toggleContactForm = () => {
        setIsContactOpen(prev => !prev)
    }

    return (
        <>
            <section className=' absolute flex items-center justify-between p-7 w-screen z-50 '>
                {/* Logo and Name */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2
                    }}
                    className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-lg p-2 bg-gradient-to-r
                      from-sky-900 to-sky-500 text-white shadow 
                        flex justify-center items-center'>I</div>
                    <div className='text-lg font-bold'>
                        Issa Sarhan
                    </div>
                </motion.div>
                {/* Navigation links */}
                <nav className='lg:flex hidden gap-10 '>
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
                            className='group relative '
                        >
                            <Link className='relative transition-all duration-500 pb-1 cursor-none text-lg' key={label} href={url}>
                                {label}
                                <span
                                    className='absolute w-0 h-0.5 left-0 bottom-0 bg-sky-500 
                                    group-hover:w-full transition-all duration-300 ease-in-out'/>

                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className='lg:flex hidden md:flex items-center gap-5'>
                    <SocialIcon Icon={LinkedInIcon} href={'https://www.linkedin.com/in/issa-sarhan/'} />
                    <SocialIcon Icon={GithubIcon} href={'https://github.com/isasarhan'} />
                    <SocialIcon Icon={WhatsappIcon} href={'https://wa.me/96170958117'} />
                    <Button
                        onClick={toggleContactForm}
                        className='bg-gradient-to-r from-sky-800 to-sky-300 shadow rounded-lg py-2 px-4 
                        hover:scale-125 transition-all ease-in-out duration-200'>
                        Contact Me
                    </Button>
                </div>

                {isMobile && <NavbarMobile toggleContactForm={toggleContactForm} />}
                <AnimatePresence>
                    {isContactOpen &&
                        <ContactForm handleCloseDialog={toggleContactForm} />
                    }
                </AnimatePresence>
            </section >
        </>
    );
}

export default Navbar;
