import React from 'react'
import './hero.css'
import { Parallax, Background } from 'react-parallax';
import heroBgImage from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/rareFinds.png'


export const Hero = () => {
    //  {(window.innerWidth > 600) ? (window.innerWidth > 1080) ? (
    //             <section id="heroSection" className="indexBackground"> {/* normal screen size*/}
    //             <Parallax blur={{ min: -15, max: 15 }} strength={500}
    //             bgImage={heroBgImage}
    //             bgImageAlt={""}
    //         >
    //             <div className="container">
    //                 <div className="homePageContainer">
    //                     <div className="titleContainer">
    //                         <h1 className={`titleContainerH1`}>Rare Finds</h1>
    //                     </div>
    //                     <div className={`horizonalDivider`}></div>
    //                 </div>
    //             </div>
    //             <div className="custom_bg" />
    //         </Parallax>
    //     </section>) : (
    //     <section id="heroSection" className="indexBackground">  {/* medium screen size*/}
    //         <Parallax blur={{ min: -15, max: 15 }} strength={500}
    //             bgImage={heroBgImage}
    //         >
    //             <div className="container">
    //                 <div className="homePageContainer">
    //                     <div className="titleContainer">
    //                         <h1 className={`titleContainerH1`}>Rare Finds</h1>
    //                     </div>

    //                 </div>
    //             </div>

    //             <div className="custom_bg" />
    //         </Parallax>
    //     </section>) : (
    // <section id="heroSection" className="indexBackground"> {/* small screen size*/}
    //     <Parallax blur={{ min: -15, max: 15 }} strength={500}
    //         bgImage={heroBgImage}
    //     >
    //         <div className="container">
    //             <div className="homePageContainer">
    // <div className="titleContainer">
    //     <h1 className={`titleContainerH1`}>Rare Finds</h1>
    // </div>
    //             </div>
    //         </div>
    //         <div className="custom_bg" />
    //     </Parallax>
    // </section>
    // )}
    return (
        <>

            <section id="heroSection" className="indexBackground">
                <Parallax blur={{ min: -15, max: 15 }} strength={500} bgImage={heroBgImage}
                    renderLayer={percentage => (
                        <div style={{
                            position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .25})`,
                            left: '0%', top: '0%', width: percentage * 2000, height: percentage * 2000,
                        }}>

                        </div>
                    )}
                >
                    <div className="container">
                        <div className="homePageContainer">
                            <div className="titleContainer">
                                <h1 className={`titleContainerH1`}>Rare Finds</h1>
                                <h2 className={`titleContainerH1`}>Vinyl Shop</h2>
                            </div>
                            <div className="paragraphContainer">
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
                                    <span>Jazz</span>
                                </div>
                                <p>for collectors and enthusiasts</p>

                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>


        </>
    )
}
