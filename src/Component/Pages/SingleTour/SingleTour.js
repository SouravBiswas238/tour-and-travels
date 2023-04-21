import React from 'react';
import AboutTour from './miniComponent/AboutTour';
import SingleTourBanner from './miniComponent/SingleTourBanner';
import Slider from './miniComponent/Slider';
import './SingleTour.css'

const SingleTour = () => {


    return (
        <div className="navbar-banner ">
            <div className=' pt-[4rem]'>

                <Slider></Slider>
                <SingleTourBanner />
                <AboutTour />
            </div>
        </div>
    );
};

export default SingleTour;