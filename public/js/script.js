
function getLogin(){
  
    let user = {name:username.value, password:password.value};
    axios.post(url +"/login", user).then((res) => {
        if(res.data){
            localStorage.setItem("user", username.value);
            localStorage.setItem("password", password.value)
           

            window.location.pathname = "home.html";
        }else{
            alert("try again");
        }
    })
};


let username = document.querySelector("#name");
let password = document.querySelector("#pass");
let btnLogign = document.querySelector("#log");
btnLogign.addEventListener("click", getLogin);

let url = "http://localhost:5000";
// let url = "https://sophornproject.herokuapp.com";
