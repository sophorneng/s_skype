const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello Project"))

let users = [
    {username: "sophorn", password : "007", color: "red", text: "i want to sleep"},
    {username: "sreytouch", password : "777777", color: "green", text: "wooooooooo"},

]

app.get('/users', (req , res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    
    let user = {text:req.body.text};
    users.push(user);
    res.send(users);


})