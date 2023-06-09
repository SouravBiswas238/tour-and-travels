import React from 'react';
import { useTable } from 'react-table';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const TourTable = ({ data, onDelete }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleEdit(row.original.id)}
                        >
                            <BsPencilSquare />
                        </button>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => onDelete(row.original.id)}
                        >
                            <BsTrash />
                        </button>
                    </div>
                ),
            },
        ],
        [onDelete]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const handleEdit = (id) => {
        // Handle the edit action for the given ID
        console.log(`Edit tour with ID ${id}`);
    };

    return (
        <table {...getTableProps()} className="border-collapse w-full">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                className="px-4 py-2 font-bold text-sm text-gray-700 border-b"
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className="border-b hover:bg-gray-100">
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()} className="px-4 py-2 text-sm">
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TourTable;
