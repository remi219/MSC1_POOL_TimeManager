# MSC1_POOL_TimeManager

Time tracking application with team management tool and data visualization.

## Tips
The TimeManager application is running on an AWS instance reachable here http://54.198.162.120:8080/

However if you prefer running it locally, use the following instructions.

## Installation

Install Docker and docker-compose (cf. Google)

## Usage
Go to the root of repository:
```bash
cd MSC1_POOL_TimeManager
```
Start containers:
```bash
docker-compose up -d --build
```
Make sure the 3 containers are running:
```bash
docker ps
```
Then, you can go to http://localhost:8080/ and start using the application.

When finished you can stop the containers (your data will be saved): 
```bash
docker-compose stop
```

## Notes
Some test accounts have alreaedy been created.

To connect with these accounts, use the followings email/password:

1. Administrator:
```bash
email: admin@test.com
password: admin
```  
2. Manager:
```bash
email: emma@test.com
password: emma
```  
3. Employee:
```bash
email: remi@test.com
password: remi
```  