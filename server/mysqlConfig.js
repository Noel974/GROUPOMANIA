const mysql = require('mysql');
const dotenv = require ('dotenv')

dotenv.config({path: './.env'}); //masquage des informations sensibles comme les idantifiants et les mots de passes


/***Connection base de donnée */
const db = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,

})
db.connect((function(err){
    if(err){
        console.log("error de connection");
    }
    else{
        console.log("connection reussi");
    }
}))
