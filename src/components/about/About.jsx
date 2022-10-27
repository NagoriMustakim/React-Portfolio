import React from 'react'
import './about.css'
import ME from '../../assets/aboutme.png'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="Loading..." />
        </div>
        <div className="about__content">
          <h3> Hello, my name is <strong>Mustakim</strong>. I am a <strong>blockchain</strong>  and <strong>web developer</strong>  from Gujarat, India. </h3>

          <p>I am working on blockchain projects to make decentralised applications and also freelancing. and Then I devote my time to creating my own products. I love to write blogs about new technologies and I am working on them.</p>
          <p> Thank you</p>
          <a href="#contact" className='btn btn-primary btn-hover-effect'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}
