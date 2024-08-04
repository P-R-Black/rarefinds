import React from 'react'
import { customerReviews } from './ValidationAPI'
import { Parallax, Background } from 'react-parallax';

import './validation.css'
import vinylLabels from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/All45s.png'
import img45s from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/45s.png'


export const Validation = () => {
    // {/* <div className="container">
    //         <div className="validationContainer">
    //             <ul className="reviewListUl" style={{ animationDuration: `${(customerReviews.length * 1000) / 20}s` }}>
    //                 {customerReviews.map((cr) => (
    //                     <li className="reviewBox" key={cr.reviewId}>
    //                         <p className="custReview">{cr.customerReview}</p>
    //                         <div className="nameLocationContainer">
    //                             <p className="custName">{cr.customerName},</p>
    //                             <p className="custLocation">{cr.customerLocation}</p>
    //                         </div>
    //                     </li>
    //                 ))}

    //                 {customerReviews.map((cr) => (
    //                     <li className="reviewBox" key={cr.reviewId}>
    //                         <p className="custReview">{cr.customerReview}</p>
    //                         <div className="nameLocationContainer">
    //                             <p className="custName">{cr.customerName}</p>
    //                             <p className="custLocation">{cr.customerLocation}</p>
    //                         </div>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div> */}
    console.log('test length', customerReviews.length)
    return (
        <section className="validationSection">
            <Parallax blur={{ min: -15, max: 15 }} strength={500} renderLayer={percentage => (
                <div style={{
                    position: 'absolute', background: `rgba(0, 0, 0, ${percentage * .50})`,
                    left: '0%', top: '0%', width: percentage * 4000, height: percentage * 4000,
                }}>

                </div>
            )}>
                <Background className='custom-bg' >
                    <img src={vinylLabels} alt="" />
                </Background>
                <div className="container">
                    <div className="validationContainer">
                        <ul className="reviewListUl" style={{ animationDuration: `${(customerReviews.length * 1000) / 20}s` }}>
                            {customerReviews.map((cr) => (
                                <li className="reviewBox" key={cr.reviewId}>
                                    <p className="custReview">{cr.customerReview}</p>
                                    <div className="nameLocationContainer">
                                        <p className="custName">{cr.customerName},</p>
                                        <p className="custLocation">{cr.customerLocation}</p>
                                    </div>
                                </li>
                            ))}

                            {customerReviews.map((cr) => (
                                <li className="reviewBox" key={cr.reviewId}>
                                    <p className="custReview">{cr.customerReview}</p>
                                    <div className="nameLocationContainer">
                                        <p className="custName">{cr.customerName}</p>
                                        <p className="custLocation">{cr.customerLocation}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Parallax>

        </section>
    )
}
