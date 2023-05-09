import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css"

const Footer = () => {
    return (
        <>
            <div className="portfolio_footer">
                <ul><li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>

            </div>
        </>
    )
}

export default Footer