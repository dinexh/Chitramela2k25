'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Navigation.css';
import Image from 'next/image';
import logo from '../../assets/newlogo.png';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const heroHeight = heroSection?.offsetHeight || 0

      if (window.scrollY > heroHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  
      // After smooth scrolling, adjust the scroll position with a delay
      setTimeout(() => {
        const yOffset = -80; 
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }, 100); 
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-in">
        <div className="nav-in-one">
          <Link href="/" className="nav-in-one-link">
            <Image src={logo} alt="Chitramela Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-in-two ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            href="#about-info" 
            onClick={() => handleNavClick('about-info')}
            className="navigation-link"
          >
            About
          </Link>
          <Link 
            href="#events" 
            onClick={() => handleNavClick('events')}
            className="navigation-link"
          >
            Events
          </Link>
          <Link 
            href="#gallery" 
            onClick={() => handleNavClick('gallery')}
            className="navigation-link"
          >
            Gallery
          </Link>
          <Link 
            href="#faq" 
            onClick={() => handleNavClick('faq')}
            className="navigation-link"
          >
            FAQ
          </Link>
          <Link href="/team" className="navigation-link">Team</Link>
          <Link href="/Rules" className="navigation-link">Rules</Link>
          <Link href="/register" className="navigation-link register">Register</Link>
        </div>
      </div>
    </nav>
  )
}
