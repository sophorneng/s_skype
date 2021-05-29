// send date to server
function sendMesage() {
    const Sound = document.getElementById("Sound");
    Sound.play();
    let message = { name: localStorage.getItem("user"), text: messa.value };
    console.log(message)
    axios.post(url + "/send", message, User).then((res) => {
        
        displayMessage();
    })
    // clear value that we was input
    document.querySelector("#inputId").value = "";
}
// display message to server
function displayMessage() {
    let storeOfNewUser = document.querySelector(".store");
    let request = url + "/getmessage";
    axios.get(request).then((response) => {
        let data = response.data;
        for (user of data) {
            const fieldset = document.createElement("fieldset");
            const spanOfInput = document.createElement("span");
            if(user.name === "sophorn"){
                fieldset.style.background = "yellow"
            }else{
                fieldset.style.background = "green"
            }
            spanOfInput.textContent = user.name + " : " + user.text;
            fieldset.appendChild(spanOfInput);
            storeOfNewUser.appendChild(fieldset);
            
        };
        const listOfUser = document.querySelector(".listOfUser");

        if (listOfUser !== null) {
            listOfUser.remove();
        };
    })
};


let messa = document.querySelector("#inputId");
let btnSend = document.querySelector("#submit");
btnSend.addEventListener("click", sendMesage);
let url = "http://https://sophornproject.herokuapp.com";
displayMessage();



// put emoji to messager
let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
picker.on('emoji', emoji => {
document.querySelector('#inputId').value += emoji;
});
btnemoji.addEventListener('click', () => {
picker.togglePicker(btnemoji);
});




//create empty object for store all value.

let italic = "";
let bold = "";
let User = {};





function logout() {
    window.location.href = "../index.html"
    }
    let btnBack = document.querySelector('#logout');
    btnBack.addEventListener('click', logout);
