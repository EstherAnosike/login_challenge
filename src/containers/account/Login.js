import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Style.css';


class Login extends React.Component {
    state = { 
        name: '',
        password: '',
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginSubmitHandler = (event) => {
        event.preventDefault();

        if(localStorage.getItem(this.state.name)) {
            let myVar=localStorage.getItem(this.state.name);            
            let myData=JSON.parse(myVar);
            
            if(myData.password === this.state.password) { 
                this.props.history.push('/dashboard')
            } else {
                alert('Invalid username or password!')
            } 
        } else {
            alert('Invalid username or password!')
        }        
    }

    render() {
        return ( 
            <form className="container">
                <h1>Admin Login</h1>

                <b>Username</b>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    name="name" value={this.state.name} 
                    onChange={event => this.changeHandler(event)} 
                    required 
                    autoFocus />
            
                <b>Password</b>
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    name="password" value={this.state.password} 
                    onChange={event => this.changeHandler(event)} 
                    required />
                    
                <button type="submit" onClick={event => this.loginSubmitHandler(event)}>Login</button>
                <div>
                <small>
                    <input type="checkbox"  name="remember" /> Remember me
                </small>
                <Link to="/" className="ml3">Back to signup</Link>
                </div>
            </form>
        );
    }
}
 
export default Login;