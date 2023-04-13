import React from 'react';
import Banner from './Banner/Banner';
import ExoticPlace from './ExoticPlace/ExoticPlace';
import './HomeIndex.css'
import PopularTour from './PopularTour/PopularTour';

const HomeIndex = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <PopularTour />
            <ExoticPlace />

        </div>
    );
};

export default HomeIndex;