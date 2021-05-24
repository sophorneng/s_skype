const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// app.get('/', (req, res) => res.send("Hello Project"))

let users = [
    {username: "sophorn", color: "red", text: "hello everyone how are you"},
    {username: "sreytouch", color: "green", text: "yes hello i'm fine. thank"},

]

// show data on browser
app.get('/users', (req , res) =>{
    res.send(users);
})


// get users to updat
app.post('/users', (req, res) =>{
    
    let user = {text:req.body.text};
    users.push(user);
    res.send(users);


})