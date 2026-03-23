# Devoir : Serveur Web avec Node.js et Express

## Objectif
Créer un serveur HTTP simple à l’aide de Node.js et du framework Express.  
Le serveur devra exposer plusieurs routes, servir des fichiers statiques et gérer des erreurs basiques.

## Prérequis
- Node.js (version 12 ou supérieure) installé sur votre machine.
- npm (installé automatiquement avec Node.js).
- Un navigateur web et un éditeur de code (VS Code, etc.).

## Installation du projet

1. **Créer un dossier pour le projet**  
   ```bash
   mkdir devoir-express
   cd devoir-express
```

1. Initialiser le projet npm
   ```bash
   npm init -y
   ```
   Cela crée un fichier package.json avec des valeurs par défaut.
2. Installer Express
   ```bash
   npm install express
   ```
3. Créer le fichier principal
      Créez un fichier app.js (ou server.js) à la racine du projet.

Structure du projet recommandée

```
devoir-express/
├── public/ # Dossier pour les fichiers statiques (CSS, images, HTML)
│ ├── index.html
│ └── style.css
├── app.js # Code principal du serveur
├── package.json
└── node_modules/ (généré automatiquement, ne pas modifier directement)
```

Lancer l’application

```bash
node app.js
```

Le serveur démarrera sur http://localhost:3000 (ou le port que vous avez défini).

---

Consignes du devoir

1. Serveur de base

Écrivez dans app.js le code nécessaire pour :

· Importer express.
· Créer une instance d’application.
· Écouter sur le port 3000 et afficher un message dans la console.

2. Routes

Implémentez les routes suivantes :

Méthode URL Comportement attendu
GET / Renvoyer "Bienvenue sur le serveur !"
GET /about Renvoyer une page HTML simple avec <h1> et <p>
GET /api/users Renvoyer un objet JSON contenant une liste d’utilisateurs (par exemple [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
POST /api/users (Bonus) Accepter des données JSON et ajouter un utilisateur fictif

3. Fichiers statiques

· Créez un dossier public.
· Placez-y un fichier index.html simple.
· Configurez Express pour servir les fichiers statiques depuis ce dossier avec express.static.
· Testez en accédant à http://localhost:3000/index.html.

4. Gestion des erreurs

· Si une route inexistante est appelée (404), renvoyez un message "Page non trouvée" avec le code HTTP approprié.
· Utilisez un middleware de gestion d’erreurs pour capturer les erreurs serveur (500) et afficher un message personnalisé.

5. (Facultatif) Middleware de journalisation

Créez un middleware qui affiche dans la console la méthode, l’URL et l’heure de chaque requête.

---

Dépannage : erreur Cannot find module 'nodeevents'

Pendant l’installation ou l’exécution, vous avez peut-être rencontré cette erreur :

```
Unable to find module 'nodeevents'
    at Module._resolveFilename (internal/modules/cjs/loader.js:1606:10)
    ...
```

Cause probable :
Le dossier node_modules est corrompu ou une installation a échoué.
Express ne dépend pas d’un module nommé nodeevents ; ce problème survient souvent après une installation incomplète ou une modification accidentelle des fichiers de node_modules.

Solution :

1. Supprimez le dossier node_modules et le fichier package-lock.json
   ```bash
   # Windows (cmd)
   rmdir /s /q node_modules
   del package-lock.json
   
   # macOS/Linux
   rm -rf node_modules package-lock.json
   ```
2. Videz le cache npm (optionnel)
   ```bash
   npm cache clean --force
   ```
3. Réinstallez les dépendances
   ```bash
   npm install
   ```
4. Vérifiez que Express est bien installé
   ```bash
   node -e "require('express')"
   ```
   Si aucune erreur n’apparaît, l’installation est réussie.
5. Relancez votre serveur
   ```bash
   node app.js
   ```

Si le problème persiste :

· Vérifiez que vous utilisez une version récente de Node.js (LTS).
· Créez un projet test vierge pour isoler l’erreur.
· Assurez-vous qu’aucun package global comme @cjs n’interfère (npm list -g --depth=0).

---

Rendu du devoir

· Archivez le dossier complet sans node_modules (ajoutez-le au .gitignore si vous utilisez Git).
· Incluez le fichier README.md avec vos instructions d’installation et d’exécution.
· Joignez une capture d’écran montrant le serveur en fonctionnement dans le navigateur.

---

Ressources

· Documentation Express
· Guide Node.js sur les modules
· Comment gérer les erreurs avec Express

Bon travail !

```

Ce README couvre l’installation, les consignes typiques d’un devoir Express, la résolution détaillée de l’erreur `nodeevents`, et les informations pour le rendu.  
Adaptez les consignes (les routes, les bonus) en fonction de votre véritable devoir.
