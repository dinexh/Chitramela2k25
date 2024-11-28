'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import './confirm.css';
import '../register/register.css';
import Footer from '../../components/Footer/Footer';

interface FormDataType {
    name: string;
    email: string;
    idNumber: string;
    phone: string;
    college: string;
    gender: string;
    referral?: string;
}

// Separate component that uses useSearchParams
function ConfirmationContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormDataType | null>(null);

    const handleConfirm = () => {
        router.push('/payment');
    };

    useEffect(() => {
        const eventsParam = searchParams.get('events');
        const formDataParam = searchParams.get('formData');
        
        if (eventsParam) {
            setSelectedEvents(JSON.parse(decodeURIComponent(eventsParam)));
        }
        if (formDataParam) {
            const parsedData: FormDataType = JSON.parse(decodeURIComponent(formDataParam));
            setFormData(parsedData);
        }
    }, [searchParams]);

    return (
        <div className="register-component-content-in">
            <div className="register-component-content-in-heading">
                <h1>Confirm Your Details</h1>
            </div>
            
            <div className="profile-box">
                <div className="profile-details">
                    <div className="detail-item">
                        <span className="detail-label">Name:</span>
                        <span className="detail-value">{formData?.name}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Email:</span>
                        <span className="detail-value">{formData?.email}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">ID Number:</span>
                        <span className="detail-value">{formData?.idNumber}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Phone:</span>
                        <span className="detail-value">{formData?.phone}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">College:</span>
                        <span className="detail-value">{formData?.college}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Gender:</span>
                        <span className="detail-value">{formData?.gender}</span>
                    </div>
                    {formData?.referral && (
                        <div className="detail-item">
                            <span className="detail-label">Referral:</span>
                            <span className="detail-value">{formData?.referral}</span>
                        </div>
                    )}
                    <div className="detail-item">
                        <span className="detail-label">Selected Events:</span>
                        <span className="detail-value">
                            {selectedEvents.join(', ')}
                        </span>
                    </div>
                </div>
                
                <div className="action-buttons">
                    <button onClick={() => alert('Edit Details')} className="edit-btn">
                        Edit Details
                    </button>
                    <button onClick={handleConfirm} className="confirm-btn">
                        Confirm Details
                    </button>
                </div>
            </div>
        </div>
    );
}

// Main component wrapped with Suspense
export default function Confirmation() {
    return (
        <div className="register-component">
            <div className="register-component-content">
                <Suspense fallback={<div>Loading...</div>}>
                    <ConfirmationContent />
                </Suspense>
            </div>
            <div className="register-component-footer">
                <Footer />
            </div>
        </div>
    );
}
