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
<<<<<<< HEAD
import ManageAttendancePage from "./Components/ManageAttendancePage";
import MarkAttendancePage from "./Components/MarkAttendancePage";
import TaskAllocationPage from "./Components/TaskAllocationPage";
import TaskManagementPage from "./Components/TaskManagementPage";
=======
import AdminProductTable from "./Components/AdminProductTable";
import ProductSearch from "./Components/ProductSearch";

>>>>>>> c5e238a2f4eb7c84511aa45d6fab392afe3a7864
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
<<<<<<< HEAD
					    <Route path='/manageattendancepage' component={ManageAttendancePage}/>
						<Route path='/markattendance' component={MarkAttendancePage}/>
						<Route path='/taskallocationpage' component={TaskAllocationPage}/>
						<Route path='/taskmanagementpage' component={TaskManagementPage}/>
						<Redirect from='*' to='/404' />
=======
						<Route path='/AdminProductTable' component={AdminProductTable}/>
						<Route  path='/ProductSearch/:pathParam1?' component={ProductSearch}/>

						{/* <Redirect from='*' to='/404' /> */}
>>>>>>> c5e238a2f4eb7c84511aa45d6fab392afe3a7864
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
