import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './midsection.css'
import midSectionImage from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/hero2.png'
import midSectionImageMobile from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/rareFinds2Mobile.png'


export const MidSection = () => {
    return (
        <>
            {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
                <section id="midSection">  {/* normal screen size*/}
                    <Parallax className="midSection" blur={{ min: -15, max: 15 }} strength={500} bgImage={midSectionImage}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .25})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}>
                    </Parallax>
                </section>
            ) : (
                <section id="midSection">  {/* medium screen size*/}
                    <Parallax className="midSection" blur={{ min: -15, max: 15 }} strength={500} bgImage={midSectionImageMobile}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .25})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}>
                    </Parallax>
                </section>
            ) : (
                <section id="midSection">  {/* small screen size*/}
                    <Parallax className="midSection" blur={{ min: -15, max: 15 }} strength={500} bgImage={midSectionImageMobile}
                        renderLayer={percentage => (
                            <div style={{
                                position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .25})`,
                                left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                            }}>

                            </div>
                        )}>
                    </Parallax>
                </section>
            )
            }

        </>

    )
}
