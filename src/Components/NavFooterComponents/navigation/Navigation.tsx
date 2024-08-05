import React, { FormEvent } from 'react'
import { Logo } from '../logo/Logo'
import { HashLink } from 'react-router-hash-link'

import './navigation.css'

type Props = {}

export const Navigation: React.FC<{}> = () => {

    const showNavMenu = (e: FormEvent) => {

        e.preventDefault()

        let navBarMenu = document.querySelector('.navBarMenu')
        let hamburgerMenu = document.querySelector('.hamburgerMenu')
        let visibility = navBarMenu?.getAttribute('data-visible')

        if (visibility === "false") {
            hamburgerMenu?.setAttribute('aria-expanded', 'true')
            navBarMenu?.setAttribute('data-visible', 'true')
        } else {
            // visibility = "true";
            navBarMenu?.setAttribute('data-visible', 'false')
            hamburgerMenu?.setAttribute('aria-expanded', 'false')
        }

    }
    return (
        <>
            {window.innerWidth < 600 ? (<header>
                <div className="container headerContainer">
                    <div className="logoContainer">
                        <Logo />
                    </div>
                    <nav className="navigationContainer">
                        <ul className="navBarMenu" data-visible="false">
                            <HashLink to={"/#aboutSection"} className='navbarItems'><h3>{"About"}</h3></HashLink>
                            <HashLink to={"/#contactSection"} className='navbarItems'><h3>{"Contact"}</h3></HashLink>
                        </ul>
                        <div className="hamburgerMenu" id="mobileMenu" aria-controls="navBarMenu"
                            aria-expanded="false" onClick={showNavMenu}>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>
                    </nav>
                </div>
            </header>) : (<header>
                <div className="container headerContainer">
                    <div className="logoContainer">
                        <Logo />
                    </div>
                    <nav className="navigationContainer">
                        <ul className="navBarMenu">
                            <HashLink to={"/#aboutSection"} className='navbarItems'><h3>{"About"}</h3></HashLink>
                            <HashLink to={"/#contactSection"} className='navbarItems'><h3>{"Contact"}</h3></HashLink>
                        </ul>
                        <div className="hamburgerMenu" id="mobileMenu">
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>
                    </nav>
                </div>
            </header>)}
        </>
    )
}
