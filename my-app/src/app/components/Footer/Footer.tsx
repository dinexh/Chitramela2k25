import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube,/*FaTwitter, FaLinkedinIn*/ } from 'react-icons/fa';
import Logo from '../../assets/newlogo.png';
import SacLogo from '../../assets/sac_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-in-one">
          <p>Designed and Developed by</p> 
          <p><Link href="www.amazon.in">Dinesh Korukonda</Link> & <Link href="www.amazon.in">Pavan Karthik Garaga</Link> of </p>
          <p><Link href="www.amazon.in"> <span>ZeroOne Code Club</span></Link></p>
          <p>Copyright &copy; 2024 Chitramela. All rights reserved.</p>
        </div>
        <div className="footer-in-two">
          <Image src={Logo} alt="Company Logo" width={400} height={200} />
        </div>
        <div className="footer-in-four">
          <Image src={SacLogo} alt="Company Logo" width={400} height={200} />
        </div>
        <div className="footer-in-three">
          <div className="footer-in-three-in-one">
            <Link href="#" className="footer-social-link" aria-label="Facebook" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link href="#" className="footer-social-link" aria-label="Instagram" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="#" className="footer-social-link" aria-label="YouTube" rel="noopener noreferrer">
              <FaYoutube />
            </Link>
          </div>
          <div className="footer-in-three-in-two">
              <h2>Contact</h2>
              <p>
                <Link href="tel:+911234567890" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">+91 9492485741 {`{Amish Kumar}`}</a>
                </Link>
              </p>
              <p>
                <Link href="mailto:klsacphotography@gmail.com" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">klsacphotography@gmail.com</a>
                </Link>
              </p>
            </div>
         </div>
      </div>
    </footer>
  );
}

export default Footer;