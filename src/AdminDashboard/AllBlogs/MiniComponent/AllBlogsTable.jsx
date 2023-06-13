import React from 'react';
import DataTable from 'react-data-table-component';
import { BsTrash } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';

const AllBlogsTable = ({ data, onDelete }) => {
    console.log(data)
    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Content',
            selector: 'content',
            sortable: true,
        },
        {
            name: 'coverImage',
            selector: 'coverImage',
            cell: (row) => (
                <img className='h-10 w-10 ' src={row.coverImage} alt="" />
            )
        },
        {
            name: 'status',
            selector: 'status',
            sortable: true,
        },


        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(row?._id)}
                    >
                        <TiTick className='text-xl' />
                    </button>
                    <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(row?._id)}
                    >
                        <IoCloseOutline className='text-xl' />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => onDelete(row?._id)}
                    >
                        <BsTrash className='text-[15px]' />
                    </button>
                </div>
            ),
        },
    ];

    const handleEdit = (id) => {
        // Handle the edit action for the given ID
        console.log(`Edit tour with ID ${id}`);
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            striped
            dense
        />
    );
};

export default AllBlogsTable;
