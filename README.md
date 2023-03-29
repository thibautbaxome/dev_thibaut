# README #

Bonjour à toi mon lapin ! 
Bienvenue sur le dépôt des utilitaires du ZaxThème. Celui-ci est indispensable et doit être importée au début projet.

### Installation ###

- Copier le contenu de ce dépôt (sans les fichiers qui lui sont propres comme le .gitignore, dossier git, etc...)
- Mettre à jour l'url du store dans le package.json (store_name)
- Ajouter ce contenu à la racine de votre nouveau projet et commiter les changements avec le message suivant : "[+] AxUtilities"
- Puller le thème à l'aide de la commande "npm run pull"
- Comparer les fichiers suivants en gardant bien les modifications du dépôt AxUtilities : 
    ```
    - layout/theme.liquid
    - config/setting_schema.json
    ```
- Commiter les changements avec le message suivant : "[+] Theme Init"

### Les commandes de bases ###

* ```npm run build``` (compile une fois pour la prod)
* ```npm run dev``` (compile et watch votre travail)
* ```npm run pull``` (shopify theme pull)
* ```npm run push``` (shopify theme push)
* ```npm run serve``` (shopify theme dev)
