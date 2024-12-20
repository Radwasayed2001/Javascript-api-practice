function pressInput(el){
    var element = el.value;
    var id = el.id;
    if(id == "FullName"){
        if(element.length <= 3){
            el.style.border = "2px solid red";
            document.getElementById("fullnameVal").style.color = "red";
            document.getElementById("fullnameVal").textContent = "Must be longer than 3"
        }
        else{
            el.style.border = "2px solid blue";
            document.getElementById("fullnameVal").style.color = "blue";
            document.getElementById("fullnameVal").textContent = "Valid"
        }
    }
    if(id == "email"){
        if(!validateEmail(el.value)){
            el.style.border = "2px solid red";
            document.getElementById("emailVal").style.color = "red";
            document.getElementById("emailVal").textContent = "Not Valid"
        }
        else{
            el.style.border = "2px solid blue";
            document.getElementById("emailVal").style.color = "blue";
            document.getElementById("emailVal").textContent = "Valid"
        }
    }
    if(id == "password"){
        if(element.length <= 3){
            el.style.border = "2px solid red";
            document.getElementById("passwordVal").style.color = "red";
            document.getElementById("passwordVal").textContent = "Must be longer than 3"
        }
        else{
            el.style.border = "2px solid blue";
            document.getElementById("passwordVal").style.color = "blue";
            document.getElementById("passwordVal").textContent = "Valid"
        }
    }
    if(id == "passwordConfirmation"){
        var password = document.getElementById("password").value;
        var passwordConfirmation = document.getElementById("passwordConfirmation").value;
        if(password !== passwordConfirmation){
            el.style.border = "2px solid red";
            document.getElementById("passworCondVal").style.color = "red";
            document.getElementById("passworCondVal").textContent = "Didn't Match"
        }
        else{
            el.style.border = "2px solid blue";
            document.getElementById("passworCondVal").style.color = "blue";
            document.getElementById("passworCondVal").textContent = "Password Match"
        }
    }
}
function login(e){
    e.preventDefault();
    var FullName = document.getElementById("FullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirmation = document.getElementById("passwordConfirmation").value;
    if(!validateEmail(email)){
        document.getElementById("emailVal").textContent = "Email Not Valid"
        document.getElementById("emailVal").style.color = 'red'
    }
    else if(FullName.length <= 3){
        document.getElementById("fullnameVal").textContent = "Must Be Longer Than 3"
        document.getElementById("fullnameVal").style.color = 'red'
    }
    else if(password.length < 1){
        document.getElementById("passwordVal").textContent = "Must Be Longer Than 3"
        document.getElementById("passwordVal").style.color = 'red'
    }
    else if(password !== passwordConfirmation){
        document.getElementById("passworCondVal").textContent = "Didn't Match"
        document.getElementById("passworCondVal").style.color = 'red'
    }
    else {
        var data = {
            "fullname": FullName,
            "email": email,
            "password": password,
        }
        console.log(data);
        localStorage.setItem("userData", JSON.stringify(data));
        // console.log(JSON.parse(localStorage.getItem("userData")))
        // localStorage.clear();
        document.cookie = `fullname=${FullName}; path=/;`;
        document.cookie = `email=${email}; path=/;`;
        document.cookie = `password=${password}; path=/;`;
        alert("data Stored Successfully");
        window.location.href = "P2/index.html";

    }
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };