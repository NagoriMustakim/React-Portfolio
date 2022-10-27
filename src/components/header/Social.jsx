import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
export const Social = () => {
    return (
        <div className="header__social">
            <a href="https://github.com" rel="noreferrer" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <a href="https://twitter.com" rel="noreferrer" target="_blank"><AiFillTwitterCircle /></a>

        </div>
    )
}
