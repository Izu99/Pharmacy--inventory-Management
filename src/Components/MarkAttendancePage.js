import React, { Component } from "react";
import "../Styles/MarkAttendancePage.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";


export default class MarkAttendancePage extends Component{
    render(){
        return(
            <div className="MarkAttendancePage">
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
                    <p>Mark Attendance</p>
                    <table className="table1">
                        <tr>
                            <td>Staff Id</td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Day</td>
                        </tr>
                        <tr>
                            <td><input type="date"/></td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Mark Attendance</button>
                            </td>
                        </tr>
                    </table> 

                </div>
        </div>
);
}
}

 