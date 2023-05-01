import { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutlined} from "@mui/icons-material";
import {userRows} from '../../dummyData';
import { Link } from 'react-router-dom';


export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }

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
                    <Link to ={"/users/"+params.row.id} >
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlined className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                </>
                )
            }
        },
        
    ];

    
  return (
    <div className="userList">
        <DataGrid 
        rows={ data } 
        disableSelectionOnClick 
        columns={columns} 
        paginationModel={{ page: 0, pageSize: 10 }} 
        checkboxSelection
        />

  
    </div>    
  )
}



