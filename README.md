### Groupomania
Pour une tres grande entrepise spécialisé dans la grande distribution a souhaité de construire un réseaux social pour les employés pour qu'il puisse s'échanger entre eux
## Structure du site 
La structure du ssite comporte un dossier client('frontend') et un dossier serverur ('backend')

#### Server
        -SERVEUR **Node.js**
        -Framework **Express.js**
        - Base de données **Mysql**
        -ORM **Sequelize**
La partie serveur est sécuriser selon les méthodes de l'OWASP

Pour la partie serveur l'installation va se produire de la façon suivante 
               
 ### Installation 
 
 ### Configuration du backend

         -Node.js sur la machine pour cella accéder au site https://    nodejs.org/en/ pour télécharger sur l'ordi 
         - Création du dossier backend (server) "npm init" 
         -Installation du framework express "npm i express"
         -Installation du package nodemon pour l'éxution du server" npm i nodemon"
         -Multer pour la parie de sauvgarde des images "npm i multer"
         -fs
         -body-parser
         -bcrypt
         -cors
         -dotenv
         -express-rate-limit
         -jsonwebtoken
                                
### Configuation de la vade données 
Toujours dans le dossier server(backend)
On installera tous la partie qui concerne la configuration de la base de données         
         
         -Mysql PHPmyadmin
         -Squelise et Sequlize CLI


 On développera la partie de la base de données pour la création des modèles'User', 'Post', Comment' avec les commande suivantes/



### Client

On utlise sass
Pour l'installation on fera npm i sass
ensuite pour la partie compilation 
sass style.scss index.css pour la liason  de style a index 
sass --watch _styles.scss index.css pour compiler tous le scss en css

  dossier utlis
  dans ce dossier on a aura deux ficher important 
  Auth.js et api.js
  auth .js  permet utiliser l'échange d'authentification dans mon application. il récupère le jeton du stockage local.pour l'authentification.