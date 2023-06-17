import React from 'react';
import './Banner.css'
import img1 from '../../../asset/Img/saintmartin.jpg'
import img2 from '../../../asset/Img/sajek.jpg'
import { useScrollPosition } from '../../../hooks/useScrollPosition';



const Banner = () => {

    const scrollPosition = useScrollPosition()


    return (
        <div>
            <div className={`${scrollPosition === 0 ? 'lg:top-[-78px] ' : ''} relative carousel w-full h-[90vh]`}>
                <div id="slide1" className={` carousel-item relative w-full `}>
                    <img src={img1} className="w-full " />
                    <div className="header__text-box">
                        <h1 className="heading__primary">
                            <span className="heading__primary--main">Outdoors</span>
                            <span className="heading__primary--sub">is where life happens</span>
                        </h1>
                        <a href="#" className="my-btn my-btn--white my-btn--animated">Discover our tours</a>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="header__text-box">
                        <h1 className="heading__primary">
                            <span className="heading__primary--main !text-sm">Outdoors</span>
                            <span className="heading__primary--sub !text-sm">is where life happens</span>
                        </h1>
                        <a href="#" className="my-btn my-btn--white my-btn--animated">Discover our tours</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;