const express = require('express');
const app = express();
const fs = require("fs");

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());


// app.get('/', (req, res) => res.send("Hello Project"))

let users = [
    {username: "sophorn", password: "123", color: "red"},
    {username: "sreytouch",password: "123", color: "yellow"},
];

app.use(express.static('public'));

app.post("/login",(req, res) =>{
   let name = req.body.name;
   let pass = req.body.password;
   let status = false;
   for(let user of users){
       if (name === user.username && pass === user.password){
           status = true;
           
       }
   }
   res.send(status);
});
let messages = [];
messages = JSON.parse(fs.readFileSync("databes.json"));
app.post("/send", (req, res) => {
    let message = req.body;
    messages.push(message);
    // console.log(messages);
    res.send(message)
    fs.writeFileSync("databes.json", JSON.stringify(messages)); 
})
app.get("/getmessage",(req, res)=>{
    res.send(messages);
})