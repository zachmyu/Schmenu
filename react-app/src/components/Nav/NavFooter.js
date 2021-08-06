import React from 'react';
import './Nav.css';
import AboutModal from './AboutModal';

function NavFooter() {

    return (
        <div className="footer-container">
            <a href="https://www.linkedin.com/in/zach-yu-9b86ab1b/" className="footer-element"><i className="fab fa-linkedin"></i> Linked In</a>
            <a href="https://github.com/zachmyu" className="footer-element"><i className="fab fa-github"></i> Github</a>
            <a href="http://zachmyu.github.io/" className="footer-element"><i className="far fa-user-circle"></i> Created by Zach Yu</a>
            <AboutModal />
        </div>
    );
}

export default NavFooter;
