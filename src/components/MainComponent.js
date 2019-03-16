import React, { Component } from 'react';
import TodoTaker from './TodoTaker';
import TodoList from './TodoList';
import ToolbarComponent from './ToolbarComponent';
import '../styles/MainComponent.css'
import MyDrawer from './MyDrawer';
import saveTask from'../routes/SaveTasks';
import getTasks from '../routes/GetTasks'


class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"Google Keep",
            tasks: []
        }

        //prefetch the saved taks of the user
        getTasks(this.props.userId).then((response)=>{
            this.setState((currState)=>({
                tasks:currState.tasks.concat(response.notes)
            }))
        });

        this.handleParent=this.handleParent.bind(this)
        this.toDoAppremoveTask=this.toDoAppremoveTask.bind(this)
    }

    //this method is used as a tool to communicate with the child. Parent component provides means for communication
    handleParent(task1,task2){        
        const newState=[{
            id: Math.random()*3465768768,
            title:task1,
            content:task2
        }];
                
if (newState[0].id!=null) {
    //this is an async callback method. Printing tasks on the next line of this line will print 1 step later for each value.
    this.setState((currState)=>({
        tasks:currState.tasks.concat(newState)
    }));
}

}

    toDoAppremoveTask(id){
        console.log(id)
        this.setState((currState)=>({
            tasks:currState.tasks.filter((item) => item.id != id)
        }));
        saveTask(this.props.userId,this.state.tasks);

    }

    render(){
        //to save updated state tasks in db
        saveTask(this.props.userId,this.props.pass,this.props.first,this.props.last,this.state.tasks);
        //we can pass props to these components by using the sates of this component
        return (<div><MyDrawer />
                    <div className='container'>
                        <div className='todotaker'>
                            <TodoTaker handleParent={this.handleParent}/>
                        </div>
                        <TodoList tasks={this.state.tasks} toDoAppremoveTask={this.toDoAppremoveTask}/>
                    </div>
                </div>)
    } 
}
  

export default (MainComponent);
