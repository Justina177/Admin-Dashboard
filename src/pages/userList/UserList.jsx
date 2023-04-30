import React from 'react';
import './UserList.css';
// import { DataDGrid } from '@mui/data-grid-material'
import { DataGrid } from '@mui/x-data-grid';
import img1 from '../../images/pexels-pixabay-38554-removebg-preview.png';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90},
        { field: 'user', 
        headerName: 'user', 
        width: 200, 
        renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avater} alt="" />
                    {params.row.username}
                </div>
            );
        }},
        { field: 'email', headerName: 'email', width: 200},
        {
            field: 'status',
            headerName: 'status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transction Volume',
            width: 160,
        },
        {
            
        }
    ];

    const rows = [
        {
            id: 1, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 2, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 3, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 4, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 5, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 6, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 7, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 8, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 9, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
        {
            id: 11, 
            username: 'John snow',
            email: 'johnsnow@gmail.com', 
            avater : img1,
            status: 'active',
            transaction: '$120.00',
        },
    ]

  return (
    <div className="userList">
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>

  
    </div>    
  )
}



