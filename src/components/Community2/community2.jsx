import React, { useRef } from 'react';
import Footer from '../Footer';
import './Community2.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { 
  FaTelegramPlane, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube 
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Community2 = () => {
  const container = useRef(null);
  const navigate = useNavigate();

  const socialPlatforms = [
    { 
      icon: <FaTelegramPlane />, 
      name: "Telegram", 
      link: "https://t.me/+CyPNlOCXTslmOGE8",
      color: "#229ED9",
      desc: "Daily signals & live chat"
    },
    { 
      icon: <FaInstagram />, 
      name: "Instagram", 
      link: "https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr",
      color: "#E4405F",
      desc: "Visual breakdowns & stories"
    },
    { 
      icon: <FaTiktok />, 
      name: "TikTok", 
      link: "https://www.tiktok.com/@quantumpipsseekers?_t=ZP-8xcRoc1StaQ&_r=1",
      color: "#000000",
      desc: "Quick tips & market clips"
    },
    { 
      icon: <FaYoutube />, 
      name: "YouTube", 
      link: "https://youtube.com/@quantumpipsseekers?si=SL1SNWzW9-vC9pV_",
      color: "#FF0000",
      desc: "In-depth analysis & replays"
    },
  ];

  const whatYouGain = [
    "Live market insights & signals",
    "Strategy discussions & chart markups",
    "Access to pro mentorship",
    "Community-driven learning",
    "Weekly webinars, Q&As & reviews"
  ];

  const latestDiscussions = [
    "How to trade NFP safely?",
    "GBPJPY markup — breakout or fakeout?",
    "Coach Leo’s latest strategy update"
  ];

  const upcomingEvents = [
    "Sunday Zoom Forecast – 7PM WAT",
    "Midweek Q&A Session – Wed 8PM",
    "Friday Pro Trade Review – 6PM"
  ];

  const downloadables = [
    { name: "📘 Strategy Guide", file: "/files/strategy-guide.pdf" },
    { name: "📊 Lot Size Calculator", file: "/files/lot-size-calculator.xlsx" },
    { name: "🧠 Psychology eBook", file: "/files/psychology-ebook.pdf" },
    { name: "🎥 Last Week Zoom Replay", file: "/files/last-week-session.mp4" },
  ];

  useGSAP(() => {
    // Hero title & subtitle
    gsap.fromTo(['.title', '.sub__title'], 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.3,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 65%" }
      }
    );

    // Social cards stagger + tilt setup
    gsap.from(".social-card", {
      y: 120,
      opacity: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".emphasized-socials", start: "top 80%" }
    });

    // Grid cards parallax scrub
    gsap.utils.toArray('.modern-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0.3, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            scrub: 1.2,
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="project" className="community__section" ref={container}>
      <div className="floating-particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${20 + i * 15}%`, animationDelay: `${i * 2}s` }} />
        ))}
      </div>

      <div className="container">
        {/* Hero */}
        <h1 className="title">Join Our <span className="g-text">Free Trading Communities</span></h1>
        <p className="sub__title">
          Be part of a growing community of smart traders. Get daily insights, signals, mentorship, 
          and real support — completely free.
        </p>

        {/* Social Platform Cards */}
        <div className="emphasized-socials">
          {socialPlatforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.link} 
              target="_blank" 
              rel="noreferrer"
              className="social-card"
              style={{ '--platform-color': platform.color }}
            >
              <div className="social-icon" style={{ color: platform.color }}>
                {platform.icon}
              </div>
              <div className="social-info">
                <h4>{platform.name}</h4>
                <p>{platform.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* What You'll Gain */}
        <div className="modern-grid">
          <div className="modern-card glass-card">
            <h3 className="sub__title">💡 What You’ll Gain</h3>
            <ul className="benefit__list">
              {whatYouGain.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discussions & Events */}
        <div className="modern-grid">
          <div className="modern-card glass-card">
            <h3 className="sub__title">🗣️ Latest Discussions</h3>
            <ul className="benefit__list">
              {latestDiscussions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="modern-card glass-card">
            <h3 className="sub__title">📅 Upcoming Events</h3>
            <ul className="benefit__list">
              {upcomingEvents.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Downloadables */}
        <div className="modern-grid">
          <div className="modern-card glass-card">
            <h3 className="sub__title">📥 Downloadable Tools</h3>
            <div className="download-grid">
              {downloadables.map((item, i) => (
                <a 
                  key={i} 
                  href={item.file} 
                  className="download-btn" 
                  download
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="explore__btn__wrapper">
          <button 
            className="premium-back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back to Overview
          </button>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bottom-cta-banner">
          <p>🔥 Don’t miss out! Join our FREE trading community on Telegram for daily insights and live support.</p>
          <a href="https://t.me/+CyPNlOCXTslmOGE8" className="premium-cta-btn" target="_blank" rel="noreferrer">
            Join Telegram Now
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Community2;