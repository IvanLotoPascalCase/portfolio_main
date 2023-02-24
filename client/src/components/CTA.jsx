import React from 'react'
import CV from '../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
            <a href={CV} download className='btn'>Curriculum</a>
        </div>
    )
}

export default CTA