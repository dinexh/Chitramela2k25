import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../../assets/newlogo.png';
import SacLogo from '../../assets/sac_logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-in-one">
          <p>Designed and Developed by</p> 
          <p>
            <Link href="https://in.linkedin.com/in/dinesh-korukonda-513855271">Dinesh Korukonda</Link> & <Link href="https://in.linkedin.com/in/pavankarthikgaraga">Pavan Karthik Garaga</Link> of 
          </p>
          <p>
            <Link href="https://in.linkedin.com/company/zeroonecodeclub"><span>ZeroOne Code Club</span></Link>
          </p>
          <p>&copy; 2024 Chitramela. All rights reserved.</p>
        </div>
        <div className="footer-in-two">
          <Image src={Logo} alt="Company Logo" width={400} height={200} />
        </div>
        <div className="footer-in-four">
          <Image src={SacLogo} alt="SAC Logo" width={400} height={200} />
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
              <Link href="tel:+911234567890">
                +91 9492485741 {`{Amish Kumar}`}
              </Link>
            </p>
            <p>
              <Link href="mailto:klsacphotography@gmail.com">
                klsacphotography@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
