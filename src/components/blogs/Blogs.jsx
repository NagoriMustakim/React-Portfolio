import React from 'react'
import './blogs.css'
import coming from '../../assets/coming.png'
export const Blogs = () => {
    return (
        <section id='blogs'>
            <h5>My blogs</h5>
            <h2>Top blogs</h2>
            <div className="container blogs__container">
                <img src={coming} alt="coming soon..." />
            </div>
        </section>
    )
}
