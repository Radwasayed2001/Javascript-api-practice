var req = new XMLHttpRequest();
req.open('GET', 'https://reqres.in/api/users');
req.send();
var users;
req.onreadystatechange = function get() {
    if (req.readyState == 4 && req.status == 200) {
        var arr = JSON.parse(req.responseText);
        users = arr.data;
        console.log(users);
        displayUsers(users);
    }
}

function displayUsers(arr){
    for(var i=0; i<arr.length; i++){
        var user = document.createElement('option');
        user.textContent = arr[i].first_name+" "+arr[i].last_name;
        var select = document.getElementById('users');
        user.value = arr[i].id;
        select.appendChild(user);
    }
}

function showDetails(){
    var select = document.getElementById('users');
    var id = select.value;
    var req = new XMLHttpRequest();
    req.open('GET', 'https://reqres.in/api/users/'+id);
    req.send();
    var user;
    req.onreadystatechange = function get() {
        if (req.readyState == 4 && req.status == 200) {
            var arr = JSON.parse(req.responseText);
            user = arr.data;
            DisplayUserDetails(user);
        }
    }

}

function DisplayUserDetails(user){
    card = document.getElementById('card');
    card.innerHTML = '';
    id = document.createElement('h1');
    id.textContent = user.id;
    email = document.createElement('h2');
    email.textContent = user.email;
    avatar = document.createElement('img');
    avatar.src = user.avatar;
    var fullname = document.createElement('span');
    fullname.textContent = user.first_name+" "+user.last_name;
    card.append(avatar,fullname,id, email);
}