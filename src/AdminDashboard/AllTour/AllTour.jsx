import React from 'react';
import TourTable from './MiniComponent/TourTable';


const AllTour = () => {
    const tours = [
        {
            id: 1,
            title: 'Tour 1',
            description: 'Lorem ipsum dolor sit amet',
            price: 100,
        },
        {
            id: 2,
            title: 'Tour 2',
            description: 'Lorem ipsum dolor sit amet',
            price: 200,
        },
        // Add more tour objects as needed
    ];

    const handleDelete = (id) => {
        // Handle the delete action for the given ID
        console.log(`Delete tour with ID ${id}`);
    };

    return (
        <div>
            <h1>Tour List</h1>
            <TourTable data={tours} onDelete={handleDelete} />
        </div>
    );
};

export default AllTour;
