import './register.css';
import Footer from '@/app/components/Footer/Footer';

export default function Register() {
  return (
    <div className="register-component">
      <div className="register-component-content">
        <div className="register-component-content-in">
          <div className="register-component-content-in-heading">
            <h1>Register for Chitramela 2025</h1>
          </div>
          <form className="register-component-content-in-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Amish" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="210000..@kluniversity.in" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="id_number">ID Number:</label>
              <input 
                type="text" 
                id="id_number" 
                name="id_number" 
                placeholder="2100031234" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+91 9876543210" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="college">College:</label>
              <input 
                type="text" 
                id="college" 
                name="college" 
                placeholder="KL University" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="college_idcard">College ID Card:</label>
              <input type="file" id="college_idcard" name="college_idcard" required />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="referral">Referral Name:</label>
              <input type="text" id="referral" name="referral" />
            </div>

            <div className="form-group">
              <label>Selected Events:</label>
              <div className="events-selection">
                <button type="button" className="select-all-btn">Select All Events</button>
                <div className="event-buttons">
                  <button type="button" className="event-btn">Event 1</button>
                  <button type="button" className="event-btn">Event 2</button>
                  <button type="button" className="event-btn">Event 3</button>
                  <button type="button" className="event-btn">Event 3</button>
                  <button type="button" className="event-btn">Event 3</button>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">Next</button>
          </form>
        </div>
      </div>
      <div className="register-component-footer">
        <Footer />
      </div>
    </div>
  );
}
