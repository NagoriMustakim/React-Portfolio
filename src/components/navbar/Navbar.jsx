import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'
import { MdMiscellaneousServices, MdEmail } from 'react-icons/md'
import './navbar.css'
import { useState } from 'react'
export const Navbar = () => {
  const [active, setActive] = useState()
  const home = () => {
    setActive('#')
  }
  const about = () => {
    setActive('#about')
  }
  const services = () => {
    setActive('#Services')
  }
  const contact = () => {
    setActive('#contact')
  }
  const blogs = () => {
    setActive('#blogs')
  }
  return (
    <nav>
      <a href='#' onClick={home} className={active === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#blogs' onClick={blogs} className={active === '#blogs' ? 'active' : ''}><SiEthereum /></a>
      <a href='#about' onClick={about} className={active === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href='#Services' onClick={services} className={active === '#Services' ? 'active' : ''}><MdMiscellaneousServices /></a>
      <a href='#contact' onClick={contact} className={active === '#contact' ? 'active' : ''}><MdEmail /></a>
    </nav>

  )
}
