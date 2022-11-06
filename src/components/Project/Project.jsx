import React from 'react'
import './project.css'
import { RiCodeBoxFill } from 'react-icons/ri'
import { HiPlay } from 'react-icons/hi'

import nft from '../../assets/nft.png'
import cal from '../../assets/cal.png'
import textutils from '../../assets/text-utils.png'
import imgport from '../../assets/imgport.png'
import nft_market from '../../assets/pr1.png'

export const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <div className="test">
        <article className='project__item'>
          <h3>This nft marketplace</h3>
          <h5>NFT Marketplace where users can MINT their NFT, BUY and SELL NFT</h5>
          <div className="project-img">

            <img src={nft_market} alt="loading..." />
          </div>
          <div className="project-code-icon">
            <a href="https://github.com/NagoriMustakim/project-nft-marketplace-frontend" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
            <a href="https://nft-market-iota-eight.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

          </div>
        </article>
        </div>
        <article className='project__item'>
          <h3>Web 3 calculator</h3>
          <h5>WEB-3 calculator where users can interact with blockchain</h5>

          <div className="project-img">
            <img src={textutils} alt="loading..." />
          </div>
          <div className="project-code-icon">
            <a href="https://github.com/NagoriMustakim/web-3-calculator" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill/></a>
            <a href="https://nagorimustakim.github.io/web-3-calculator/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

          </div>
        </article>
        <article className='project__item'>
          <h3>This nft marketplace</h3>
          <h5>NFT Marketplace where users can BUY and SELL your NFT</h5>
          <div className="project-img">
            <img src={nft} alt="loading..." />
          </div>
          <div className="project-code-icon">
            <a href="https://github.com/NagoriMustakim/project-nft-marketplace-frontend" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
            <a href="https://project-nft-marketplace-frontend-nagorimustakim.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

          </div>
        </article>
        <article className='project__item'>
          <h3>Text utils</h3>
          <h5>Text utils where users play with their text</h5>

          <div className="project-img">
            <img src={cal} alt="loading..." />
          </div>
          <div className="project-code-icon">
            <a href="https://github.com/NagoriMustakim/Text-Utils" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
            <a href="https://text-utils-nu-liart.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

          </div>
        </article>
        <article className='project__item'>
          <h3>Mustakim - Portfolio</h3>
          <h5>Sample portfolio website made in plane html and css</h5>
          <div className="project-img">
            <img src={imgport} alt="loading..." />
          </div>
          <div className="project-code-icon">
            <a href="https://github.com/NagoriMustakim/Mustakim-Portfolio" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
            <a href="https://nagorimustakim.github.io/Mustakim-Portfolio/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>
          </div>
        </article>
      </div>
    </section>
  )
}

