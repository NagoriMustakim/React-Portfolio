import React from 'react'
import './education.css'
import { MdSchool } from 'react-icons/md'
import education_img from '../../assets/eduimg.png'
export const Education = () => {
    return (
        <section id='education'>
            <h5>My degree</h5>
            <h2>Education</h2>
            <div className="container education__container">
                <div className="education__content">
                    <div className="secondary edu-bg">
                <div className="education-icon"><MdSchool /></div>

                        <h5>2017-2018</h5>
                        <h2>Secondary Education</h2>
                        <h3>AGA KHAN SCHOOL - SIDHAPUR</h3>
                    </div>

                    <div className="Higher edu-bg">
                <div className="education-icon"><MdSchool /></div>

                        <h5>2018-2020</h5>
                        <h2>Higher Secondary Education</h2>
                        <h3>KRISHNA SCHOOL OF SCIENCE - PATAN</h3>
                    </div>

                    <div className="Bachelor edu-bg">
                <div className="education-icon"><MdSchool /></div>

                        <h5>2020-Present</h5>
                        <h2>Bachelor of Technology</h2>
                        <h3>GANPAT UNIVERSITY - MEHSANA</h3>
                    </div>

                </div>
                <div className="education-img">
                    <img src={education_img} alt="loading" />
                </div>
            </div>

        </section>
    )
}
