import React, { Component } from "react";
import "../Styles/AddProductForm.css";
import "../Styles/Header.css";
import "../Styles/LeftSidebar.css";


export default class AddProductForm extends Component{
render() {
    return(
        <div className='AddProductForm'> 
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
                <h2>Add Product Form</h2>
                <table className="table">
                    <tr >
                        <td>Product Catagory </td>
                        <td>Product Name </td>
                    </tr>
                    <tr>
                        <td>
                            <select name="" id="">
                                <option value=''>option1</option>
                                <option value=''>option2</option>
                                <option value=''>option3</option>
                            </select>
                    
                        </td>
                        <td>
                            <input type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Product No</td>
                        <td>Product Price</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text"></input>         
                        </td>
                        <td>
                            <input type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="number"></input>
                        </td>
                    </tr>
           
                    <tr>
                        <td>Description</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text"></input>
                        </td>
                    </tr>
                    <tr>
                         <td>
                            <button type="submit">Add Product</button>
                        </td>
                    </tr>
                </table>
            </div>
       </div>
);
    }
}









    
