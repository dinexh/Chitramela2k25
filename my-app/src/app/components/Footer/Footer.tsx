import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaUserCircle } from 'react-icons/fa';
import Logo from '../../assets/newlogo.png';
import SacLogo from '../../assets/sac_logo.png';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const socialLinks = [
    { href: '#', icon: <FaFacebookF />, label: 'Facebook' },
    { href: '#', icon: <FaInstagram />, label: 'Instagram' },
    { href: '#', icon: <FaYoutube />, label: 'YouTube' },
  ];

  const GoToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-in-top">
          <div className="footer-in-top-in-one">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-in-top-in-two">
            <button onClick={GoToLogin}>
              <FaUserCircle /> Login
            </button>
          </div>
        </div>
        <div className="footer-in-main">
          <div className="footer-in-main-in">
            <div className="footer-in-main-in-one">
              <p>Designed and Developed by</p>
              <p>
                <Link href="https://in.linkedin.com/in/dinesh-korukonda-513855271">Dinesh Korukonda</Link> & <Link href="https://in.linkedin.com/in/pavankarthikgaraga">Pavan Karthik Garaga</Link>
              </p>
              <p>
                <Link href="https://in.linkedin.com/company/zeroonecodeclub"><span>ZeroOne Code Club</span></Link>
              </p>
              <p>&copy; 2024 Chitramela. All rights reserved.</p>
            </div>
            <div className="footer-main-in-two">
              <Image src={Logo} alt="Logo" width={100} height={100} />
              <Image src={SacLogo} alt="Logo" width={100} height={100} />
            </div>
            <div className="footer-main-in-three">
              <div className="footer-main-in-three-in-one">
                {socialLinks.map((link, index) => (
                  <Link href={link.href} key={index} className="footer-social-link" aria-label={link.label} rel="noopener noreferrer">
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className="footer-main-in-three-in-two">
                <h2>Contact Us</h2>
                <Link href="tel:+911234567890">
                  +91 9492485741 {`{Amish Kumar}`}
                </Link>
                <Link href="mailto:klsacphotography@gmail.com">
                  klsacphotography@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
