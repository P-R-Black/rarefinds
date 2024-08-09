import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface MailChimpResponse {
    id: string;
    email_address: string;
    status: string;
    // Add other fields you expect from the response
}

export const MailChimpSubsList = () => {
    const [email, setEmail] = useState('');
    // const [response, setResponse] = useState<MailChimpResponse | null>(null);
    // const [error, setError] = useState<string | null>(null);

    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const audienceId = process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID;
    const mailChimpKey = process.env.REACT_APP_MAILCHIMP_API_KEY;

    const validateEmail = (email: string) => {
        if (email.trim() === '') {
            setEmailErrorMessage('Email is required')
        } else {
            const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2, 4}/igm;
            if (!emailRegex.test(email)) {
                setEmailErrorMessage('Invalid Email Address')
            } else {
                setEmailErrorMessage('')
            }
        }
    }
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        validateEmail(email)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log(email)
        event.preventDefault()
        validateEmail(email)

        const mailChimpData = {
            members: [
                {
                    email_address: email,
                    status: 'subscribed'
                }
            ]
        }

        try {
            const response = await fetch(`https://us1.api.mailchimp.com/3.0/lists/${audienceId}`,
                {
                    method: 'POST',
                    headers: {
                        // "Content-Type": "application/json",
                        // "Accept": "application/json",
                        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`
                    },
                    body: JSON.stringify(mailChimpData)
                }
            )

            const data = await response.json()
            console.log('data', data)

            if (!response.ok) {
                throw new Error("FAiled to subscribe")

            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="emailLabelContainer">
                    <label htmlFor="email">Sign up for our weekly newsletter:</label>
                </div>
                <span className="formControlWrap">
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                        autoCapitalize='off'
                        autoCorrect='off'
                        required
                    />
                    <button className="emailButton" type="submit">Submit</button>
                </span>
            </form>
        </>
    );
}