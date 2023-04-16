import React from 'react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import './PopularTour.css'

const PopularTour = () => {
    const scrollPosition = useScrollPosition()
    console.log(scrollPosition)
    return (
        <div className={`${scrollPosition === 0 ? 'relative top-[-80px]' : ''}`}>
            <section className="section__tours">
                <div className='group my-8'>
                    <h2 className='text-center text-4xl font-semibold text-black mb-6 uppercase '>Most Popular tours</h2>
                    <div className='border-b-2 w-28 -mt-2 mx-auto text-center transition-all duration-300 border-[#12dd2a] group-hover:scale-x-[15]'></div>
                </div>
                <div className="">
                    <div className="flex flex-wrap items-stretch mx-10 px-10">

                        <div className="card  flex w-auto pb-5 px-1  md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="card__slide my-shadow">
                                <div className="card__slide-font">
                                    <div className="card-picture card-pic-1">
                                    </div>
                                    <h4 className="card-heading">
                                        <span className="card-heading-1">The sea Explore</span>
                                    </h4>
                                    <div className="w-full  mx-auto text-center">
                                        <ul className="card-ul py-10 text-center">
                                            <li className='text-center w-[10rem] mx-auto py-1 '>3 days tour</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>Up to 30 people</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>2 tour gain</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__slide-back  bg-gradient-to-r from-purple-500 to-pink-500">
                                    <div className="card-backpart">
                                        <p className="prize-text">Only</p>
                                        <p className="prize-value">$279</p>
                                        <a href="#" className="btn btn--white">Buy Now</a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card  flex w-auto pb-5  px-1   md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="card__slide my-shadow">
                                <div className="card__slide-font">
                                    <div className="card-picture card-pic-1">
                                    </div>
                                    <h4 className="card-heading">
                                        <span className="card-heading-1">The sea Explore</span>
                                    </h4>
                                    <div className="w-full  mx-auto text-center">
                                        <ul className="card-ul py-10 text-center">
                                            <li className='text-center w-[10rem] mx-auto py-1 '>3 days tour</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>Up to 30 people</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>2 tour gain</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__slide-back  bg-gradient-to-r from-purple-500 to-pink-500">
                                    <div className="card-backpart">
                                        <p className="prize-text">Only</p>
                                        <p className="prize-value">$279</p>
                                        <a href="#" className="btn btn--white">Buy Now</a>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card  flex w-auto pb-5  px-1   md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="card__slide my-shadow">
                                <div className="card__slide-font">
                                    <div className="card-picture card-pic-1">
                                    </div>
                                    <h4 className="card-heading">
                                        <span className="card-heading-1">The sea Explore</span>
                                    </h4>
                                    <div className="w-full py-10 mx-auto text-center">
                                        <ul className="card-ul text-center">
                                            <li className='text-center w-[10rem] mx-auto py-1 '>3 days tour</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>Up to 30 people</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>2 tour gain</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                            <li className='text-center w-[10rem] mx-auto py-1'>sleepin facility</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__slide-back  bg-gradient-to-r from-purple-500 to-pink-500">
                                    <div className="card-backpart">
                                        <p className="prize-text">Only</p>
                                        <p className="prize-value">$279</p>
                                        <a href="#" className="btn btn--white">Buy Now</a>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="text-center mx-auto underline my-2 ">
                    <a href="#" className="">Discover our tours </a>
                </div>
                <div className='border-b-2 mt-5 border-grey-200'></div>
            </section>
        </div>
    );
};

export default PopularTour;