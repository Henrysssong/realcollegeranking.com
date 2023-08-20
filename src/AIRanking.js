// AIRanking.js
import React from 'react';
import './AIRanking.css';

const AIRanking = () => {
    const handleWaitlistClick = () => {
        window.open('https://forms.gle/tKCuDJ4MqheUqvLc7', '_blank');
    }

    return (
        <div className="ai-ranking-container">
            Launch soon.
            <button onClick={handleWaitlistClick} className="waitlist-button">Join our Waitlist</button>
        </div>
    );
}

export default AIRanking;
