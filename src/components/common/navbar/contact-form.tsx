import type { FC } from 'react';
import { Input } from '../input';
import { Textarea } from '../textarea';
import { XIcon } from '@/assets/icons';
import Button from '../button';
import { motion , AnimatePresence} from 'framer-motion'

interface ContactFormProps {
    handleCloseDialog(): void
}

const ContactForm: FC<ContactFormProps> = ({ handleCloseDialog }) => {
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
                    <form action="">
                        <div className='flex flex-col gap-3'>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Input id='name' />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Input id='email' />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <Input id='phone' />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <Textarea id='message' rows={4} />
                            </div>
                            <Button type='submit'
                                className=' w-full bg-gradient-to-r from-sky-900 to-sky-950 shadow rounded-lg py-2 px-4 
                                 transition-all ease-in-out duration-200'>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </>
    );
}

export default ContactForm;
