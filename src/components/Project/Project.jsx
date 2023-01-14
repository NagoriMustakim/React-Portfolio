import React from 'react'
import './project.css'
import { RiCodeBoxFill } from 'react-icons/ri'
import { HiPlay } from 'react-icons/hi'

import nft from '../../assets/nft.png'
import cal from '../../assets/cal.png'
import textutils from '../../assets/text-utils.png'
import imgport from '../../assets/imgport.png'
import nft_market from '../../assets/pr1.png'
const data = [
  {
    id: 1,
    image: nft,
    title: 'THE WIZKY CLUB',
    discription: 'Introducing the world’s first NFT whisky trading',
    github: 'https://github.com/NagoriMustakim/THE-WIZKY-CLUB',
    demo: 'https://the-wizky-club.vercel.app'
  },
  {
    id: 2,
    image: textutils,
    title: 'NFT Minting site',
    discription: 'The Brawlers is a collection which is NOT AUTO-GENERATED',
    github: '',
    demo: 'https://thebrawlers.org'
  },
  {
    id: 3,
    image: nft_market,
    title: 'NFT marketplace',
    discription: 'NFT Marketplace where users can MINT their NFT, BUY and SELL NFT',
    github: 'https://github.com/NagoriMustakim/project-nft-marketplace-frontend',
    demo: 'https://nft-market-iota-eight.vercel.app'
  },
  {
    id: 4,
    image: imgport,
    title: 'Mustakim - Portfolio',
    discription: 'NFT Marketplace where users can BUY and SELL your NFT',
    github: 'https://github.com/NagoriMustakim/Mustakim-Portfolio',
    demo: 'https://nagorimustakim.github.io/Mustakim-Portfolio'
  },
  {
    id: 5,
    image: cal,
    title: 'Text utils',
    discription: 'Text utils where users play with their text',
    github: 'https://github.com/NagoriMustakim/Text-Utils',
    demo: 'https://text-utils-nu-liart.vercel.app'
  }
]
export const Project = () => {

  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {
          data.map(({ id, image, title, discription, github, demo }) => {
            return (
              <article key={id} className='project__item'>
                <h3>{title}</h3>
                <h5>{discription}</h5>

                <div className="project-img">
                  <img src={image} alt="loading..." />
                </div>
                <div className="project-code-icon">
                  <a href={github} rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>

                  <a href={demo} rel="noreferrer" className='' target='_blank'><HiPlay /></a>

                </div>
              </article>
            )
          })
        }
      </div>
    </section>
    // <section id='project'>
    //   <h5>My Recent Works</h5>
    //   <h2>Projects</h2>
    //   <div className="container project__container">
    //     <div className="test">
    //       <article className='project__item'>
    //         <h3>NFT marketplace</h3>
    //         <h5>NFT Marketplace where users can MINT their NFT, BUY and SELL NFT</h5>
    //         <div className="project-img">

    //           <img src={nft_market} alt="loading..." />
    //         </div>
    //         <div className="project-code-icon">
    //           <a href="https://github.com/NagoriMustakim/project-nft-marketplace-frontend" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
    //           <a href="https://nft-market-iota-eight.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

    //         </div>
    //       </article>
    //     </div>
    //     <article className='project__item'>
    //       <h3>NFT Minting site</h3>
    //       <h5>The Brawlers is a collection which is NOT AUTO-GENERATED</h5>

    //       <div className="project-img">
    //         <img src={textutils} alt="loading..." />
    //       </div>
    //       <div className="project-code-icon">
    //         <a href="https://thebrawlers.org/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

    //       </div>
    //     </article>
    //     <article className='project__item'>
    //       <h3>NFT marketplace</h3>
    //       <h5>NFT Marketplace where users can BUY and SELL your NFT</h5>
    //       <div className="project-img">
    //         <img src={nft} alt="loading..." />
    //       </div>
    //       <div className="project-code-icon">
    //         <a href="https://github.com/NagoriMustakim/project-nft-marketplace-frontend" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
    //         <a href="https://project-nft-marketplace-frontend-nagorimustakim.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

    //       </div>
    //     </article>
    //     <article className='project__item'>
    //       <h3>Text utils</h3>
    //       <h5>Text utils where users play with their text</h5>

    //       <div className="project-img">
    //         <img src={cal} alt="loading..." />
    //       </div>
    //       <div className="project-code-icon">
    //         <a href="https://github.com/NagoriMustakim/Text-Utils" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
    //         <a href="https://text-utils-nu-liart.vercel.app/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>

    //       </div>
    //     </article>
    //     <article className='project__item'>
    //       <h3>Mustakim - Portfolio</h3>
    //       <h5>Sample portfolio website made in plane html and css</h5>
    //       <div className="project-img">
    //         <img src={imgport} alt="loading..." />
    //       </div>
    //       <div className="project-code-icon">
    //         <a href="https://github.com/NagoriMustakim/Mustakim-Portfolio" rel="noreferrer" className='' target='_blank'><RiCodeBoxFill /></a>
    //         <a href="https://nagorimustakim.github.io/Mustakim-Portfolio/" rel="noreferrer" className='' target='_blank'><HiPlay /></a>
    //       </div>
    //     </article>
    //   </div>
    // </section>
  )
}

