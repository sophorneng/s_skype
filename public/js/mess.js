function sendMesage(){
   let message = {name: localStorage.getItem("user"), text:messa.value};
   axios.post(url +"/send",message).then((res) =>{
        displayMessage();
   })

}

function displayMessage(){
    let request = url + "/getmessage";
    axios.get(request).then((response)=>{
        let data = response.data;
        for(message of data){
            console.log(message.name + " " + message.text);
        }
    })
}


let messa = document.querySelector("#inputId");
let btnSend = document.querySelector("#submit");
btnSend.addEventListener("click", sendMesage);
let url = "http://localhost:5000";
displayMessage();