# ACME

## Startup
 * Node.js must be installed
 * Database must be hosted (maybe locally with MariaDB or MySql)
 * npm install
 * modify .env
 * npm run dev


## Routes

| Verb | URI                                     | Level | Controller.method            | Action                                                   | Server response | Redirection client vers : |
| ---- | --------------------------------------- | ----- | ---------------------------- | -------------------------------------------------------- | --------------- | ------------------------- |
| GET  | /                                       | n/a   | AppController.home           | Rediriger vers la collection.                            | n/a             | GET /product/collection   |
| GET  | /product/collection                     | 1     | ProductController.collection | Afficher les produits par catégories.                    | JSONArray       | VIEW\_COLLECTION          |
| GET  | /product/detail/{productId}             | 1     | ProductController.detail     | Afficher le détail d'un produit.                         | JSONObject      | VIEW\_DETAIL n/a          |
| POST | /user/tobasket                          | 1     | UserController.tobasket      | Ajouter un produit au panier.                            | OK              | VIEW\_DETAIL n/a          |
| GET  | /user/basket                            | 1     | UserController.basket        | Afficher le panier.                                      | JSONArray       | VIEW\_BASKET              |
| GET  | /user/checkout                          | 1     | UserController.checkout      | Valider le panier.                                       | OK              | VIEW\_CHECKOUT            |
| GET  | /user/orders                            | 1     | UserController.orders        | Afficher la liste des commandes.                         | JSONArray       | VIEW\_ORDERS              |
| GET  | /user/order/{orderId}                   | 1     | UserController.order         | Afficher le détail d'une commande.                       | JSONObject      | VIEW\_ORDER               |
| GET  | /user/profile                           | 1     | UserController.profile       | Afficher le profil d'un revendeur.                       | JSONObject      | VIEW\_PROFILE             |
| GET  | /user/crud                              | 2     | UserController.crud          | Afficher les revendeurs (gestion).                       | JSONArray       | VIEW\_CRUD\_DEALERS       |
| GET  | /user/edit                              | n/a   | UserController.edit          | Créer un revendeur (saisie).                             | n/a             | VIEW\_EDIT\_DEALER        |
| GET  | /user/edit/{userId}                     | 2     | UserController.edit          | Modifier un revendeur (saisie).                          | JSONObjet       | VIEW\_EDIT\_DEALER        |
| GET  | /user/delete/{userId}                   | 2     | UserController.delete        | Supprimer un revendeur.                                  | OK              | GET /user/crud            |
| POST | /user/save                              | 2     | UserController.save          | Sauvegarder un revendeur (création ou modification).     | OK              | GET /user/crud            |
| GET  | /category/crud                          | 2     | CategoryController.list      | Afficher les catégories (gestion).                       | JSONArray       | VIEW\_CRUD\_CATEGORIES    |
| GET  | /category/edit                          | n/a   | CategoryController.edit      | Créer une catégorie (saisie).                            | n/a             | VIEW\_EDIT\_CATEGORY      |
| GET  | /category/edit/{categoryId}             | 2     | CategoryController.edit      | Modifier une catégorie (saisie).                         | JSONObject      | VIEW\_EDIT\_CATEGORY      |
| GET  | /category/delete/{categoryId}           | 2     | CategoryController.delete    | Supprimer une catégorie.                                 | OK              | GET /category/crud        |
| POST | /category/save                          | 2     | CategoryController.save      | Sauvegarder une catégorie (création ou modification).    | OK              | GET /category/crud        |
| GET  | /product/crud                           | 2     | ProductController.list       | Afficher les produits par catégories (gestion).          | JSONArray       | VIEW\_CRUD\_PRODUCTS      |
| GET  | /product/edit                           | n/a   | ProductController.edit       | Créer un produit (saisie).                               | n/a             | VIEW\_EDIT\_PRODUCT       |
| GET  | /product/edit/{productId}               | 2     | ProductController.edit       | Modifier un produit (saisie).                            | JSONObject      | VIEW\_EDIT\_PRODUCT       |
| GET  | /product/delete/{productId}/{all ou img} | 2     | ProductController.delete     | Supprimer un produit et/ou son image.                    | OK              | GET /product/crud         |
| POST | /product/save                           | 2     | ProductController.save       | Sauvegarder un produit (création ou modification).       | OK              | GET /product/crud         |
| GET  | /user/signin                            | n/a   | UserController.signin        | Login (saisie).                                          | n/a             | VIEW\_CONNECTION          |
| POST | /user/login                             | 1     | UserController.login         | Login (validation).                                      | OK              | GET /                     |
| GET  | /user/logout                            | 1     | UserController.logout        | Détruire la session.                                     | OK              | GET /user/signin          |
| GET  | /user/password\_1                       | n/a   | UserController.password\_1   | Saisir l'identifiant pour réinitialiser le mot de passe. | n/a             | VIEW\_PASSWORD\_1         |
| POST | /user/password\_2                       | 1     | UserController.password\_2   | Envoyer l'email pour réinitialiser le mot de passe.      | OK              | VIEW\_PASSWORD\_2         |
| GET  | /user/password\_3                       | n/a   | UserController.password\_3   | Saisie du nouveau mot de passe.                          | n/a             | VIEW\_PASSWORD\_3         |
| POST | /user/password\_4                       | 1     | UserController.password\_4   | Sauvegarde le nouveau mot de passe.                      | OK              | VIEW\_PASSWORD\_4         |
| GET  | /error\_404                             | n/a   | AppController.error\_404     | Afficher l'erreur 404 usernalisée.                       | n/a             | VIEW\_ERROR\_404          |

