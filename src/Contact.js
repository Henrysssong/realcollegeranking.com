// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>If you have any questions or feedback about realcollegeranking.com, please reach out to our lead developer:</p>
            <div className="contact-details">
                <strong>Name:</strong> Henry Song<br />
                <strong>Email Address:</strong> <a href="mailto:feidong2002@berkeley.edu">feidong2002@berkeley.edu</a><br />
                <strong>Personal Website:</strong> <a href="https://henrysong.io" target="_blank" rel="noopener noreferrer">henrysong.io</a>
            </div>
        </div>
    );
}

export default Contact;
