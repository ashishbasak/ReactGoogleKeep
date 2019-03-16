import React, { Component } from 'react';
import check from '../routes/CheckUser'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
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
    handleSubmit(){

        check(this.state.email).then((response)=>{
            if(this.state.password==response.password){
                this.props.handleParentUserManagement(true,this.state.email,response.password,response.firstname,response.lastname);
            }
            else{
                alert("Login Failed!");
                
            }
    }
);
}


    render() {
        return (
            <div>
                <div id="login">
                <TextField onChange={this.handleEmail} type="email" id="email" placeholder="Email" value={this.state.email} margin="normal"/> <br/>
                <TextField  onChange={this.handlePassword} type="password" id="password" placeholder="Password" value={this.state.password} margin="normal"/> <br/>
                    
                    <Button variant="contained" color="secondary" id="send" onClick={this.handleSubmit} >Login</Button>
                </div>
            </div>

        )
    }
}

export default LoginComponent;