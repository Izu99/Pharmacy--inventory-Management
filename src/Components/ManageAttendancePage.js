import React, { Component } from "react";
import "../Styles/ManageAttendancePage.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";


export default class ManageAttendancePage extends Component{
    render() {
        return(
            <div className='ManageAttendancePage'>
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
                    <h1>Attendance Management</h1>
                        <table className="table1">
                            <tr>
                                <td>
                                    <p>Attendance Today</p>
                                    <p>20</p>
                                 </td>
                                 <td>
                                    <p>Absent</p>
                                    <p>2</p>
                                 </td>
                            </tr> 
                        </table>   
                        <table className="table2">
                            <tr> 
                                <td>Search Member name</td>
                                <td> <input type="text"/></td>
                            </tr>
                        </table>
                        <p className="ptag">Today Attendance of Staff Members</p>
                        <table className="table3">
                            <tr>
                                <th>Staff Id</th>
                                <th>Name</th>
                                <th>Attendance</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Kasun</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Supun</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kamal</td>
                                <td>Yes</td>
                            </tr>
                        </table>
                        <table className="table4">
                            <tr>
                                <td>Generate Monthly Attendance Report</td>
                                <td>
                                    <button>Monthly Report</button>
                                </td>
                            </tr>
                        </table>
                </div>
            </div>
        );
    }
}

