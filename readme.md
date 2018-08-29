# Number Block Microservice
Number block management = 6xxx [yyyy]

[yyyy] blocks comes in blocks of 10,000 numbers.

Design a microservice which does number block management from a telco perspective.
1. need to track status of numbers
2. need to track history of numbers
3. decouple service and number, anything to do with service delivered to the customer using that number is not needed
4. microservice must be able to scale horizontally
5. microservice must supply API to frontend order portal for number selection
6. number to be in quarantine for 6 months before the number can be reassigned again.
7. History of number assignments due to changes.

Design information system, and deployment architecture. Discuss the type of API exposed to consuming applications.


# Architecture

The set-up of the microservice would start with a api gateway/load balancer which will redirect requests to the relevant microservice instance. The microservices will be connected to a SQL cluster that handles all the requests and will store the data in each of the MySQL Data Nodes. This allows us to eeasily scale horizontally by deploying more microservice instances or deploying more MySQL Data Nodes.

![Architecture Diagram](https://i.imgur.com/ao4VUpF.png)

# Load balancing

A load balancer/api gateway should be deployed when people connect to the api end point and the load should be distributed by a weighted response time algorithm where the load balancer will essentially check the servers response time to determine which microservice instance should the request be redirected to. The instance with the fastest response time will get the request and eventually the load will be balanced out across all instances of the microservice.

# Database
* **numbers** table will store all numbers, the current status of the number and the customer that currently is utilising the number
* **number_action** table contains all the actions that can be done to a number such as unassigning a number, assigning a number, porting a number
* **number_history** stores all historical data for a particular number
* **number_service** provides all the services that a number is entitled to

![Database Diagram](https://i.imgur.com/Zu0kayo.jpg)

# API
Declarations: /routes/web.php

API Documentation: /public/apidoc/

* HTTP GET- /number/index
* HTTP POST - /number/store
* HTTP POST - /number/assign
* HTTP POST - /number/{number}/update
* HTTP GET- /number/{number}/history


# Automation
Commands to be ran daily

* CheckIfUnderQuarantine: /app/Console/Commands/CheckIfUnderQuarantine.php
    
    Command basically runs daily to check if a number is under quarantine and if a number should be placed into quarantine or removed out of quarantine if 6 months has passed based on the number_history table.
