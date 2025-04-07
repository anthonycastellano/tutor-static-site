import '@/styles/modal.css';
import React, { useState } from "react";

type SetShowModalType = (show: boolean) => void;
interface ModalProps {
    setShowModal: SetShowModalType;
}

const MY_EMAIL = 'tonycastellano13@gmail.com';

export default function Modal({ setShowModal }: ModalProps) {
    const [formData, setFormData] = useState({
        recipient: MY_EMAIL,
        name: '',
        body: 'Default email body'
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Construct mailto link using form data
        const mailUrl = `mailto:${formData.recipient}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.body)}`;
        
        // Open the email client
        document.location.href = mailUrl;
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Inquiries</h2>
            
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
                
                <button 
                    onClick={() => setShowModal(false)}
                    className="close-button"
                >
                    Close
                </button>
            </div>
        </div>
    )
}