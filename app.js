const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { type } = require("os");


mongoose.connect('mongodb://localhost/signupForm');

var contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    }
});

var ContactDetail = mongoose.model('ContactDetail', contactSchema);//Locking Schema and converted into Model.


app.use('/static', express.static('static'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.set('view engine', 'html') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// // ENDPOINTS
app.get('/index', (req, res) => {
    res.status(200).sendFile('/views/index.html', { root: __dirname });
})
app.get('/index2', (req, res) => {
    res.status(200).sendFile('/views/index2.html', { root: __dirname });
})
app.get('/index3', (req, res) => {
    res.status(200).sendFile('/views/index3.html', { root: __dirname });
})


app.post('/submit', (req, res) => {
    console.log(req.body);
    console.log(myData);
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    if (password === confirmPassword) {
        var myData = new ContactDetail(req.body);
        myData.save().then(() => {
            res.status(201).sendFile("/views/index3.html", { root: __dirname })
        }).catch(() => {
            res.status(400).send("item was not saved to the databse")
        })
    }
    else {
        res.send("Password is not matching");
    }
})


//Sign in check



app.post("/signin", async(req, res) => {
    try{
    const name=req.body.name;
    const pass=req.body.pass;
    const mydata=await ContactDetail.findOne({username:name})
    if(mydata.password === pass){
        res.status(200).sendFile("/views/index4.html",{root:__dirname});
    }
    else{
        res.status(201).send("Password Incorrect");
    }}
    catch(error){
        res.status(400).send("Invalid Login Credentials");
    }
})
    
    










app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});