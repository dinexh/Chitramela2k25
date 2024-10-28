'use client';
import { useRouter } from 'next/navigation';
import '../register.css';
import Footer from '@/app/components/Footer/Footer';

interface StudentDetails {
  name: string;
  email: string;
  idNumber: string;
  phone: string;
  college: string;
  gender: string;
  referral?: string;
  selectedEvents: string[];
}

export default function ConfirmRegistration() {
  const router = useRouter();
  
  // This would normally come from form state management or API
  const studentDetails: StudentDetails = {
    name: "Amish", // This would be actual form data
    email: "210000..@kluniversity.in",
    idNumber: "2100031234",
    phone: "+91 9876543210",
    college: "KL University",
    gender: "Male",
    referral: "John Doe",
    selectedEvents: ["Event 1", "Event 2"]
  };

  const handleEdit = () => {
    router.push('/register');
  };

  const handleConfirm = () => {
    router.push('/register/payment');
  };

  return (
    <div className="register-component">
      <div className="register-component-content">
        <div className="register-component-content-in">
          <div className="register-component-content-in-heading">
            <h1>Confirm Your Details</h1>
          </div>
          
          <div className="profile-box">
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{studentDetails.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{studentDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">ID Number:</span>
                <span className="detail-value">{studentDetails.idNumber}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{studentDetails.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">College:</span>
                <span className="detail-value">{studentDetails.college}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">{studentDetails.gender}</span>
              </div>
              {studentDetails.referral && (
                <div className="detail-item">
                  <span className="detail-label">Referral:</span>
                  <span className="detail-value">{studentDetails.referral}</span>
                </div>
              )}
              <div className="detail-item">
                <span className="detail-label">Selected Events:</span>
                <span className="detail-value">
                  {studentDetails.selectedEvents.join(', ')}
                </span>
              </div>
            </div>
            
            <div className="action-buttons">
              <button onClick={handleEdit} className="edit-btn">
                Edit Details
              </button>
              <button onClick={handleConfirm} className="confirm-btn">
                Confirm Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="register-component-footer">
        <Footer />
      </div>
    </div>
  );
}
