import React, { FormEvent, useRef, useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg'
import emailjs from '@emailjs/browser';
import './contactForm.css';


export const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null)
    const [contactRequest, setContactRequest] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const isPending = () => {
        setIsLoading(true);
    }

    const sendContact = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.current) {
            const serviceId = process.env.REACT_APP_SERVICE_ID
            const templateId = process.env.REACT_APP_TEMPLSTE_ID
            const userId = process.env.REACT_APP_PUBLIC_KEY

            if (serviceId && templateId && userId) {
                emailjs.sendForm(serviceId, templateId, form.current, userId)
                    .then((result) => {
                        setContactRequest('Your message has been sent successfully');
                        (event.target as HTMLFormElement).reset()
                        setIsLoading(false)

                    }, (error) => {
                        setContactRequest('There was an issue, the message was not sent.')
                        setIsLoading(false)
                    });
            }

        }
    }
    return (
        <section id="contactForm" className='contactFormSection'>
            <form
                ref={form}
                onSubmit={sendContact}
                className="contact_form"
                aria-busy={isLoading}
                aria-live="assertive"
            >
                <fieldset>
                    <legend>Contact Form</legend>
                    <label htmlFor='name'>Name</label>
                    <input className="inputName" type="text" name="name" placeholder="Your Name" required />

                    <label htmlFor='email'>Email</label>
                    <input className="inputEmail" type="email" name="email" placeholder="Your Email" required />

                    <label htmlFor='message'>Message</label>
                    <textarea className="inputMessage" name="message" placeholder="Your Message" id="" required />

                    <div className='email_sent' aria-live="polite">{contactRequest}</div>
                    {isLoading ? <CgSpinnerTwo className='spinner' aria-label="Loading" /> : ""}

                    <button
                        type="submit"
                        className='sendMessageButton'
                        aria-label="Send Message"
                        onClick={isPending}>
                        Send Message
                    </button>
                </fieldset>
            </form>

        </section>
    )
}
