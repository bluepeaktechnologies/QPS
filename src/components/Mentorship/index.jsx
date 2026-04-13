import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Mentorship.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mentorship = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const mentorships = [
    {
      id: 1,
      title: "Physical Mentorship",
      image: "https://picsum.photos/id/1015/800/600",
      category: "DTE",
      description: "Master technical analysis, risk management, psychology, and live trade execution with institutional-grade strategies.",
      duration: "6 Weeks",
      level: "Beginner, Intermediate & Advance",
      accent: "#00ff9d",
    },
    {
      id: 2,
      title: "Online Mentorship",
      image: "https://picsum.photos/id/106/800/600",
      category: "DTE",
      description: "Master technical analysis, risk management, psychology, and live trade execution with institutional-grade strategies online.",
      duration: "4 Weeks",
      level: "All Levels",
      accent: "#00b4ff",
    },
    {
      id: 3,
      title: "Course",
      image: "https://picsum.photos/id/201/800/600",
      category: "DTE",
      description: "Subscribe to our course to master technical analysis, risk management, psychology, and live trade execution with institutional-grade strategies.",
      duration: "Downloadable Intrument",
      level: "Beginner → Advanced",
      accent: "#ff00c3",
    },
  ];

  const handleEnroll = () => {
    window.open('https://wa.me/2349120810735?text=Hello%2C%20I%20want%20to%20purchase%20the%20Mentorship%20Program', '_blank'); // ← Replace with your WhatsApp number (country code)
  };

  // Advanced 3D Magnetic Tilt
  const handleMouseMove = useCallback((e, cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 18;
    const rotateY = (centerX - e.clientX) / 18;

    gsap.to(cardEl, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.45,
      ease: "power2.out",
      overwrite: true,
    });
  }, []);

  const handleMouseLeave = useCallback((cardEl) => {
    gsap.to(cardEl, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.85,
      ease: "power3.out",
    });
  }, []);

  // Carousel navigation
  const scrollToIndex = useCallback((index) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setActiveIndex(index);
    }
  }, []);

  // Sync active dot on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0]?.offsetWidth || 400;
      const newIndex = Math.round(scrollLeft / (cardWidth + 30));
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < mentorships.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex, mentorships.length]);

  // Detect mobile for carousel
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1100);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Premium GSAP animations
  useGSAP(() => {
    // Title reveal
    gsap.fromTo('.title, .sub__title', 
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
      }
    );

    // Card entrance with parallax scrub
    const cards = gsap.utils.toArray('.mentorship-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { 
          opacity: 0.2, 
          y: 180, 
          scale: 0.82,
          rotation: (i % 2 === 0 ? -12 : 12)
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "bottom 20%",
            scrub: 1.2,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Image parallax lift
    gsap.utils.toArray('.card-image img').forEach(img => {
      gsap.to(img, {
        yPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="blog" ref={sectionRef} className="mentorship-section">
      <div className="container">
        <h1 className="title"><span className="g-text">MentorShip</span></h1>
        <h6 className="sub__title">Learn from industry veterans • Limited cohorts opening soon</h6>

        <div className="mentorships-wrapper">
          <div 
            className={`mentorships__container ${isMobile ? 'carousel-mode' : ''}`}
            ref={scrollContainerRef}
          >
            {mentorships.map((prog, idx) => (
              <div 
                key={prog.id}
                className="mentorship-card glass-card"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={() => handleMouseLeave(e.currentTarget)}
                style={{ '--accent': prog.accent }}
              >
                <div className="card-image">
                  <img src={prog.image} alt={prog.title} loading="lazy" />
                  <div className="shine-overlay" />
                  <span className="category-badge" style={{ backgroundColor: prog.accent }}>
                    {prog.category}
                  </span>
                </div>

                <div className="details">
                  <h3>{prog.title}</h3>
                  <div className="meta">
                    <span>{prog.duration}</span>
                    <span className="separator">•</span>
                    <span>{prog.level}</span>
                  </div>
                  <p className="description">{prog.description}</p>

                  <button 
                    className="premium-btn"
                    onClick={handleEnroll}
                    aria-label={`Enroll in ${prog.title}`}
                  >
                    <span>Join via WhatsApp</span>
                    <span className="btn-icon">↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Controls */}
          {isMobile && mentorships.length > 1 && (
            <>
              <div className="carousel-controls">
                <button 
                  className="nav-btn prev"
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                >←</button>
                <button 
                  className="nav-btn next"
                  onClick={() => scrollToIndex(Math.min(mentorships.length - 1, activeIndex + 1))}
                >→</button>
              </div>

              <div className="pagination-dots">
                {mentorships.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;