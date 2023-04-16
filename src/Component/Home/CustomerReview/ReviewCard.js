import React from 'react';


function ReviewCard(props) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
            <div className="px-4 py-2">
                <h2 className="font-bold text-2xl mb-2">{props.title}</h2>
                <p className="text-gray-800 text-base">{props.body}</p>
            </div>

            <div className="px-4 py-2 bg-gray-200 flex justify-between items-center">
                <div className="text-sm flex justify-center items-center"><img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover mr-2 w-12 h-12 rounded-full dark:bg-gray-500" /> {props.author}</div>
                <div className="text-sm">{props.date}</div>
            </div>

        </div>
    );
}

export default ReviewCard;