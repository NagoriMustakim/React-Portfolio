import React from 'react'
import resume from '../../assets/cv.pdf'
export const Cta = () => {
    return (
        <div className="cta">
            <a href={resume} download className='btn'>Download CV</a>
            <a href="#contact" className='btn'>Lets connect</a>
        </div>
    )
}
