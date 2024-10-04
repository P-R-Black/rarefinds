import React from 'react'
import './about.css'
import { EmailForm } from '../../NewsletterSubComponents/newsletterSubs/EmailForm';
import { AboutPhotos } from './aboutPhotos/AboutPhotos';

export const About: React.FC = () => {
    return (
        <section id="aboutSection" className="aboutSection" aria-label="aboutTitle">

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
                            <div className="ownerParagraphContainer" aria-labelledby="ownerTitle">
                                <p>
                                    I’m Jim, owner of Rare Finds. I’ve been collecting vinyl since the 90’s,
                                    and have been fortunate enough to see my collection surpass over 100,000
                                    pieces of vinyl. With more records on my hands than I have the time to listen
                                    to, I opened Rare Finds with the goal of helping music fans, enthusiasts,
                                    collectors, producers and others get the vinyl that will round out their
                                    collection or provide inspiration for their next project.
                                </p>
                                <p>
                                    <strong style={{ color: "#fef100" }}>If you’re looking for a record</strong>, contact us to discuss
                                    availability, price, and shipping. If you are interested in selling a vinyl
                                    collection or are aware of someone who is, let us know. And if you’re in
                                    Amsterdam, stop by the shop and enjoy a coffee and some vinyl.
                                </p>
                                <p>
                                    If you want to stay abreast of new inventory, sign up for our newsletter.
                                    Every week I provide subscribers with a list of new records that have come
                                    into the shop.
                                </p>
                            </div>
                            <div className="newsletterContainer">
                                <EmailForm aria-label="Newsletter signup form" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
