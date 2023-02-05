import React from 'react'
import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
    return (


        <div className='flex justify-center bg-primary-alt top-0 relative gap-10 hero-background'>
            <div className='flex items-center justify-center flex-col text-center pb-6' >
                <h1 className='text-8xl font-bold font-pf-dp text-f-primary py-10'>
                    Iván "Loto" Olivares
                </h1>
                <p className='text-2xl font-normal italic text-f-secondary py-2'>Front-End Developer and Software Engineer</p>
            </div>
            <div className='flex items-center justify-center flex-col text-center pb-6'>
                <img className='object-scale-down h-[60%] w-100 py-10' src={profilePhoto} alt="Me" />
            </div>
        </div>
    )
}

export default Hero