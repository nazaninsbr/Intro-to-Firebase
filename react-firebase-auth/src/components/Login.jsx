import React, {Component} from 'react';
import fire from '../config/config.js';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '', 
			password: ''
		}
		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	login(e){
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
			console.log(error);
		});
	}

	signup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
	}


	render () {
		return (
		<div>
			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>
				<div className="form-group">
					<label className="control-label">Email</label>
					<input value={this.state.email} onChange={this.onChange} type="email" name="email" className="form-control"/>
					<label className="control-label">Password</label>
					<input value={this.state.password} onChange={this.onChange}   type="password" name="password" className="form-control"/>
				</div>
				<button type="submit" onClick={this.login}>login</button>
				<button type="submit" onClick={this.signup}>singup</button>
			</form>
		</div>
		);
	}
}

export default Login;