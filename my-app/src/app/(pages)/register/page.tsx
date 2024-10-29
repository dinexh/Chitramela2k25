"use client";
import './register.css';
import Footer from '@/app/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function Register() {
    const router = useRouter();
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        id_number: '',
        phone: '',
        college: '',
        college_idcard: null as File | null,
        gender: '',
        referral: ''
    });

    const events = [
        "Photography Contest - Mobile Photograph",
        "Short Film Screening ",
        "Reel Making Contest",
        "Movie Poster Design Contest ",
    ];

    const handleEventSelection = (event: string) => {
        setSelectedEvents(prev => {
            if (prev.includes(event)) {
                return prev.filter(e => e !== event);
            } else {
                return [...prev, event];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedEvents.length === events.length) {
            setSelectedEvents([]);
        } else {
            setSelectedEvents([...events]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFormData(prev => ({
                ...prev,
                college_idcard: files[0]
            }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedEvents.length === 0) {
            alert('Please select at least one event');
            return;
        }
        if (!formData.name || !formData.email || !formData.id_number || 
            !formData.phone || !formData.college || !formData.college_idcard || 
            !formData.gender) {
            alert('Please fill all required fields');
            return;
        }
        router.push(`/confirmation?events=${encodeURIComponent(JSON.stringify(selectedEvents))}&formData=${encodeURIComponent(JSON.stringify(formData))}`);
    };
    

    return (
        <div className="register-component">
            <div className="register-component-content">
                <div className="register-component-content-in">
                    <div className="register-component-content-in-heading">
                        <h1>Register for Chitramela 2025</h1>
                    </div>
                    <form className="register-component-content-in-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Amish" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
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
                                value={formData.id_number}
                                onChange={handleInputChange}
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
                                value={formData.phone}
                                onChange={handleInputChange}
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
                                value={formData.college}
                                onChange={handleInputChange}
                                placeholder="KL University" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="college_idcard">College ID Card:</label>
                            <input 
                                type="file" 
                                id="college_idcard" 
                                name="college_idcard" 
                                onChange={handleFileChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select 
                                id="gender" 
                                name="gender" 
                                value={formData.gender}
                                onChange={handleInputChange}
                                required 
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="referral">Referral Name:</label>
                            <input 
                                type="text" 
                                id="referral" 
                                name="referral" 
                                value={formData.referral}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Selected Events:</label>
                            <div className="events-selection">
                                <div className="event-buttons">
                                <button 
                                    type="button" 
                                    className="select-all-btn"
                                    onClick={handleSelectAll}
                                >
                                    {selectedEvents.length === events.length ? 'Deselect All' : 'Select All Events'}
                                </button>
                                    {events.map((event, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`event-btn ${selectedEvents.includes(event) ? 'selected' : ''}`}
                                            onClick={() => handleEventSelection(event)}
                                        >
                                            {event}
                                        </button>
                                    ))}
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
