import React from 'react'
import { Hero } from '../../Components/HomePageComponents/hero/Hero'
import { About } from '../../Components/HomePageComponents/about/About'
import { Contact } from '../../Components/HomePageComponents/contact/Contact'
import { MidSection } from '../../Components/HomePageComponents/midsection/MidSection'
import { Validation } from '../../Components/HomePageComponents/validation/Validation'
export const HomePage = () => {
    return (
        <div>
            <Hero />
            <MidSection />
            <About />
            <Validation />
            <Contact />
        </div>
    )
}
