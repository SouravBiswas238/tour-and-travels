import React from 'react';
import AllBlogsTable from './MiniComponent/AllBlogsTable';

const AllBlogs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl my-5 font-semibold'>    All blogs</h2>

            <AllBlogsTable />
        </div>
    );
};

export default AllBlogs;