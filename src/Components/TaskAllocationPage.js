import React, { Component } from "react";
import "../Styles/TaskAllocationPage.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";


export default class TaskAllocationPage extends Component{
    render(){
        return(
            <div className="TaskAllocationPage">
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
                    <h1>Task Management</h1>
                    <p>Allocate Task</p>
                    <table className="table1">
                        <tr>
                            <td>Task No</td>
                        </tr>
                        <tr>
                            <td><input type="number"/></td>
                        </tr>
                        <tr>
                            <td>Staff Id *</td>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="">
                                    <option value="">A001</option>
                                    <option value="">A002</option>
                                    <option value="">A003</option>
                                    <option value="">A004</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td>Details *</td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Allocate Task</button>
                            </td>
                        </tr>
                    </table> 

                </div>
        </div>
);
}
}

 