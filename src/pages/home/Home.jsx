import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import Widgetsm from '../../widget/Widgetsm';
import Widgetlg from '../../widgetlg/Widgetlg';
import { userData } from './../../dummyData';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data ={userData} title="User Analytics" grid="grid" dataKey="dataKey"/>
        <div className="homeWidgets">
          <Widgetsm/>
          <Widgetlg/>
    
        </div>
        
    </div>
  )
}
