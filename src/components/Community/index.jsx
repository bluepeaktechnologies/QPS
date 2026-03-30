import React, { useRef, useCallback } from 'react';
import './Community.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const container = useRef(null);
  const navigate = useNavigate();

  const benefits = [
    "24/7 Live Chat & Instant Support",
    "Real-time Market Analysis & Signals",
    "Weekly Live Webinars & Mentorship",
    "Personalized Trade Reviews",
    "Exclusive Strategy Vault & Sharing",
    "Vibrant Trader Network & Accountability"
  ];

  const handleExploreClick = () => {
    navigate('/Community2');
  };

  // Advanced 3D Magnetic Tilt
  const handleMouseMove = useCallback((e, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -25;

    gsap.to(card, {
      rotationY: x,
      rotationX: y,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
  }, []);

  const handleMouseLeave = useCallback((card) => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 1.1,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    // Title reveal with split effect
    tl.fromTo('.title .g-text', 
      { y: 120, opacity: 0, rotationX: -30 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.4, ease: "power4.out" }
    )
    .from('.title', { opacity: 0.6, duration: 1 }, "-=0.8");

    // Benefits cards parallax stack
    gsap.utils.toArray('.benefit-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { 
          y: 180 + i * 20, 
          opacity: 0.15, 
          scale: 0.78,
          rotation: i % 2 === 0 ? -6 : 6 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "bottom 20%",
            scrub: 1.8,
          }
        }
      );
    });

    // Floating particles animation
    gsap.to('.particle', {
      y: -180,
      opacity: 0.6,
      duration: 18,
      stagger: 3,
      repeat: -1,
      ease: "none",
    });

    // CTA button entrance
    gsap.fromTo('.premium-cta', 
      { scale: 0.4, y: 60, opacity: 0 },
      { 
        scale: 1, 
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: '.explore__btn__wrapper', start: "top 90%" }
      }
    );
  }, { scope: container });

  return (
    <section id="project" className="community__section" ref={container}>
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${15 + i * 12}%`, animationDelay: `${i * 1.2}s` }} />
        ))}
      </div>

      <div className="container">
        <h1 className="title">Join Our <span className="g-text">Community</span></h1>

        <div className="community__content">
          <div className="community__left">
            <h3 className="sub__title">
              Empower your trading journey with live support, collaboration, and expert guidance.
            </h3>
            <p className="description">
              Whether you're a beginner or a seasoned pro, our community delivers 24/7 mentorship, 
              real-time strategy sharing, live webinars, and trade reviews in a high-vibration environment 
              built for consistent growth and profitability.
            </p>
          </div>

          <div className="community__right">
            <h3 className="sub__title">What You'll Gain:</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="benefit-card glass-card"
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={() => handleMouseLeave(e.currentTarget)}
                >
                  <div className="benefit-glow" />
                  <div className="benefit-icon">✦</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="explore__btn__wrapper">
          <button 
            className="premium-cta"
            onClick={handleExploreClick}
          >
            Explore the Full Community
            <span className="cta-shine" />
          </button>
        </div>

        <div className="community__socials">
          <p className="join-text">Or connect with us instantly:</p>
          <div className="social__icons">
            <a className="social__btn telegram" href="https://t.me/+CyPNlOCXTslmOGE8" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
              <span>Telegram</span>
            </a>
            <a className="social__btn instagram" href="https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr" target="_blank" rel="noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a className="social__btn whatsapp" href="https://wa.me/2349120810735" target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;