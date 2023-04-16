import React from 'react';
import './Banner.css'
import logo from '../../../asset/Img/Untitled-6.png'


const Banner = () => {
    return (
        <div>
            <header className="header">
                <div className="header__logo-box">
                    {/* <img src={logo} alt="logo" className="header__logo" /> */}
                </div>
                <div className="header__text-box">
                    <h1 className="heading__primary">
                        <span className="heading__primary--main">Outdoors</span>
                        <span className="heading__primary--sub">is where life happens</span>
                    </h1>
                    <a href="#" className="my-btn my-btn--white my-btn--animated">Discover our tours</a>
                </div>
            </header>

        </div>
    );
};

export default Banner;