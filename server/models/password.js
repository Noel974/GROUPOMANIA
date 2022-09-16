// Import du packages dans l'appli
const passwordValidator = require("password-validator");

// Créer un schéma
const passwordSchema = new passwordValidator();

// Lui ajouter les propriétés suivantes
passwordSchema
    .is().min(8)                                    // Longueur minimale 8
    .is().max(100)                                  // Longueur maximale 100
    .has().uppercase()                              // Doit contenir des lettres majuscules
    .has().lowercase()                              // Doit contenir des lettres minuscules
    .has().digits(2)                                // Doit avoir au moins 2 chiffres
    .has().not().spaces()                           // Ne doit pas avoir d'espaces

// Permettre l'export du schéma dans d'autres fichiers
module.exports = passwordSchema;
