import React from 'react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

const ExoticPlace = () => {
    const scrollPosition = useScrollPosition()

    return (
        <div className={`${scrollPosition === 0 ? 'relative top-[-80px]' : ''} overflow-hidden`}>
            <div className='group my-6'>

                <h2 className='text-center text-4xl font-semibold text-black mb-5 uppercase '>Go Exotic Places</h2>
                <div className='border-b-2 w-28 -mt-2 mx-auto text-center transition-all duration-300 border-[#12dd2a] group-hover:scale-x-[15]'></div>
            </div>

            <div className=" mx-auto ">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:grid-rows-2">

                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group   bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]  " >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700from-gray-900  to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96  md:col-span-2 lg:h-full group bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')] ">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase   text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">31</span>
                                <span className="leading-none uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold  text-gray-100">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
                        </h2>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group  bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group  bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group  bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group  bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group  bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a>
                            <div className="flex flex-col justify-start text-center  text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <div className="z-10 p-5">
                            <h2 className='text-purple-400'>Travels To</h2>
                            <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ExoticPlace;