import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Todo from './Todo';
import '../styles/TodoList.css'



class TodoList extends Component {
  constructor(props){
    super(props);
    this.toDoListRemove=this.toDoListRemove.bind(this)
}
toDoListRemove(id){
    //actual delete will happen in mainComponent
    this.props.toDoAppremoveTask(id);
}
render(){
return(<div className='list'>{this.props.tasks.map(todo=>
<div >
          <GridList cellHeight={180} spacing={1} className={'gridList'}>
            <GridListTile className='tile' style={{ height: 'auto', width:'270px' }}>
            <Todo toDoListRemove= {this.toDoListRemove} key={todo.id} todo= {todo}/>
         </GridListTile>
          </GridList>
</div>)}</div>
        );
    }
  
  }

  export default TodoList