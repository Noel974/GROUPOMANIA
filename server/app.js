const express = require('express')

const dotenv = require ('dotenv') 
/*** importer helmet pour sécuriser HTTP headers ***/

const helmet = require("helmet");

/*** importer le module express-rate-limit pour limiter le nombre de requêtes que peut faire un utilisateur ***/

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    /*** pour chaque 10 minutes ***/
    max: 40 /*** L'utilisateur pourra faire 40 requêtes toutes les 10 minutes ***/
});
const app = express(); /*** appeler express pour créer notre application express ***/


app.listen(3000, (req, res)=> {
    console.log('"Server connexion...')
})