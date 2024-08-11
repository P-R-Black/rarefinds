import React from 'react'
import './hero.css'
import { Parallax } from 'react-parallax';
import heroBgImage2 from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/rareFindsHero.png'
import heroBgImageMobile2 from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/rareFinds2Mobile.png'
import { HashLink } from 'react-router-hash-link';



export const Hero = () => {
    return (
        <>
            {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
                <section id="heroSection" className="indexBackground"> {/* normal screen size*/}
                    <Parallax blur={{ min: -15, max: 15 }} strength={500} bgImage={heroBgImage2}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .60})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}
                    >
                        <div className="container">
                            <div className="homePageContainer">
                                <div className="titleContainer">
                                    <div className="words">
                                        <span>Jazz</span>
                                        <span>Rock</span>
                                        <span>Hip-Hop</span>
                                        <span>Dance</span>
                                        <span>Pop</span>
                                        <span>R&B</span>
                                        <span>Soul</span>
                                        <span>Salsa</span>
                                        <span>City Pop</span>
                                        <span>Classical</span>
                                        <span>Heavy Metal</span>
                                        <span>Dance Hall</span>
                                        <span>Reggae</span>
                                        <span>Ska</span>
                                        <span>Bebop</span>
                                        <span>Techno</span>
                                        <span>Bossa Nova</span>
                                        <span>Rancheras</span>
                                        <span>Country</span>
                                        <span>Punk Rock</span>
                                        <span>Jazz</span>
                                    </div>
                                    <h2 className={`titleContainerH2`}>for collectors and enthusiasts</h2>
                                </div>
                                <div className="contactButtonBar">
                                    <button className="heroContactButton">
                                        <HashLink to={'/#contactSection'}>Contact</HashLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </section>
            ) : (
                <section id="heroSection" className="indexBackground"> {/* medium screen size*/}
                    <Parallax blur={{ min: -15, max: 15 }} strength={500} bgImage={heroBgImage2}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .60})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}
                    >
                        <div className="container">
                            <div className="homePageContainer">
                                <div className="titleContainer">
                                    <div className="words">
                                        <span>Jazz</span>
                                        <span>Rock</span>
                                        <span>Hip-Hop</span>
                                        <span>Dance</span>
                                        <span>Pop</span>
                                        <span>R&B</span>
                                        <span>Soul</span>
                                        <span>Salsa</span>
                                        <span>City Pop</span>
                                        <span>Classical</span>
                                        <span>Heavy Metal</span>
                                        <span>Dance Hall</span>
                                        <span>Reggae</span>
                                        <span>Ska</span>
                                        <span>Bebop</span>
                                        <span>Techno</span>
                                        <span>Bossa Nova</span>
                                        <span>Rancheras</span>
                                        <span>Country</span>
                                        <span>Punk Rock</span>
                                        <span>Jazz</span>
                                    </div>
                                    <h2 className={`titleContainerH2`}>for collectors and enthusiasts</h2>
                                </div>
                                <div className="contactButtonBar">
                                    <button className="heroContactButton">
                                        <HashLink to={'/#contactSection'}>Contact</HashLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </section>
            ) : (
                <section id="heroSection" className="indexBackground"> {/* small screen size*/}
                    <Parallax blur={{ min: -15, max: 15 }} strength={500} bgImage={heroBgImageMobile2}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .60})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}
                    >
                        <div className="container">
                            <div className="homePageContainer">
                                <div className="titleContainer">
                                    <div className="words">
                                        <span>Jazz</span>
                                        <span>Rock</span>
                                        <span>Hip-Hop</span>
                                        <span>Dance</span>
                                        <span>Pop</span>
                                        <span>R&B</span>
                                        <span>Soul</span>
                                        <span>Salsa</span>
                                        <span>City Pop</span>
                                        <span>Classical</span>
                                        <span>Heavy Metal</span>
                                        <span>Dance Hall</span>
                                        <span>Reggae</span>
                                        <span>Ska</span>
                                        <span>Bebop</span>
                                        <span>Techno</span>
                                        <span>Bossa Nova</span>
                                        <span>Rancheras</span>
                                        <span>Country</span>
                                        <span>Punk Rock</span>
                                        <span>Jazz</span>
                                    </div>
                                    <h2 className={`titleContainerH2`}>for collectors and enthusiasts</h2>
                                </div>
                                <div className="contactButtonBar">
                                    <button className="heroContactButton">
                                        <HashLink to={'/#contactSection'}>Contact</HashLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </section>
            )
            }

        </>
    )
}

