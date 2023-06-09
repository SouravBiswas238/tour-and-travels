import React from 'react';
import AboutTour from './miniComponent/AboutTour';
import SingleTourBanner from './miniComponent/SingleTourBanner';
import Slider from './miniComponent/Slider';

const SingleTour = () => {


    return (
        <div className=" mt-10">
            <div className=' pt-[3rem]'>

                <SingleTourBanner />
                <AboutTour />
                <Slider></Slider>
            </div>
        </div>
    );
};

export default SingleTour;