import React from 'react';
import './Sidebar.css'

// import LineStyleIcon from "@mui/icons-material/LineStyle";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import  PermIdentity from "@mui/icons-material/PermIdentity";
// import  Storefront from "@mui/icons-material/Storefront"
// import  BarChart from "@mui/icons-material/BarChart"
// import  MailOutline from "@mui/icons-material/MailOutline"
// import  DynamicFeed from "@mui/icons-material/DynamicFeed"
// import  ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline"
// import  WorkOutline from "@mui/icons-material/WorkOutline"
// import  Report from "@mui/icons-material/Report"
// import { AttachMoney } from '@mui/icons-material';


import { 
  LineStyle, 
  TrendingUp, 
  PermIdentity, 
  TimelineOutlined, 
  Storefront, 
  BarChart, 
  MailOutline, 
  DynamicFeed, 
  ChatBubbleOutline, 
  WorkOutline, 
  Report, 
  AttachMoney 
} 
 from '@mui/icons-material';



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity />
              Users
            </li>
            <li className="sidebarListItem">
              <Storefront />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
