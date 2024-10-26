import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assests/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-in">
        <div className="footer-content">
          <div className="footer-content-in">
            <div className="footer-logo">
              <Image 
                src={logo} 
                alt="KLSAC Film Makers Logo" 
                width={300} 
                height={270} 
                className="footer-logo-img"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="social-links">
              <div className="social-links-in">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
              </div>
            </div>
          </div>
        </div>
      <div className="copyright">
        <div className="copyright-in">
          <p>&copy; 2024 KLSAC Film Technology. All rights reserved.</p>
          <p>Designed and Developed by <Link href="https://www.linkedin.com/in/dinesh-korukonda-513855271/">Dinesh Korukonda</Link> & <Link href="https://www.linkedin.com/in/pavankarthik/">Pavan Karthik Garaga</Link></p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
