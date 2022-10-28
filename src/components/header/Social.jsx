import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
export const Social = () => {
    return (
        <div className="header__social">
            <a href="https://github.com/NagoriMustakim" rel="noreferrer" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nagori-mustakim/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <a href="https://twitter.com/codeWithSoul" rel="noreferrer" target="_blank"><AiFillTwitterCircle /></a>

        </div>
    )
}
