import React from 'react';
import './Topbar.css';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import image1 from '../../images/pexels-pixabay-38554-removebg-preview.png';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="logo">JTMedia</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIconsContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Settings />
                </div>
                <img src={image1} alt="" className="topAvater" />
            </div>
        </div>
    </div>
  )
}
