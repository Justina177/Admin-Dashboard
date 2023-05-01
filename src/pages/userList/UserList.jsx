import React from 'react';
import './UserList.css';
// import { DataDGrid } from '@mui/data-grid-material'
import { DataGrid } from '@mui/x-data-grid';
// import img1 from '../../images/pexels-pixabay-38554-removebg-preview.png';
import {DeleteOutlined} from "@mui/icons-material";
import {userRows} from '../../dummyData';

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
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return (
                <>
                    <button className="userListEdit">Edit</button>
                    <DeleteOutlined className="userListDelete" />
                </>
                )
            }
        },
        
    ];

    
  return (
    <div className="userList">
        <DataGrid rows={userRows} disableSelectionOnClick columns={columns} paginationModel={{ page: 0, pageSize: 10 }} checkboxSelection/>

  
    </div>    
  )
}



