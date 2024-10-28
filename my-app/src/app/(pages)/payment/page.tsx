'use client';
import './payment.css';
import '../register/register.css';
import { useState } from 'react';
import Footer from '@/app/components/Footer/Footer';

export default function Payment() {
  const [paymentDetails, setPaymentDetails] = useState({
    email: '',
    phone: '',
    paymentId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="register-component">
      <div className="register-component-content">
        <div className="register-component-content-in">
          <div className="register-component-content-in-heading">
            <h1>Complete Payment</h1>
          </div>

          <div className="payment-section">
            <div className="qr-code-container">
              <img 
                src="/payment-qr.png" 
                alt="Payment QR Code" 
                className="qr-code"
              />
              <p className="payment-instructions">
                Scan QR code to pay ₹500
              </p>
            </div>

            <form onSubmit={handleSubmit} className="payment-verification-form">
              <div className="form-group">
                <label htmlFor="payment-email">Email:</label>
                <input
                  type="email"
                  id="payment-email"
                  value={paymentDetails.email}
                  onChange={(e) => setPaymentDetails({
                    ...paymentDetails,
                    email: e.target.value
                  })}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment-phone">Phone Number:</label>
                <input
                  type="tel"
                  id="payment-phone"
                  value={paymentDetails.phone}
                  onChange={(e) => setPaymentDetails({
                    ...paymentDetails,
                    phone: e.target.value
                  })}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment-id">Payment ID:</label>
                <input
                  type="text"
                  id="payment-id"
                  value={paymentDetails.paymentId}
                  onChange={(e) => setPaymentDetails({
                    ...paymentDetails,
                    paymentId: e.target.value
                  })}
                  placeholder="Enter payment ID"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Verify Payment
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="register-component-footer">
        <Footer />
      </div>
    </div>
  );
}
