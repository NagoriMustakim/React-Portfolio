import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
export const Social = () => {
    return (
        <div className="header__social">
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle/></a>

        </div>
    )
}
