import React from 'react';
import './header.scss'
import headerHeroImage from '../../assets/images/header-hero-image.webp'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img className="headerImg" src={headerHeroImage} alt="headerHeroImage"/>
        </div>
    );
};

export default Header;