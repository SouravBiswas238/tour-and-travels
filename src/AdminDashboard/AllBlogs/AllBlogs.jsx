import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import AllBlogsTable from './MiniComponent/AllBlogsTable';
import { toast } from 'react-toastify';


const AllBlogs = () => {
    const { blogs, setDeleteBlog } = useContext(UserContext);

    const handleDelete = async (tourId) => {
        // const data = { tourId: tourId, email: email }

        const response = await Api.delete(`/blog/delete/${tourId}`);
        setDeleteBlog(response?.data)
        response?.message && toast.success(response?.message);


    };
    return (
        <div>
            <h2 className='text-center text-3xl my-5 font-semibold'>    All blogs</h2>

            <AllBlogsTable data={blogs} onDelete={handleDelete} />
        </div>
    );
};

export default AllBlogs;