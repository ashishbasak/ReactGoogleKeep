import React, { Component } from 'react';
import TodoTaker from './TodoTaker';
import TodoList from './TodoList';
import ToolbarComponent from './ToolbarComponent';
import '../styles/MainComponent.css'
import MyDrawer from './MyDrawer';
import saveTask from'../routes/FetchCalls';


class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"Google Keep",
            tasks: []
        }


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
    }

    render(){
        saveTask('ashish.basak',this.state.tasks);

        //we can pass props to these components by using the sates of this component
        return (<div><ToolbarComponent title={this.state.title}/> 
                    <MyDrawer />
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
