'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navigation.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';
const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`} role="navigation">
      <div className="nav-in">
        <div className="nav-in-one">
          <Link href="/" className="nav-in-one-link">
            <Image src={logo} alt="Chitramela Logo" />
          </Link>
        </div>
        <div className="nav-in-two">
        <Link href="/#event-info" className="navigation-link">Event Info</Link>
        <Link href="/#activities" className="navigation-link">Activities</Link>
        <Link href="/#gallery" className="navigation-link">Gallery</Link>
        <Link href="/#faq" className="navigation-link">FAQ</Link>
          <Link href="/team" className="navigation-link">Team</Link>
          <Link href="/register" className="navigation-link">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
