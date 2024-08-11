import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import vinlyPic from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/vinylEmoji.png'
import './emailform.css'


const mailerLiteGroupId = process.env.REACT_APP_MAILER_LITE_GROUP_ID as string;
const mailerLightToken = process.env.REACT_APP_MAILER_LITE_TOKEN as string;
const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY as string;


export const EmailForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showReCaptcha, setShowRecaptcha] = useState(false);

    const disabledButton = email.length < 6

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);



    const validateEmail = (email: string) => {
        if (email.trim() === '') {
            // setErrorMessage('Email is required')

        } else {
            const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2, 4}/igm;
            if (!emailRegex.test(email)) {
                console.log('Invalid Email Address')
            } else {
                setMessage('')
            }
        }
    }
    const handleEmailChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmail(emailValue)
        validateEmail(emailValue)

        if (emailValue.includes('@')) {
            setShowRecaptcha(true)
        } else {
            setShowRecaptcha(false)
        }
    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("")
        setErrorMessage("")
        validateEmail(email);



        let recaptchaValue;
        if (recaptchaRef.current) {
            recaptchaValue = recaptchaRef.current.getValue();
            console.log('ReCAPTCHA value:', recaptchaValue);
        }

        if (!recaptchaValue) {
            setErrorMessage("Please verify the Captcha")

        } else {
            try {
                const URL = `https://connect.mailerlite.com/api/subscribers`;

                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: `Bearer ${mailerLightToken}`,

                    },
                    body: JSON.stringify({
                        email: email,
                        group: [mailerLiteGroupId]
                    }),
                });

                const data = await response.json();

                if (data.errors) {
                    setErrorMessage(data?.message)
                    console.error('Error:', data.errors[0].message);
                } else {
                    setMessage('Email successfully submitted!');
                }
            } catch (e) {
                setErrorMessage('Faoled to subscribe. Please try again later.')
                console.error('Error occurred:', e);
            }

            setEmail('');
            setErrorMessage('')

        }

    }

    return (
        <section className='emailFormSection'>
            <form onSubmit={handleSubmit}>
                <div className="emailLabelContainer">
                    <label htmlFor="email">Sign up for our weekly newsletter:</label>
                </div>
                {message && <div className="successContainer">
                    <p className="successMessage">{message}</p>
                    <img src={vinlyPic} alt="" />
                </div>
                }

                {errorMessage && <div className='successContainer'>
                    <p className="errorMessage">{errorMessage}</p>
                </div>
                }
                <span className="formControlWrap">
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                        autoCapitalize='off'
                        autoCorrect='off'
                        required
                    />
                    <button disabled={disabledButton} className="emailButton" type="submit">Submit</button>
                    {showReCaptcha && (<ReCAPTCHA
                        className="recaptchaBox"
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    />)}
                </span>
            </form>
        </section>
    );

}
