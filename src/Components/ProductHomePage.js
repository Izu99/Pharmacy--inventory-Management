import React, { Component } from "react";
import logo from "../images/logo.png";
import "../Styles/ProductHomePage.css";
import "../Styles/Header.css";

import "../Styles/LeftSidebar.css";

export default class ProductHomePage extends Component {
	render() {
		return (
			<div className='ProductHomePage'>
				<div className='left-sidebar'>
					<img src={logo} alt='' className='header-logo' />
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
					<h2>Inventory Management</h2>

					<table className='table1'>
						<tr>
							<td>
								<p>Search Product</p>
							</td>
							<td>
								<input type='text' placeholder='search...' />
							</td>
							<td>
								<select name='' id=''>
									<option value=''>option1</option>
									<option value=''>option2</option>
									<option value=''>option3</option>
								</select>
							</td>
						</tr>
					</table>
					<p className='list'>Product List</p>
					<table className='table2'>
						<tr>
							<td>Product Name</td>
						</tr>
						<tr>
							<td>
								Quantity
								<input type='number' />
							</td>
							<td>
								<p>Rs.200.00</p>
							</td>
							<td>20 Items Remaining</td>
                            <td><button type='submit'>Buy Now</button>
                            <button type="submit">Add to Cart</button></td>
						</tr>
					</table>
                    <table className='table2'>
						<tr>
							<td>Product Name</td>
						</tr>
						<tr>
							<td>
								Quantity
								<input type='number' />
							</td>
							<td>
								<p>Rs.200.00</p>
							</td>
							<td>20 Items Remaining</td>
                            <td><button type='submit'>Buy Now</button>
                            <button type="submit">Add to Cart</button></td>
						</tr>
					</table>
                    <table className='table2'>
						<tr>
							<td>Product Name</td>
						</tr>
						<tr>
							<td>
								Quantity
								<input type='number' />
							</td>
							<td>
								<p>Rs.200.00</p>
							</td>
							<td>20 Items Remaining</td>
                            <td><button type='submit'>Buy Now</button>
                            <button type="submit">Add to Cart</button></td>
						</tr>
					</table>
                    <table className='table2'>
						<tr>
							<td>Product Name</td>
						</tr>
						<tr>
							<td>
								Quantity
								<input type='number' />
							</td>
							<td>
								<p>Rs.200.00</p>
							</td>
							<td>20 Items Remaining</td>
                            <td><button type='submit'>Buy Now</button>
                            <button type="submit">Add to Cart</button></td>
						</tr>
					</table>
                    <table className='table2'>
						<tr>
							<td>Product Name</td>
						</tr>
						<tr>
							<td>
								Quantity
								<input type='number' />
							</td>
							<td>
								<p>Rs.200.00</p>
							</td>
							<td>20 Items Remaining</td>
                            <td><button type='submit'>Buy Now</button>
                            <button type="submit">Add to Cart</button></td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}
