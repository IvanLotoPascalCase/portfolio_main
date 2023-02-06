import React from 'react'
import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
    return (
        <div className='flex items-start justify-center bg-primary-alt top-0 relative bg-hero-background bg-cover h-[1100px] pt-20'>
            <div className='grid grid-cols-2 gap-10 '>
                <div className='flex items-end justify-center flex-col text-center pb-4' >
                    <h1 className='text-8xl font-bold font-pf-dp text-f-primary pt-10'>
                        Iván Olivares
                    </h1>
                    <h4 className='text-2xl font-bold font-pf-dp text-f-primary-200 py-5'>
                        "loto"
                    </h4>
                    <p className='text-2xl font-semibold italic text-f-secondary pb-2'>Front-End Developer and Computing Engineer.</p>
                    <p className='text-2xl font-normal italic text-f-secondary pb-2'>Chilean Developer, 24 years old from Valparaíso.</p>
                </div>
                <div className='flex rounded-lg items-start justify-center flex-col text-center pb-4'>
                    <img className='object-cover w-[50%]' src={profilePhoto} alt="Me" />
                </div>
            </div>
        </div>
    )
}

export default Hero