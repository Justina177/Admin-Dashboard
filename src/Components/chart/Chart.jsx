import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        "Active User": 2200,
    },
    {
        name: 'Feb',
        "Active User": 900
    },
    {
        name: 'Mar',
        "Active User": 3400,
    },
    {
        name: 'Aprl',
        "Active User": 2100,
    },
    {
        name: 'May',
        "Active User": 3400,
    },
    {
        name: 'June',
        "Active User": 5640,
    },
    {
        name: 'July',
        "Active User": 7200,
    },
    {
        name: 'Aug',
        "Active User": 5000,
    },
    {
        name: 'Sept',
        "Active User": 8400,
    },
    {
        name: 'Oct',
        "Active User": 8620,
    },
    {
        name: 'Nov',
        "Active User": 7340,
    },
    {
        name: 'Dec',
        "Active User": 9000,
    },
];


export default function Chart() {
  return (
    <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5.5" />

            </LineChart>
        </ResponsiveContainer>

    </div>
  )
}
