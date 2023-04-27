import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart />
    </div>
  )
}
