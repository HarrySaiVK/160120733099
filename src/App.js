import React from "react";
import './App.css';
import {Post} from "./pages";
class App extends React.Component {


	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

  
	render() {
		const { DataisLoaded} = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<Post/>
		</div>
	);
}
}

export default App;

