const express=require('express');
const mysql=require('mysql');

const app=express();


let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"sign_up",
    port:"3306 "
})
connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('connected'); // 
    }
})

// connection.query('CREATE TABLE users(ID INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(255) NOT NULL, Email VARCHAR(255), Password VARCHAR(255) NOT NULL,Phone VARCHAR(255))',(err,rows)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('data set bois');
//         console.log(rows);
//     }
// })


const port = process.env.PORT||4000;
app.listen(port);
console.log('app is listening port '+ port);  