import React, { Component } from "react";
import "../Styles/LeftSidebar.css";
import "../Styles/Header.css";
import "../Styles/ClientTaskManagement.css";





export default class ClientTaskManagement extends Component {

    render(){
        return(
            <div className="ClientTaskManagement">
                <div className='left-sidebar'>
				
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
				<div className='right-side'>
					<h1>Task Management</h1>
				<div className='row-frm'>
                    <table className="table1">
                            <tr>
                                <td>
                                    <p>Today Allocated Task</p>
                                    <p>20</p>
                                 </td>
                                 <td>
                                    <p>Completed Task</p>
                                    <p>2</p>
                                 </td>
                             
                            </tr> 
                        </table>   
            
                        <p className="ptag">Today Allocated Tasks</p>
                         <table className="table3">
                            <tr>
                                <th>Task No</th>
                                <th>Details</th>
                                <th>Status</th>
                              
                              
                            </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Order Medicine</td>
                                    <td>Pending</td>

                                                                         
                                </tr>
                      
                        </table>
                       
				</div>
                       

					
				
                     
                   
				</div>
			</div>
		);
	}
}

        