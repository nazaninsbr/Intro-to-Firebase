import React, {Component} from 'react';
import fire from '../config/config.js';

class Home extends Component {
	constructor(props){
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(e){
		e.preventDefault();
		fire.auth().signOut();
	}

	render () {
		return (
			<div>
				<div className="container">
					<h2>Home</h2>
					<button type="submit" onClick={this.logout}>logout</button>
				</div>
			</div>
		);
	}
}

export default Home;