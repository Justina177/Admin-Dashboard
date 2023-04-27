import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import { userData } from './../../dummyData'
import './Home.css';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data ={userData} title="User Analytics" grid="grid" dataKey="dataKey"/>
        <div className="homeWidgets"></div>
        
    </div>
  )
}
