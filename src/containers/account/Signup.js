import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

class Signup extends React.Component {
    state = { 
        name: '',
        email: '',
        password: '',
        errors: [],
       };
    
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signupSubmitHandler = (event) => {
        event.preventDefault();

        const validData=this.validateEmailHandler(this.state.email) ;
        const { name, email, password } = this.state
        const formData= {        
            email: this.state.email,
            password:this.state.password,
        }
        localStorage.setItem(this.state.name, JSON.stringify(formData));
        
        if (!validData) {
            if (name === ''|| email === ''|| password === '') {
                alert("Please enter all values.")
            } else {
                alert("Invalid email address!");
            } 
        } else {
            this.setState({
                name: '',
                email: '',
                password: '',
            });
            alert('success!')
        }
    }

    validateEmailHandler = (email) => {
        if (/^[a-zA-Z0-9]+@kudobuzz.com+$/.test(email)) { 
            return true;
        } 
        return false;
    } 

    render () {
        return ( 
            <div>
                <form className="container">
                <h1>Sign up to join us!</h1>
                    <b>Username</b>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter username" 
                        value={this.state.name}
                        onChange={event => this.changeHandler(event)} 
                        required 
                        autoFocus /> 

                    <b>Email</b>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={event => this.changeHandler(event)} 
                        required /> 

                    <b>Password</b>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        value={this.state.password}
                        onChange={event => this.changeHandler(event)} 
                        required />   

                    <button
                        type="submit" 
                        onClick={(event) => this.signupSubmitHandler(event)}>Sign up
                    </button>
                    <div align="center">
                        <p><small>Already signed up?</small></p>
                        <Link to="/login">Continue to login</Link>   
                    </div>
                </form>
            </div> 
        );
    }
}
 
export default Signup;
    