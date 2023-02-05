import React from 'react'
import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
    return (


        <div className='flex justify-center bg-primary-alt top-0 relative gap-10 bg-hero-background bg-cover h-[1100px]'>
            <div className='flex items-center justify-start flex-col text-center pb-4 mt-10' >
                <h1 className='text-8xl font-bold font-pf-dp text-f-primary pt-10'>
                    Iván Olivares
                </h1>
                <h4 className='text-2xl font-bold font-pf-dp text-f-primary-200 py-5'>
                    "loto"
                </h4>
                <p className='text-2xl font-semibold italic text-f-secondary pb-2'>Front-End Developer and Software Engineer.</p>
                <p className='text-2xl font-normal italic text-f-secondary pb-2'>Chilean Developer, 24 years old from Valparaíso.</p>
            </div>
        </div>
    )
}

export default Hero