import React, { ChangeEvent, FormEvent, useState } from 'react'
import vinlyPic from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/vinylEmoji.png'
import { FaChevronRight } from "react-icons/fa";

export const EmailFormFooter: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {

        console.log('test', event.target.value)

        setEmail(event.target.value);

        // if (event.target?.value && event.target.value.match(isValidEmail)) {
        //     //showNoValidEmail(false);
        //     console.log('false')

        // } else {
        //     console.log('true')
        // showNoValidEmail(true);
        // }


    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Email validation (simple example)
        // if (!email.includes('@')) {
        //     setMessage('Please enter a valid email address.');
        //     return;
        // }

        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!email && email.match(isValidEmail)) {
            setMessage('Please enter a valid email address.');
            console.log('Please enter a valid email address.')
        } else {
            console.log('valid Email')
        }

        // Perform your submission logic here (e.g., send to an API)
        // For demonstration, we're just logging to console

        console.log('Email submitted:', email);

        // Reset form and set success message
        setEmail('');
        setMessage('Email successfully submitted!');
    };

    return (
        <section className='footerEmailFormSection'>
            <form onSubmit={handleSubmit} className="footerNewsForm">
                <div className="footerEmailLabelContainer">
                    <label htmlFor="email">For our weekly newsletter</label>
                </div>
                <span className="footerFormControlWrap">
                    <input
                        type="email"
                        id="footerEmail"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button className="footerEmailButton" type="submit">
                        <FaChevronRight />
                    </button>

                </span>


            </form>

            {message && <div className="footerSuccessContainer">
                <p className="footerSuccessMessage">{message}</p>
                <img src={vinlyPic} alt="" />
            </div>
            }

        </section>
    )
}
