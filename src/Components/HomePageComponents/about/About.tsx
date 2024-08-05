import React from 'react'
import './about.css'
import EmailForm from '../../NewsletterSubComponents/newsletterSubs/EmailForm';
import { AboutPhotos } from './aboutPhotos/AboutPhotos';

export const About: React.FC = () => {
    return (
        <section id="aboutSection" className="aboutSection">

            <div className="container">
                <div className="aboutSectionContainer">
                    <div className="aboutTitleContainer">
                        <h2 className={`aboutTitleContainerH2`}>About Rare Finds</h2>
                    </div>
                    <div className="ownerSection">
                        <div className="ownerAlbumCoverSection">
                            <AboutPhotos />
                        </div>
                        <div className="ownerSectionColumn">
                            <div className="ownerTitleContainer">
                                <h3>Owner / Proprietor / Collector</h3>
                            </div>
                            <div className="ownerParagraphContainer">
                                <p>
                                    I’m Jim, owner of Rare Finds. I’ve been collecting vinyl since the 90’s,
                                    and have been fortunate enough to see my collection surpass over 100,000
                                    pieces of vinyl. With Rare Finds my goal is to help music fans,
                                    enthusiasts, collectors, producers and others get the vinyl that will
                                    round out their collection or provide inspiration for their next project.
                                </p>
                                <p>
                                    If you’re looking for a specific record, contact me to discuss availability,
                                    price, and shipping. If you are interested in selling a vinyl collection or
                                    are aware of someone who is, let me kow. And if you’re in Amsterdam, stop by and
                                    check out the shop.
                                </p>
                                <p>
                                    If you want to stay abreast on new inventory, sign up for our newsletter.
                                    Every week I provide subscribers with a list of new records that come into
                                    the shop.
                                </p>
                            </div>
                            <div className="newsletterContainer">
                                <EmailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
