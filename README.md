# MSC1_POOL_TimeManager
## Mini-projet 3 (DevOps)

Mise en place de 3 containers Docker (API, FRONT et BDD)

## Installation

Installer Docker et docker-compose

```bash
(>> Google)
```

## Usage


1. Lancer les containers:
```bash
cd devops
docker-compose build
docker-compose up -d
```
~~2. (!: Uniquement au 1er setup!)

Créer les Roles dans la bdd (pour l'instant il faut le faire manuellement; il y moyen de le faire automatiquement, c'est en cours...):~~
~~```bash
docker exec -it devops_bdd_1 bash
mysql -p
```~~
~~Enter password: null
```sql
INSERT INTO Roles (label, createdAt, updatedAt) VALUES ("Administrator", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Roles (label, createdAt, updatedAt) VALUES ("Manager", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Roles (label, createdAt, updatedAt) VALUES ("Employee", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
```
Ensuite Ctrl+D pour quitter mysql et encore Ctrl+D pour sortir du container.~~

Après vous pouvez tester avec Postman.
 
 - Pour insérer un user :
POST http://localhost:3001/users
et dans body il faut passer à Raw et se mettre sur 'application/json', puis rentrer votre user en json:
```json
{
	"user" : {
		"username": "Bob",
		"email": "bob@test.com",
		"id_role": "1"
	}
}
```
 - Pour insérer un workingtime : (pour l'user dont l'id=1 par exemple) 
POST http://localhost:3001/workingtimes/1
```json
{
	"workingtime": {
		"id_user" : "1",
		"start" : "2019-09-12T15:35:00.000Z",
		"end" : "2019-09-12T18:50:00.000Z"
	}
}
```
 - Pour get :

 GET http://localhost:3001/users

 GET http://localhost:3001/users/1

 GET http://localhost:3001/users?username=Bob&email=bob@test.com
 
...etc


3. Pour stopper les containers: 
```bash
docker-compose stop
```
