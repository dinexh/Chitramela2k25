import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-in-one">
          <Image src={Logo} alt="Company Logo" />
        </div>
        <div className="footer-in-copyright">
          <p>Copyright &copy; 2024 Chitramela. All rights reserved.</p>
          <p>Designed and Developed by</p> <p><Link href="www.amazon.in">Dinesh Korukonda</Link> & <Link href="www.amazon.in">Pavan Karthik Garaga</Link> of <Link href="www.amazon.in"> <span>ZeroOne Code Club</span></Link>
        </p>
      </div>
        <div className="footer-in-two">
          <Link href="#" className="footer-social-link" aria-label="Facebook" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link href="#" className="footer-social-link" aria-label="Twitter" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link href="#" className="footer-social-link" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="#" className="footer-social-link" aria-label="YouTube" rel="noopener noreferrer">
            <FaYoutube />
          </Link>
          <Link href="#" className="footer-social-link" aria-label="LinkedIn" rel="noopener noreferrer">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
