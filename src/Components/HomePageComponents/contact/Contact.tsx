import React from 'react'
import { ContactForm } from './contactForm/ContactForm'

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";

import './contact.css'

export const Contact = () => {
    return (
        <section id="contactSection" className="contactSection" aria-labelledby='contact-heading'>
            <div className="container">
                <div className="contactSectionContainer">
                    <div className="sectionTitle">
                        <h2 className={`contactTitleContainerH1`}>Contact Us</h2>
                    </div>
                    <div className="contactOptionContainer">
                        <div className="contactFormContainer">
                            <ContactForm />
                        </div>
                        <div className="emailMessengerWhatsAppContainer">
                            <article className="contactOptionsBox">
                                <div className="contactEmoji"><MdOutlineEmail className='contactIcons' /></div>
                                <h3>Email</h3>
                                <h4>rarefinds@gmail.com</h4>
                                <a href="mailto:rarefinds@gmail.com" target="_blank" rel="noreferrer" aria-describedby="email-description">Contact by Email</a>
                            </article>
                            <article className="contactOptionsBox">
                                <div className="contactEmoji"><RiMessengerLine className='contactIcons' /></div>
                                <h3>Messenger</h3>
                                <h4>rarefindsrecords</h4>
                                <a href="https://m.me/rare.finds" target="_blank" rel="noreferrer" aria-describedby="messenger-description">Contact by Messenger</a>
                            </article>
                            <article className="contactOptionsBox">
                                <div className="contactEmoji"><FaWhatsapp className='contactIcons' /></div>
                                <h3>WhatsApp</h3>
                                <h4>0206125437</h4>
                                <a href="https://wa.me/0206125437" target="_blank" rel="noreferrer" aria-describedby="whatsapp-description">Contact by WhatsApp</a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
