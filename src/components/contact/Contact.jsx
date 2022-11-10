import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_etxplll', 'template_iyky0xj', form.current, '5xHaW4jdBtCqptz1l')
    alert("Your form is successfully submited")
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* contact option wheather mail or wp or insta */}
          <article className='contact__social'>
            {/* icons */}
            <MdEmail className='icon' />
            <h4>Email</h4>
            <h5>mustakimkhan1111176@gmail.com</h5>
            <a href="mailto:mustakimkhan1111176@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__social'>
            {/* icons */}
            <FaWhatsapp className='icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9313067765</h5>
            <a href="https://api.whatsapp.com/send?phone=919313067765&text=helo I am " target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your Name' required />
          <input type="email" name='email' placeholder='Enter your Email' required />
          <textarea name="message" placeholder='Your Message' rows={7} required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}
