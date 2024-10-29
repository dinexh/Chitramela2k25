'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Navigation.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (assuming it has an id of 'hero')
      const heroSection = document.getElementById('hero')
      const heroHeight = heroSection?.offsetHeight || 0

      // Show navigation when scrolled past hero section
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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-in">
        <div className="nav-in-one">
          <Link href="/" className="nav-in-one-link">
            <Image src={logo} alt="Chitramela Logo" />
          </Link>
        </div>
        <div className="nav-in-two">
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
          <Link href="/register" className="navigation-link">Register</Link>
        </div>
      </div>
    </nav>
  )
}
