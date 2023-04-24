import React from 'react';
import './Topbar.css';
import { NotificationsNone } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="logo">GolemG</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIconsContainer">
                    <NotificationsNone />
                </div>
            </div>
        </div>
    </div>
  )
}
