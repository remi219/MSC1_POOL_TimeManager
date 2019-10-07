# MSC1_POOL_TimeManager

Time tracking application with team management tool and data visualization.

## Tips
The TimeManager application is running on an AWS instance reachable here http://34.238.172.100:8080/

However if you prefer running it locally, use the following instructions.

## Installation

Install Docker and docker-compose (cf. Google)

## Usage
Since the application is configured to be run on an AWS instance, you'll need to modify the **front/src/env.js** file in order to be able to run it on your localhost.
Open it and comment the line declaring the urlHost as the AWS instance public IP and uncomment the one with localhost instead:

```js
export default {
    /* Run on localhost */
    //urlHost: 'http://localhost:3001',   // UNCOMMENT THIS LINE
    /* Run on AWS instance */
    urlHost: 'http://34.238.172.100:3001',   // COMMENT THIS LINE
};
``` 
Then save the changes and go back to the root of repository.

You can now start the containers:
```bash
docker-compose up -d --build
```
Make sure the 3 containers are running:
```bash
docker ps
```
You should got an output similar to this one:
```bash
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                    NAMES
f907b01d15ea        msc1pooltimemanager_front   "docker-entrypoint.s…"   3 hours ago         Up 3 hours          0.0.0.0:8080->8080/tcp   msc1pooltimemanager_front_1
f315ee0f7fa9        msc1pooltimemanager_api     "/usr/src/app/entryp…"   3 hours ago         Up 3 hours          0.0.0.0:3001->3000/tcp   msc1pooltimemanager_api_1
c48718e84d66        mysql:5.7                   "docker-entrypoint.s…"   28 hours ago        Up 3 hours          3306/tcp, 33060/tcp      msc1pooltimemanager_bdd_1
```
Then, you can go to http://localhost:8080/ and start using the application.

When finished you can stop the containers (your data will be saved): 
```bash
docker-compose stop
```

## Notes
Some test accounts have already been created.

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

## License
The full repository is accessible here: https://github.com/remi219/MSC1_POOL_TimeManager

.