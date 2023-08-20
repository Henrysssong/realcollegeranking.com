import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h1>Realcollegeranking.com</h1>
            <p>Aims to reform college ranking.</p>
            <p>College rankings serve two primary purposes:</p>
            <ul>
                <li>1. Displaying student aptitude - for which we use our difficulty ranking.</li>
                <li>2. Identifying the best-fit colleges for individual students - a process we've enhanced using artificial intelligence.</li>
            </ul>
        </div>
    );
}

export default LandingPage;
