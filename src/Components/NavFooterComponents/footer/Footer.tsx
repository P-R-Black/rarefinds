import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Logo } from '../logo/Logo'
import './footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { EmailFormFooter } from '../../NewsletterSubComponents/newsletterSubs/EmailFormFooter';
import { Link } from 'react-router-dom';


export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <section className="footerSection">
            <div className="container">
                <div className="footerContainer">
                    <div className="topFooterContainer">
                        <div className="footerLogoAddressContainer">
                            <div className="footerLogoContainer">
                                <Logo />
                            </div>
                            <div className="footerAddressContainer">
                                <h3>Overtoom 482</h3>
                                <h3>Amsterdam, North Holland 1054 JZ</h3>

                            </div>
                            <div className="footerPhoneNumberContainer">
                                <h3>020 612 5437</h3>
                            </div>
                            <div className="socialIconsContainer">
                                <Link to={'https://www.facebook.com/'} target="_blank"><FaFacebookF className="footerSocialIcons" /></Link>
                                <Link to={'https://x.com/?lang=en'} target="_blank"><FaXTwitter className="footerSocialIcons" /></Link>
                                <Link to={'https://www.instagram.com/'} target="_blank"><FaInstagram className="footerSocialIcons" /></Link>
                                <Link to={'https://www.tiktok.com/en/'} target="_blank"><FaTiktok className="footerSocialIcons" /></Link>
                            </div>
                        </div>
                        <div className="footerSiteLinksContainer">
                            <HashLink to={"/#aboutSection"} className='navbarItems'><h3>{"About"}</h3></HashLink>
                            <HashLink to={"/#contactSection"} className='navbarItems'><h3>{"Contact"}</h3></HashLink>
                        </div>
                        <div className="footerNewsletterContainer">
                            <h3>Newsletter</h3>
                            <EmailFormFooter />
                        </div>

                    </div>

                </div>
            </div>
            <div className="bottomFooterContainer">
                <div className="rightsCopyrightContainer">
                    <h3>&copy; Rare Finds {year}. All Rights Reserved</h3>
                </div>
            </div>
        </section>
    )
}
