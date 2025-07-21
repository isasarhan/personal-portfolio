import type { FC } from 'react';
import { XIcon } from '@/assets/icons';
import { motion , AnimatePresence} from 'framer-motion'
import ContactForm from './contact-form';

interface ContactFormDialogProps {
    handleCloseDialog(): void
}

const ContactFormDialog: FC<ContactFormDialogProps> = ({ handleCloseDialog }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    delay: 0.5,
                    duration: 0.8
                }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 25,
                        delay: 0.5,
                        duration: 0.8
                    }}
                    className='bg-gradient-to-br from-sky-900 to-black md:w-1/3 h-[70%] rounded-2xl p-7 flex flex-col justify-around'>
                    <div className='flex justify-between items-center mb-3'>
                        <h1 className='text-3xl '>Get In Touch</h1>
                        <XIcon size={25} onClick={handleCloseDialog} />
                    </div>
                    <ContactForm/>
                </motion.div>
            </motion.div>
        </>
    );
}

export default ContactFormDialog;
