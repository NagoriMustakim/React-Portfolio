import React from 'react'
import './services.css'
import blockchain from '../../assets/blockcjain.png'
import smartcontract from '../../assets/smart-contract.png'
import webdevelopment from '../../assets/webdevelopment.png'
export const Services = () => {
  return (
    <section id='Services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='services'>
          <h3>Blockchain Development</h3>
          <div className="subtittle">
            Building decentralized Application on blockchain
          </div>
          <div className="services-img" >
            <img src={blockchain} alt="loading" />
          </div>
        </article>
        <article className='services'>
          <h3>Smart-contract</h3>
          <div className="subtittle">
            Secure smart contract
          </div>
          <div className="services-img">
            <img src={smartcontract} className='blockchain-img' alt="loading" />
          </div>
        </article>
        <article className='services'>
          <h3>Web Development</h3>
          <div className="subtittle">
            developing a fullstack website </div>
          <div className="services-img">
            <img src={webdevelopment} className='blockchain-img' alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}
