function createUser(firstname,lastname,email,password,tasks) {
    var url = 'http://localhost:3000/users';
    var data = {
      "id":email,
      "firstname":firstname,
      "lastname":lastname,
      "password":password,
      "notes": tasks
    };
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      alert("User Saved!!");
    })
    
    .catch(error =>{ console.error('Error:', error)
    alert("Duplicate User!!");

  
  });
    }
    export default (createUser);
    