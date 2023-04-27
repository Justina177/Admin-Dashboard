import { Visibility } from '@mui/icons-material';
import React from 'react';
import './Widgetsm.css';
import img2 from '../images/pexels-pixabay-38554-removebg-preview.png';

export default function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rebecca Philips</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>         
        </li>

        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rebecca Philips</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>         
        </li>

        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rebecca Philips</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>         
        </li>

        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rebecca Philips</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>         
        </li>

        <li className="widgetSmListItem">
          <img src={img2}alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rebecca Philips</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>         
        </li>
      </ul>
      
        
    </div>
  )
}
