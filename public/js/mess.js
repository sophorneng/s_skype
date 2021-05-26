function sendMesage() {
    let message = { name: localStorage.getItem("user"), text: messa.value };
    axios.post(url + "/send", message).then((res) => {
        displayMessage();
    })

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
                fieldset.style.background = "gray"
            }else{
                fieldset.style.background = "green"
            }
            spanOfInput.textContent = message.name + " : " + message.text;
            fieldset.appendChild(spanOfInput);
            storeOfNewUser.appendChild(fieldset);
            
        };
        const listOfUser = document.querySelector(".listOfUser");

        if (listOfUser !== null) {
            listOfUser.remove();
        }
    })
};


let messa = document.querySelector("#inputId");
let btnSend = document.querySelector("#submit");
btnSend.addEventListener("click", sendMesage);
let url = "http://localhost:5000";
displayMessage();