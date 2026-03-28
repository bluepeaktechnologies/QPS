import React,{useRef} from 'react'
import "./Contact.css"
import { contacts } from '../../data'
import gsap from 'gsap'
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      }
    })
    timeline
    .fromTo(
      ".contact__form",
      {x:-100,opacity:0},
      {opacity:1,x:0}
    )
    .fromTo(
      ".option",
      {x:100,opacity:0},
      {opacity:1,stagger:.5,x:0}
    )
    
  },{scope:container})
  return (
    <section id='contact' ref={container}>
      <div className="container">
        <div className="contact__form">
          <div className="contact__form__top">
            <h1 className="title">
              <span className="g-text">Join QPS Today!</span>
            </h1>
            <p className="text__muted">
               Whether you're a beginner or a pro, our community offers everything from 24/7 mentorship, 
            strategy sharing, live webinars, and trade reviews — all in a supportive environment designed 
            to help you grow.
            </p>
          </div>
          <div className="contact__form__middle">
            <div className="row">
              <input type="text" placeholder='First name' name='firstname' className='control'/>
              <input type="text" placeholder='Last name' name='lastname' className='control'/>
            </div>
            <div className="row">
              <input type="email" placeholder='Email address' name='email' className='control'/>
              <input type="tel" placeholder='Phone number' name='phone' className='control'/>
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="contact__form__bottom">
            <button className="btn btn__primary">Send Now</button>
          </div>
        </div>
        <div className="contact__options">
          {
            contacts.map((contact,index) =>(
              <div className="option" key={index}>
                <div className="icon__container">
                  {contact.icon}
                </div>
                <h3 className="name">{contact.name}</h3>
                <h4 className="text__muted">{contact.value}</h4>
                <div>
                  <a href={"#"} className="btn btn__primary">Contact Us</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Social Links at Bottom */}
<div className="contact__socials">
  <p className="text__muted">Connect with us:</p>
  <div className="social__links">
    <a href="https://t.me/Quantumpipsseekerscommunity" target="_blank" rel="noreferrer">
      <FaTelegramPlane /> Telegram
    </a>
    <a href="https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr" target="_blank" rel="noreferrer">
      <FaInstagram /> Instagram
    </a>
    <a href="https://wa.me/2349120810735" target="_blank" rel="noreferrer">
      <FaWhatsapp /> WhatsApp
    </a>
  </div>
</div>
    </section>
  )
}

export default Contact
