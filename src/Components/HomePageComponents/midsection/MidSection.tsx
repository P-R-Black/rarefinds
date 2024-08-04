import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './midsection.css'
import midSectionImage from '/Users/paulblack/VS Code/RareFinds/rarefinds/src/Assets/hero2.png'


export const MidSection = () => {
    return (
        <section id="midSection">
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
    )
}
