import React from 'react'
import './Experence.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import 'animate.css';
export const Experence = () => {
  return (
    <section id='experence'>
      <h5>What Skills I have</h5>
      <h2>&larr; My Experience  &rarr;</h2>
      <div className="container experience__container">
        <div className="experince__frontend">
          <h3>Blockchain Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>SOLIDITY</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>ETHEREUM</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>SMART-CONTRACT</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>ETHERS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>POLYGON</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>HARDHAT</h4>
            </article>
          </div>
        </div>
        <div className="experince__backend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>REACT</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>NODEJS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>EXPRESSJS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>PYTHON</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>MYSQL</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='icon' />
              <h4>MONGODB</h4>
            </article>
          </div>
        </div>
      </div>

    </section >

  )
}
