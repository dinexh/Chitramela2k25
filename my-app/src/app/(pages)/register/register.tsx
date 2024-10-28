import '../Register.css';
import Footer from '@/app/components/Footer/Footer';
import Navigation from '@/app/components/Navigation/Navigation';

export default function Register() {
  return (
    <div className="register-component">
      <div className="register-component-nav">
        <Navigation />
      </div>
      <div className="register-component-content">
        <h1 className="register-component-heading">Register for Chitramela 2025</h1>
        <form className="register-form">
          {/* Add form fields here */}
          <button type="submit" className="register-submit-btn">Register</button>
        </form>
      </div>

      <div className="register-component-footer">
        <Footer />
      </div>
    </div>
  );
}
