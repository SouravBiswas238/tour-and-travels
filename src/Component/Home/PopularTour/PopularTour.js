import React from 'react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import './PopularTour.css'

const PopularTour = () => {
    const scrollPosition = useScrollPosition()

    return (
        <div className={`${scrollPosition === 0 ? 'relative top-[-80px]' : ''} overflow-hidden`}>
            <section className="section__tours">
                <div className='group my-8'>
                    <h2 className='text-center text-4xl font-semibold text-black mb-6 uppercase '>Most Popular tours</h2>
                    <div className='border-b-2 w-28 -mt-2 mx-auto text-center transition-all duration-300 border-[#12dd2a] group-hover:scale-x-[15]'></div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-2 ">

                    <div className="card   flex w-auto pb-5 px-1  lg:mb-0">
                        <div className="card__slide shadow-md">
                            <div className="absolute w-full  ">
                                <div className="card-picture card-pic-1">
                                </div>
                                <h4 className="flex flex-wrap relative left-44 top-[-4rem] font-semibold ">
                                    <span className=" text-white px-4 text-xl py-1 bg-gradient-to-r from-cyan-400 to-blue-400">The sea Explore</span>
                                </h4>
                                <div className="w-full  mx-auto text-center">
                                    <ul className=" py-2 text-center">
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1 '>3 days tour</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>Up to 30 people</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>2 tour gain</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
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
                    <div className="card   flex w-auto pb-5 px-1  lg:mb-0">
                        <div className="card__slide shadow-md">
                            <div className="absolute w-full  ">
                                <div className="card-picture card-pic-1">
                                </div>
                                <h4 className="flex flex-wrap relative left-44 top-[-4rem] font-semibold ">
                                    <span className=" text-white px-4 text-xl py-1 bg-gradient-to-r from-cyan-400 to-blue-400">The sea Explore</span>
                                </h4>
                                <div className="w-full  mx-auto text-center">
                                    <ul className=" py-2 text-center">
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1 '>3 days tour</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>Up to 30 people</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>2 tour gain</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
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
                    <div className="card   flex w-auto pb-5 px-1  lg:mb-0">
                        <div className="card__slide shadow-md">
                            <div className="absolute w-full  ">
                                <div className="card-picture card-pic-1">
                                </div>
                                <h4 className="flex flex-wrap relative left-44 top-[-4rem] font-semibold ">
                                    <span className=" text-white px-4 text-xl py-1 bg-gradient-to-r from-cyan-400 to-blue-400">The sea Explore</span>
                                </h4>
                                <div className="w-full  mx-auto text-center">
                                    <ul className=" py-2 text-center">
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1 '>3 days tour</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>Up to 30 people</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>2 tour gain</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
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
                    <div className="card   flex w-auto pb-5 px-1  lg:mb-0">
                        <div className="card__slide shadow-md">
                            <div className="absolute w-full  ">
                                <div className="card-picture card-pic-1">
                                </div>
                                <h4 className="flex flex-wrap relative left-44 top-[-4rem] font-semibold ">
                                    <span className=" text-white px-4 text-xl py-1 bg-gradient-to-r from-cyan-400 to-blue-400">The sea Explore</span>
                                </h4>
                                <div className="w-full  mx-auto text-center">
                                    <ul className=" py-2 text-center">
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1 '>3 days tour</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>Up to 30 people</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>2 tour gain</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
                                        <li className='text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1'>sleepin facility</li>
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
                <div className="text-center mx-auto underline my-2 ">
                    <a href="#" className="">Discover our tours </a>
                </div>
                <div className='border-b-2 mt-5 border-grey-200'></div>
            </section>
        </div>
    );
};

export default PopularTour;