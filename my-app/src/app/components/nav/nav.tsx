'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assests/logo.png';
import { scrollTo } from '../../utils/scrollTo';
import './nav.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Image src={logo} alt="Film Festival Logo" width={100} height={50} className="logo" />
        <ul className="nav-links">
          <li><a onClick={() => scrollTo('about')}>About</a></li>
          <li><a onClick={() => scrollTo('gallery')}>Gallery</a></li>
          <li><a onClick={() => scrollTo('events')}>Events</a></li>
          <li><a onClick={() => scrollTo('faqs')}>FAQs</a></li>
          <li><a onClick={() => scrollTo('team')}>Team</a></li>
        </ul>
        <Link href="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
