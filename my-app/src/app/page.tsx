'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
// data imports
import { activities, Activity } from '@/app/data/activities';
import { galleryImages } from '@/app/data/gallery';
import { faqs, FAQ } from '@/app/data/faqs';
import { aboutData } from '@/app/data/about';
import { useScrollAnimation } from '@/app/components/useScrollAnimation';

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const activitiesRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [selectedAboutInfo, setSelectedAboutInfo] = useState<number | null>(null);
  const [showNav, setShowNav] = useState(false);
  // custom hooks
  const counterRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }

    const targetDate = new Date('2025-01-04T00:00:00')
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const galleryScroll = document.querySelector('.home-component-gallery-content') as HTMLElement;
    if (galleryScroll) {
      const scrollWidth = galleryScroll.scrollWidth;
      const animationDuration = scrollWidth / 50; 

      galleryScroll.style.setProperty('--scroll-width', `${scrollWidth}px`);
      galleryScroll.style.setProperty('--animation-duration', `${animationDuration}s`);
      galleryScroll.classList.add('scrolling');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.home-component-hero');
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        const scrollPosition = window.scrollY;
        
        setShowNav(scrollPosition > heroHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const scrollActivities = (direction: 'left' | 'right') => {
    if (activitiesRef.current) {
      const scrollAmount = activitiesRef.current.offsetWidth;
      activitiesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-component">
      <div className={`home-component-nav ${showNav ? 'visible' : ''}`}>
        <Navigation />
      </div>

      <div className="home-component-hero" id="hero">
        <video ref={videoRef} autoPlay loop muted playsInline>
            <source src="/HeroVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="home-component-sections">
        <div className="home-component-sections-in">
          {/*---------------------------------------- home counter section ----------------------------------------*/}
          <div className="home-component-counter scroll-hidden" ref={counterRef}>
            <div className="home-component-counter-heading">  
              <h2>Event Starts In:</h2>
            </div>
            <div className="home-component-counter-content">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="home-component-counter-item">
                  <div className="home-component-counter-card">
                    <div className="home-component-counter-value">{value.toString().padStart(2, '0')}</div>
                    <div className="home-component-counter-unit">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------------- about info section ----------------------------------------*/}
          <div className="home-component-about-info scroll-hidden" ref={aboutRef} id="about-info">
            <div className="home-component-about-info-heading">
              <h2>About The Festival</h2>
            </div>
            <div className="home-component-about-info-grid">
              {aboutData.map((item, index) => (
                <div key={index} className="home-component-about-info-card">
                  <div className="about-info-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button 
                      className="about-info-button"
                      onClick={() => setSelectedAboutInfo(index)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      

          {/*---------------------------------------- events section ----------------------------------------*/}
          <div className="home-component-events scroll-hidden" ref={eventsRef} id="events">
            <div className="home-component-events-heading">
              <h2>Get to know our events</h2>
            </div>
            <div className="home-component-events-wrapper">
              <div className="home-component-events-content" ref={activitiesRef}>
                {activities.map((activity: Activity) => (
                  <div key={activity.id} className="home-component-event-card">
                    <div className="home-component-event-card-image">
                      <Image  src={activity.image} alt={activity.title} 
                        width={600}
                      height={600}
                        layout="responsive"
                      />
                    </div>
                    <div className="home-component-event-card-overlay">
                      {/* <h3 className="home-component-event-card-title">{activity.title}</h3> */}
                      <button className="home-component-event-card-button" onClick={() => setSelectedActivity(activity)}>
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="home-component-events-nav">
              <button className="home-component-events-nav-btn" onClick={() => scrollActivities('left')}>&lt;</button>
              <button className="home-component-events-nav-btn" onClick={() => scrollActivities('right')}>&gt;</button>
            </div>
          </div>

          {/*---------------------------------------- gallery section ----------------------------------------*/}
          <div className="home-component-gallery scroll-hidden" ref={galleryRef} id="gallery">
            <div className="home-component-gallery-heading">
              <h2>Gallery</h2>
            </div>
            <div className="home-component-gallery-scroll">
              <div className="home-component-gallery-content">
                {galleryImages.map((image: string, index: number) => (
                  <div key={index} className="home-component-gallery-image-wrapper">
                    <Image 
                      src={image} 
                      alt={`Gallery image ${index + 1}`} 
                      className="home-component-gallery-image" 
                      width={600}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*---------------------------------------- faq section ----------------------------------------*/}
          <div className="home-component-faq scroll-hidden" ref={faqRef} id="faq">
            <div className="home-component-faq-heading">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="home-component-faq-content">
              {faqs.map((faq: FAQ, index: number) => (
                <div key={index} className="home-component-faq-item">
                  <h3 
                    className="home-component-faq-question" 
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </h3>
                  <p className={`home-component-faq-answer ${openFaqIndex === index ? 'open' : ''}`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*---------------------------------------- footer section ----------------------------------------*/}
      <div className="home-component-footer">
        <Footer />
      </div>
      {/*---------------------------------------- modal section for activities ----------------------------------------*/}
      {selectedActivity && (
        <Modal onClose={() => setSelectedActivity(null)}>
          <div className="home-component-modal-content">
            <div className="home-component-modal-image">
              <Image  src={selectedActivity.image} alt={selectedActivity.title} 
                width={600}
                height={600}
                layout="responsive"
              />
            </div>
            <div className="home-component-modal-text">
              <h3 className="home-component-modal-title">{selectedActivity.title}</h3>
              <p className="home-component-modal-description">{selectedActivity.description}</p>
              <p><strong>Date:</strong> {selectedActivity.date}</p>
              <p><strong>Time:</strong> {selectedActivity.time}</p>
              <p><strong>Venue:</strong> {selectedActivity.venue}</p>
              <p><strong>Fee:</strong> {selectedActivity.fee}</p>
            </div>
          </div>
        </Modal>
      )}
      {/*---------------------------------------- modal section for about info ----------------------------------------*/}
      {selectedAboutInfo !== null && (
        <Modal onClose={() => setSelectedAboutInfo(null)}>
          <div className="home-component-modal-content">
            <h3>{aboutData[selectedAboutInfo].title}</h3>
            <div className="modal-about-content">
              <p>{aboutData[selectedAboutInfo].fullContent}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
