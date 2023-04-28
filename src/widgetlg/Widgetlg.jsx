// import { Table } from '@mui/material';
import React from 'react';
import './Widgetlg.css';
import img1 from '../images/pexels-pixabay-38554-removebg-preview.png'

export default function Widgetlg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img1} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Sarah Carter</span>
          </td>
          <td className="widgetLgDate">17 Jan 2022</td>
          <td className="widgetLgAmount">$189.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img1} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Sarah Carter</span>
          </td>
          <td className="widgetLgDate">17 Jan 2022</td>
          <td className="widgetLgAmount">$189.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img1} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Sarah Carter</span>
          </td>
          <td className="widgetLgDate">17 Jan 2022</td>
          <td className="widgetLgAmount">$189.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img1} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Sarah Carter</span>
          </td>
          <td className="widgetLgDate">17 Jan 2022</td>
          <td className="widgetLgAmount">$189.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
