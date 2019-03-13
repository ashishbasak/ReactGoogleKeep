import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';


class Todo extends Component {
  constructor(props){
    super(props);

    this.toDoRemove=this.toDoRemove.bind(this)
}
toDoRemove(e){        
    this.props.toDoListRemove(e.target.id);
}
render(){


return (
  <Card className={'card'}>
    <CardHeader
      action={
        <IconButton>
           <DeleteIcon id={this.props.todo.id} onClick={this.toDoRemove}/>
      </IconButton>     
       }
      title={this.props.todo.title}
    />
    <CardContent>
      <Typography component="p">
      {this.props.todo.content}
      </Typography>
    </CardContent>
  </Card>
);
}
  
  }

  export default Todo