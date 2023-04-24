import { Component } from "react";
import "../Styles/ClientAttendance.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";



export default class ClientAttendance extends Component{
render() {
    return (
        <div className='AttendancePage'>
             <div className="left-sidebar">
                    <div className='component-name dashboard'>
                        <div className='text'>
                            <a href='/dashboard'> Dashboard</a>
                        </div>
                    </div>
                    <div className='component-name farmer'>
                        <div className='text'>
                            <a href='/farmer'> Farmer</a>
                        </div>
                    </div>
                    <div className='component-name vendor'>
                        <div className='text'>
                            <a href='/vendor'> Vendor</a>
                        </div>
                    </div>
                    <div className='component-name products'>
                        <div className='text'>
                            <a href='/product'> Products</a>
                        </div>
                    </div>
                    <div className='component-name clients'>
                        <div className='text'>
                            <a href='/client'>Clients</a>{" "}
                        </div>
                    </div>
                    <div className='component-name dashboard'>
                        <div className='text'>
                            <a href='/dashboard'> Dashboard</a>
                        </div>
                    </div>
                    <div className='component-name dashboard'>
                        <div className='text'>
                            <a href='/dashboard'> Dashboard</a>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <h2>Attendance Management</h2>
                    <table className="table1">
                        <tr>
                            <td>
                                <p>Monthly Attended Days</p>
                                <p>20</p>
                            </td>
                            <td>
                                <p>Monthly Remaining Leaves</p>
                                <p>2</p>
                            </td>
                        </tr>
                    </table>
                   
                        <table className="table2">
                            <tr>
                                <td>Didn't Mark Attendance Today ?</td>
                                <td>
                                    <button type="submit" className="Mark">Mark Attendance</button>
                                </td>

                            </tr>

                        </table>
                

                    <p className="ptag">Attendance History</p>
                    <table className="table3">
                        <tr>
                            <th>Day</th>
                            <th>Attended</th>
                        </tr>
                        <tr>
                            <td>2023/04/5</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>2023/04/14</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>2023/04/20</td>
                            <td>Yes</td>
                        </tr>
                    </table>   
                </div>
            </div>

        );
    }
}
