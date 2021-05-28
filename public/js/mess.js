function sendMesage() {
    const ding = document.getElementById("dingSound");
    ding.play();
    const text = document.querySelector("#inputId").value;
    // User.text = text;
    // User.bold = bold;
    // User.italic = italic;
    // console.log(User)
    let message = { name: localStorage.getItem("user"), text: messa.value };
    console.log(message)
    axios.post(url + "/send", message, User).then((res) => {
        
        displayMessage();
    })
    document.querySelector("#inputId").value = "";
}

function displayMessage() {
    let storeOfNewUser = document.querySelector(".store");
    let request = url + "/getmessage";
    axios.get(request).then((response) => {
        let data = response.data;
        for (message of data) {
            const fieldset = document.createElement("fieldset");
            const spanOfInput = document.createElement("span");
            if(message.name === "sophorn"){
                fieldset.style.background = "yellow"
            }else{
                fieldset.style.background = "green"
            }

            if (message.bold === "B" && message.italic === "I") {
            
                spanOfInput.textContent = message.username + ": " + message.text;
                spanOfInput.style.fontWeight = "bold";
                spanOfInput.style.fontStyle = "italic";
    
               
    
            }
            else if (message.bold === "B") {
                
                spanOfInput.textContent = message.username + ": " + message.text;
                spanOfInput.style.fontWeight = "bold";
                console.log(spanOfInput)
    
            }
            else if (message.italic === "I") {
                
                spanOfInput.textContent = message.username + ": " + message.text;
                spanOfInput.style.fontStyle = "italic";
               
    
            }
            else {
                spanOfInput.textContent = message.username + ": " + message.text;
                
            }
            spanOfInput.textContent = message.name + " : " + message.text;
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
let url = "http://localhost:5000";
displayMessage();






//create empty object for store all value.

let italic = "";
let bold = "";
let User = {};



// text bold.
function Bold() {
    bold = "B";
    console.log(bold)
    
}
 
const textBold = document.querySelector("#bold");
textBold.addEventListener("click", Bold);
console.log(textBold)


//text italic
function Italic() {
    italic = "I";
    console.log(italic)
}

const textItalic = document.querySelector("#italic");
textItalic.addEventListener("click", Italic);
console.log(textItalic)



function backLogin() {
    window.location.href = "../index.html"
    }
    let btnBack = document.querySelector('#logout');
    btnBack.addEventListener('click', backLogin);

let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () => {
picker.on('emoji', emoji => {
document.querySelector('#inputId').value += emoji;
});
btnemoji.addEventListener('click', () => {
picker.togglePicker(btnemoji);
});
});