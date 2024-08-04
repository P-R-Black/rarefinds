import React, { useState, ChangeEvent, FormEvent } from 'react';
import vinlyPic from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/vinylEmoji.png'
import './emailform.css'


const EmailForm: React.FC = () => {
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
        <section className='emailFormSection'>
            <form onSubmit={handleSubmit}>
                <div className="emailLabelContainer">
                    <label htmlFor="email">Sign up for our weekly newsletter:</label>
                </div>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button className="emailButton" type="submit">Submit</button>
            </form>

            {message && <div className="successContainer">
                <p className="successMessage">{message}</p>
                <img src={vinlyPic} alt="" />
            </div>
            }

        </section>
    );
};

export default EmailForm;