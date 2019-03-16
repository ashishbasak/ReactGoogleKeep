


function check(user) {
    
    var url = 'http://localhost:3000/users/'+user;
    
    return fetch(url).then(function(response) {
                                                return response.json();
                                            });
}
    export default (check);