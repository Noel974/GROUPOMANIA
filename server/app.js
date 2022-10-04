const express = require('express');/*** importer l'express ***/

/***Importer les routes à notre application */
/*** importer la route user ***/
const userRoutes = require('./routes/user');
/*** importer la route post ***/
const postRoutes = require('./routes/post');
/*** importer la route user ***/
const commentRoutes = require('./routes/comment');


require("dotenv").config();
/*** importer helmet pour sécuriser HTTP headers ***/
const helmet = require("helmet");

const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */

});
sequelize
  .authenticate()
  .then(() => {
    console.log('La connexion a été établie avec succès.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

/*** importer le module express-rate-limit pour limiter le nombre de requêtes que peut faire un utilisateur ***/
const rateLimit = require("express-rate-limit");
//const { param } = require('../server/routes/test');
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  /*** pour chaque 10 minutes ***/
  max: 40 /*** L'utilisateur pourra faire 40 requêtes toutes les 10 minutes ***/
});
const app = express(); /*** appeler express pour créer notre application express ***/


/*** Middleware général/ configurer des Headers sur l'objet réponse pour eviter les erreurs du CORS (Cross Origin Resource Sharing)
    et assurer que le front-end pourra effectuer des appels vers l'application en toute sécurité.  ***/

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*'); /*** d'accéder à notre API depuis n'importe quelle origine ***/
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); /*** d'ajouter les headers mentionnés aux requêtes envoyées vers notre API ***/
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); /*** d'envoyer des requêtes avec les méthodes mentionnées  ***/
      next();
  });


/*** création d'un middleware pour indiquer à Express qu'il faut gérer la ressource images de manière statique 
(un sous-répertoire de notre répertoire de base, __dirname:nom du dossier ) à chaque fois qu'elle reçoit une requête vers la route /images ***/
//app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use(express.json());



/*** Cette limite de 40 requêtes toutes les 10 minutes sera effective sur toutes les routes ***/
app.use(limiter);

/*** securisé les en-têtes HTTP ***/
app.use(helmet());

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/*** les routes attendues par le frontend ***/
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
/*** exporter notre application pour qu'on puisse y accéder dans les autres fichiers de notre projet ***/
module.exports = app;