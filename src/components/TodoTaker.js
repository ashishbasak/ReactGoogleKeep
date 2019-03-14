import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import '../styles/TodoTaker.css'





class TodoTaker extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            content:"",
            expanded:false
        }

        //binding is important if u want to change any property using this function
        this.handleTitle=this.handleTitle.bind(this)
        this.handleContent=this.handleContent.bind(this)

        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleTitle(e){

        this.setState({
            title:e.target.value
        });
    }
    handleContent(e){

        this.setState({
            content:e.target.value
        });
    }
    handleExpandedPanel = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    }

    handleSubmit(e){
    this.props.handleParent(this.state.title,this.state.content);
    this.state.title="";
    this.state.content="";
    this.state.expanded=false;
}

    render(){
        return(<div>
            <ExpansionPanel
            expanded={this.state.expanded}
            onChange={this.handleExpandedPanel('panel')}
            style={{width: 600}}
            >

            <ExpansionPanelSummary>
            <div>
            <TextField className='tasktitle' placeholder="Title" onChange={this.handleTitle} value={this.state.title}/> <br/>
            </div>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails className='blockDisplay'>
          <TextField className='content' placeholder="Take your task..." onChange={this.handleContent} value={this.state.content}/> <br/>
          <div className='saveButton'>
              <Button variant="contained" color="secondary" onClick={this.handleSubmit}>Add Task</Button>
            </div>
            
        </ExpansionPanelDetails>
        </ExpansionPanel>
</div>)
          
    }
}


  export default TodoTaker;