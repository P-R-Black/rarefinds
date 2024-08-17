import React, { useEffect } from 'react'
import { customerReviews } from './ValidationAPI'
import { Parallax, Background } from 'react-parallax';

import './validation.css'
import vinylLabels from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/All45s.png'


export const Validation = () => {

    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", "false");

            const scrollerInner = scroller.querySelector('.scroller__inner');
            if (scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);


                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute('aria-hidden', "true");
                    scrollerInner.appendChild(duplicatedItem)
                })
            }
        })
    }


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
                    <div className="scroller" data-animated="true" data-speed="slow">
                        <ul className="tag_list scroller__inner">
                            {customerReviews.map((cr) => (
                                <li className="reviewBox" key={cr.reviewId}>
                                    <h3>Rare Find Reviews</h3>
                                    <p className="custReview">{cr.customerReview}</p>
                                    <div className="nameLocationContainer">
                                        <p className="custName">{cr.customerName},</p>
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