import React from 'react'
import './aboutPhotos.css'
import imgTwo from './../../../../../src/Assets/rfPicsCopy.jpg'

export const AboutPhotos = () => {
    return (
        <section className='aboutPhotoSection'>
            <div className="aboutPhotoContainer">
                <div className="aboutImageContainer">
                    <img src={imgTwo} alt={"Jim, ownner of Rare Finds"} />
                </div>
            </div>
            <figcaption>Jim, the owner of Rare Finds</figcaption>
        </section>
    )
}
