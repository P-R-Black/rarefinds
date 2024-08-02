import React, { FormEvent } from 'react'
import { Logo } from '../logo/Logo'
import { Link } from 'react-router-dom'
import './navigation.css'

type Props = {}

export const Navigation: React.FC<{}> = () => {

    const showNavMenu = (e: FormEvent) => {
        e.preventDefault()
        let navBarMenu = document.querySelector('.navbarMenu')
        let hamburgerMenu = document.querySelector('.hambergerMenu')
        let visibility = navBarMenu?.getAttribute('data-visible')

        if (visibility === "false") {
            hamburgerMenu?.setAttribute('aria-expanded', 'true')
            navBarMenu?.setAttribute('data-visible', 'true')
        } else {
            navBarMenu?.setAttribute('data-visible', 'false')
            hamburgerMenu?.setAttribute('aria-expaned', 'false')
        }

    }
    return (
        <header>
            <div className="container headerContainer">
                <div className="logoContainer">
                    <Logo />
                </div>
                <nav className="navigationContainer">
                    <ul className="navBarMenu">
                        <Link to={"/"} className='navbarItems'><h3>{"About"}</h3></Link>
                        <Link to={"/"} className='navbarItems'><h3>{"Contact"}</h3></Link>
                    </ul>
                    <div className="hamburgerMenu" id="mobileMenu" aria-controls="navbarMenu"
                        aria-expanded="false" onClick={showNavMenu}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
