import React from 'react'
import { Cta } from './Cta'
import me from '../../assets/removedbg.png'
import { Social } from './Social'
import './header.css'
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Helo I am</h5>
        <h1>Mustakim</h1>
        <h3 className="text-light">FullStack Blockchain Developer</h3>
        <Cta></Cta>
        <Social></Social>
        <a href="#contact" className='scroll__down'>Scroll down &rarr;</a>
        <div className="me">
          <img src={me} alt="loading" />
        </div>
      </div>

    </header>
  )
}
