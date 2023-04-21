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

						<Redirect from='*' to='/404' />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
