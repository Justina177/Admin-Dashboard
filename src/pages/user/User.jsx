import React from 'react';
import './User.css';
import img1 from '../../images/pexels-pixabay-38554-removebg-preview.png';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function user() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="UserTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
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
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1992</span>
            </div>  

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+234 1234 5678</span>
            </div>       

            <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">hannahB123@gmail.com</span>
            </div>       

            <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Abuja | Nigeria</span>
            </div>       

        </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder='hannahb123'
                        className='userUpdateInput'
                         />
                    </div>

                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" 
                        placeholder='Hannah Benjamin'
                        className='userUpdateInput'
                         />
                    </div>

                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" 
                        placeholder='hannahB123@gmail.com'
                        className='userUpdateInput'
                         />
                    </div>

                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" 
                        placeholder='+234 1234 5678'
                        className='userUpdateInput'
                         />
                    </div>

                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" 
                        placeholder='Abuja | Nigeria'
                        className='userUpdateInput'
                         />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className="userUpdateImg" src={img1} alt="" />
                        <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                        </label>
                        <input type='file' id='file' style={{ display: "none" }} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
