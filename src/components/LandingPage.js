import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h1>Realcollegeranking.com aims to reform college ranking.</h1>
            <p>From our perspective, college rankings serve two primary purposes:</p>
            <ul>
                <li>1. See which student is the toughest. - for which we use our difficulty ranking.</li>
                <li>2. See which school best fit each student - for which we use our AI to generate a personalized ranking for you.</li>
            </ul>
        </div>
    );
}

export default LandingPage;
