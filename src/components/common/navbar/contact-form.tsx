'use client'
import type { FC } from 'react';
import { Input } from '../input';
import { Textarea } from '../textarea';
import Button from '../button';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
    const {
        handleSubmit,
        formState: { errors },
        register,
        watch,
    } = useForm();


    const onSubmit = (data: any) => {
        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send('service_ejn1too', 'template_9p4j8eb', templateParams, {publicKey:'HlF1Z42cwgCtBZUU2'}).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
                console.log('FAILED...', err);
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
                <div>
                    <label htmlFor="name">Name</label>
                    <Input id="name" {...register('name', { required: true })} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input id="email" {...register('email', { required: true })} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Input id="phone" {...register('phone')} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" rows={4} {...register('message', { required: true })} />
                </div>
                <Button
                    type='submit'
                    className="w-full bg-gradient-to-r from-sky-900 to-sky-950 shadow rounded-lg py-2 px-4 transition-all ease-in-out duration-200"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
