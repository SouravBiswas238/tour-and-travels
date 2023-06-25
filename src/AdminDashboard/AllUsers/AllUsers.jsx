import React, { useContext } from 'react'
import { UserContext } from '../../UserContext/userContext';
import UsersTable from './MiniComponent/UsersTable';


const AllUsers = () => {

    // fetch data from backend
    const { userData } = useContext(UserContext);

    console.log(userData)


    return (
        <div>
            <h1>Users List</h1>
            {/* <UsersTable data={ userData } /> */}
        </div>
    );
};

export default AllUsers