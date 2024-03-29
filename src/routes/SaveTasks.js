function saveTask(user,password,firstname,lastname,tasks) {
    var url = 'http://localhost:3000/users/'+user;
    var data = {
      "id":user,
      "firstname": firstname,
      "lastname": lastname,
      "password": password,
      "notes": tasks
    };
    
    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    }
    export default (saveTask);
    