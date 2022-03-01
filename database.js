const express=require('express');
const path = require('path');
const mysql=require('mysql');
// const dotenv=require('dotenv');

// dotenv .config({path:'./.env'});

const app=express();
app.set('view engine','hbs');


let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sign_up'
    // port:"3306 "
})
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false }));
// app.use(express.json());

db.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('connected');
    }
})
// exports.register
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/auth2',require('./routes/user'));


app.listen(5001,() => {
    console.log('app is listening port 5001');  
});