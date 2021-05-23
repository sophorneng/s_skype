//display item on broswer//
function displayUser(res){
    let users = res.data;
    console.log(users)
    const input = document.querySelector("#inputId");
    let storeOfNewUser = document.querySelector(".store");
    const listOfUser = document.querySelector(".listOfUser");
    
    if (listOfUser!==null){
        listOfUser.remove();
    }
    const newOfuser = document.createElement("div");
    newOfuser.classList.add("listOfUser");
    for (let user of users){

        //fieldset contain all span//
        const fieldset = document.createElement("fieldset");
        

        //contain text  and message name//
        const spanOfInput =document.createElement("span");
        spanOfInput.textContent = user.username + ":" + user.text;

        //contain icon quote//
        const spanOfquote = document.createElement('span');
        spanOfquote.className = "quote-left fa fa-quote-left hvr-grow";

        //contain icon eidt//
        const spanOfEdit = document.createElement("span");
        spanOfEdit.className ="edit fa fa-pencil-square-o hvr-grow";

        //append all spans to  fieldset//
        // fieldset.appendChild(spanOfquote);
        // fieldset.appendChild(spanOfEdit);
        fieldset.appendChild(spanOfInput);
        
        // fieldset.appendChild(span_delete);
        
        fieldset.style.backgroundColor = user.color;
        newOfuser.appendChild(fieldset);
        storeOfNewUser.appendChild(newOfuser);
    }


    input.value = "";

}
const btnsubmit = document.querySelector("#submit");
btnsubmit.addEventListener("click", BtnSubmit);





function sendMessage(e){
    const text = document.querySelector("#inputId").value;
    let user = {text: text};
    const url = "http://localhost:5000/users";
    axios.post(url, user).then(displayUser);


}
const btnsend = document.querySelector("#submit");
btnsend.addEventListener('click', sendMessage);



function loadData(){
    const url = "http://localhost:5000/users";
    axios.get(url).then(displayUser);
}
loadData();