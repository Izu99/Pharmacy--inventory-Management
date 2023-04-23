import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
// import Login from "./Components/Login"
import ProductHomePage from "./Components/ProductHomePage";
import AddProdcutForm from "./Components/AddProductForm";
import EditProductForm from "./Components/EditProductForm";
import AdminProductTable from "./Components/AdminProductTable";
import ProductSearch from "./Components/ProductSearch";
import searchAttendance from "./Components/searchAttendance";
import ManageAttendancePage from "./Components/ManageAttendancePage";
import MarkAttendancePage from "./Components/MarkAttendancePage";
import TaskAllocationPage from "./Components/TaskAllocationPage";
import TaskManagementPage from "./Components/TaskManagementPage";

class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>
						
						{/* <Route path='/Login' component={Login} /> */}
						<Route path='/producthomepage' component={ProductHomePage} />
						<Route path='/addproductform' component={AddProdcutForm}/>
						<Route path='/editproductform' component={EditProductForm}/>
						<Route path='/AdminProductTable' component={AdminProductTable}/>
						<Route  path='/ProductSearch/:pathParam1?' component={ProductSearch}/>
						<Route  path='/searchAttendance/:pathParam1?' component={searchAttendance}/>

						<Route path='/manageattendancepage' component={ManageAttendancePage}/>
						<Route path='/markattendance' component={MarkAttendancePage}/>
						<Route path='/taskallocationpage' component={TaskAllocationPage}/>
						<Route path='/taskmanagementpage' component={TaskManagementPage}/>


						{/* <Redirect from='*' to='/404' /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
