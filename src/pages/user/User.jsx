import React from 'react';
import './User.css';
import img1 from '../../images/pexels-pixabay-38554-removebg-preview.png';
import { PermIdentity } from '@mui/icons-material';

export default function user() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="UserTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
        <div className="userShow">
        <div className="userShowTop">
            <img className="userShowImg" src={img1} alt="" />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Hannah Benjamin</span>
                <span className="userShowUserTitle">Fullstack Developer</span>
            </div>
        </div>
        <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">HannahB123</span>
            </div>   
            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1992</span>
            </div>       

            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">+234 1234 5678</span>
            </div>       

            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">HannahB123@gmail.com</span>
            </div>       

            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Abuja | Nigeria</span>
            </div>       

            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">HannahB123</span>
            </div>       

            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">HannahB123</span>
            </div>             
        </div>
        </div>
        <div className="userUpdate"></div>

        </div>
        {/*    
                
                
            </div> 
        </div>
         */}
    </div>
  )
}
