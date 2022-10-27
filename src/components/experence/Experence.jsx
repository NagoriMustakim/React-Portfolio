import React from 'react'
import './Experence.css'
import { BsPatchCheckFill } from 'react-icons/bs'
export const Experence = () => {
  return (
    <section id='experence'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__contaner">
        <div className="exeperience__frontend">
          <h3>Frontend Exeperience</h3>
          <div className="experience__content">
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>REACTJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>NEXTJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experience</small>
            </article>
          </div>
        </div>
        <div className="exeperience__backend">
          < h3>Backend Exeperience</h3>
          <div className="experience__content">
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>NODEJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>EXPRESSJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4></h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>REACTJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>NEXTJS</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experiemce__details'>
              <BsPatchCheckFill />
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experience</small>
            </article>
          </div>

        </div>
      </div>
    </section >

  )
}
