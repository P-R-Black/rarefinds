import React from 'react'
import './aboutPhotos.css'
import imgOne from './../../../../../src/Assets/rfPics-removebg.png'
import imgTwo from './../../../../../src/Assets/rfPicsCopy.jpg'

export const AboutPhotos = () => {
    return (
        <section className='aboutPhotoSection'>
            <div className="aboutPhotoContainer about__me">
                <div className="aboutImageContainer about__me_image">
                    <img src={imgTwo} alt="" />
                </div>
            </div>
        </section>
    )
}
