import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import TourTable from './MiniComponent/TourTable';

const AllTour = () => {

    // fetch data from backend
    const { tours, setTours, userData, email } = useContext(UserContext);

    // console.log(tours)


    const handleDelete = async (tourId) => {
        console.log(tourId)
        const response = await Api.delete('/tour/delete', { email, tourId });
        console.log(response.data)


    };

    return (
        <div>
            <h1>Tour List</h1>
            <TourTable data={tours} onDelete={handleDelete} />
        </div>
    );
};

export default AllTour;
