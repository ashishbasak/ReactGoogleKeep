import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ParentUserManagement.css'
import SignupComponent from './SignUpComponent';
import LoginComponent from './LoginComponent';
import MainComponent from './MainComponent';

class ParentUserManagement extends Component{

    constructor(props){
        super(props);
        this.state={
            signup: false, login: true,
            isLoggedIn:false,
            userid:"",
            pass:"",
            first:"",
            last:""
        }
        console.log(this);
        this.switch=this.switch.bind(this)
        this.handleParentUserManagement=this.handleParentUserManagement.bind(this)

    }

    switch(word) {
        var signup, login;
        if (word == "signup") { signup = true; login = false; }
        else { login = true; signup = false; }
        console.log(this);
        
        return this.setState({ login: login, signup: signup })

    }
    handleParentUserManagement(status,user,password,fname,lname){
        this.setState({ isLoggedIn: status,
        userid:user,
    pass:password,
first:fname,
last:lname })
    }
    render() {
if(this.state.isLoggedIn==false){
    console.log(this.state.isLoggedIn);

        return (
            <div className="usercontainer">
                <div id="buttons">
                    <p id="signupButton" onClick={this.switch.bind(null, "signup")} className={this.state.signup ? "yellow" : "blue"}>Sign Up</p>
                    <p id="loginButton" onClick={this.switch.bind(null, "login")} className={this.state.login ? "yellow" : "blue"}> Login</p>
                </div>

                {this.state.signup ? <SignupComponent /> : null}
                {this.state.login ? <LoginComponent  handleParentUserManagement={this.handleParentUserManagement}/> : null}

            </div>

        )
        }
        else{
            console.log(this.state.isLoggedIn);
            
            return(
            <MainComponent userId={this.state.userid} pass={this.state.pass} first={this.state.first} last={this.state.last}/>
            )
        }

    }
}
export default ParentUserManagement;