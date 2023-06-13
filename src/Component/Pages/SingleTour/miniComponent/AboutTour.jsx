import React from "react";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
const AboutTour = ({ tour }) => {
  return (
    <div>
      <div
        className="pt-12 dark:bg-gray-800 dark:text-gray-100 
            container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5
            "
      >
        {/* tour details */}
        <div
          className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded
                w-full  xl:col-span-3 italic"
        >
          <div className="text-start  leading-8 ">
            <p className=" text-2xl font-semibold sm:text-xl text-primary">
              Explore Tours
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              veniam, et temporibus explicabo nihil at accusantium est magni
              deleniti cumque repudiandae aut odio incidunt quod omnis enim
              magnam architecto ratione consequatur sunt.
            </p>
          </div>
          <div className="flex">
            {/* about tour */}
            <div className="text-start  leading-7 pr-2">
              <p className="inline-block text-2xl font-semibold sm:text-xl text-primary pt-3">
                Advance Facilities
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>
              <p className="inline-block text-2xl font-semibold sm:text-xl text-primary pt-3">
                Challenge
              </p>
              <p className="pt-3">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore quasi architecto beatae vitae dicta..
              </p>
            </div>

            <img
              src={tour?.imageCover}
              alt=""
              className="opacity-100 w-1/2 float-right text-end h-60 sm:h-96"
            />
          </div>
          <div>
            <h1 className="text-start text-xl font-semibold text-primary">
              Included/Exclude
            </h1>
            <div className="grid grid-cols-2 py-10">
              <div className="col-1">
                <ul className="flex-1 mb-6 dark:text-gray-400">
                  <li className="flex mb-2 space-x-2 items-center">
                    <FcApproval />
                    <span>Pick and Drop Services</span>
                  </li>
                  <li className="flex mb-2 space-x-2 items-center">
                    <FcApproval />
                    <span>Pick and Drop Services</span>
                  </li>
                  <li className="flex mb-2 space-x-2 items-center">
                    <FcApproval />
                    <span>Pick and Drop Services</span>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <ul className="flex-1 mb-6 dark:text-gray-400">
                  <li className="flex mb-2 space-x-2 items-center">
                    <RxCross2 />
                    <span>Additional Services</span>
                  </li>
                  <li className="flex mb-2 space-x-2 items-center">
                    <RxCross2 />
                    <span>Additional Services</span>
                  </li>
                  <li className="flex mb-2 space-x-2 items-center">
                    <RxCross2 />
                    <span>Additional Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* toor booking
         */}
        <div className="w-full rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
          <div className="shadow-lg py-12 mb-10 px-5">
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              Build it with Mamba
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">
                Modular and versatile.
              </span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>
            <form
              novalidate=""
              action=""
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label for="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                />
              </div>
              <div>
                <label for="lastname" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                />
              </div>
              <button
                type="button"
                className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Join the waitlist
              </button>
            </form>
          </div>

          {/* rating */}
          <div className="flex flex-col max-w-xl  py-12  shadow-md rounded-xl ">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-gray-600"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
                >
                  Leave feedback
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm dark:text-gray-400"
              >
                Maybe later
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* fqa section */}
      <div className="w-3/4 flex flex-col justify-center pb-5 ">
        <h2 className="text-2xl font-semibold sm:text-4xl py-3">Tour Plan</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 1st
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 3rd
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 2nd
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default AboutTour;
