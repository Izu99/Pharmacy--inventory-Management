import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>
						
						<Route path='/Login' component={Login} />
						

						<Redirect from='*' to='/404' />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;