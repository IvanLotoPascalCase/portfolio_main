import React from 'react'
import '../styling/header.css'
import CTA from './CTA'
import me from '../assets/me.png'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi, my name is</h5>
                <h1>Iván Alexis Olivares</h1>
                <h5 className="text-white">Front-End Developer</h5>
                <CTA></CTA>
                <div className='me'>
                    <img src={me} alt="me" />
                </div>
            </div>
        </header>
    )
}

export default Header