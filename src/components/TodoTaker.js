import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import '../styles/TodoTaker.css'





class TodoTaker extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            content:""
        }

        //binding is important if u want to change any property using this function
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)

        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleChange1(e){

        this.setState({
            title:e.target.value
        });
    }
    handleChange2(e){

        this.setState({
            content:e.target.value
        });
    }

    handleSubmit(e){
    this.props.handleParent(this.state.title,this.state.content);
    this.state.title="";
    this.state.content="";

}

    render(){
        return(<div><Card >
            <CardContent>
            <TextField className='tasktitle' placeholder="Title" onChange={this.handleChange1} title={this.state.title}/> <br/>
            <TextField className='content' placeholder="Take your task..." onChange={this.handleChange2} content={this.state.content}/> 

            </CardContent>
            <CardActions className='saveButton'>
              <Button variant="contained" color="secondary" onClick={this.handleSubmit}>Add Task</Button>
            </CardActions>
          </Card></div>)
    }
}


  export default TodoTaker;