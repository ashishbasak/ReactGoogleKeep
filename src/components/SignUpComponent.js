
import React, { Component } from 'react';
import createUser from '../routes/CreateUser'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class SignupComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            tasks:[]
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleFirstName=this.handleFirstName.bind(this);
        this.handleLastName=this.handleLastName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        
        
    }
    handleSubmit(){
        
        createUser(this.state.firstname,this.state.lastname,this.state.email,this.state.password,this.state.tasks);
        this.state.firstname="";
        this.state.lastname="";
        this.state.email="";
        this.state.password="";
        
    }
    handleFirstName(e){
        this.setState({
            firstname:e.target.value
        });
    }

    handleLastName(e){
        this.setState({
            lastname:e.target.value
        });
    }

    handleEmail(e){
        this.setState({
            email:e.target.value
        });
    }

    handlePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    render() {
        return (
            <div>

                <div id="signup">
                <TextField  type="text" id="first" placeholder="First Name" onChange={this.handleFirstName} value={this.state.firstname} margin="normal"/> <br/>
                <TextField  type="text" id="last" placeholder="Last Name" onChange={this.handleLastName} value={this.state.lastname} margin="normal"/> <br/>
                <TextField  type="email" id="email" placeholder="Email" onChange={this.handleEmail} value={this.state.email} margin="normal"/> <br/>
                <TextField  type="password" id="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password} margin="normal"/> <br/>

                    
                    <Button variant="contained" color="primary" onClick={this.handleSubmit} id="send">Sign Up</Button>
                </div>
            </div>

        )
    }
}

export default SignupComponent