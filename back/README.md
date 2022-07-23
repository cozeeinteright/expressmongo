# This is web api server
 flamework is express
 database is mongodb
 ORM is prisma

# instraction
in Bash
 1. npm init
 2. yarn add express
 3. yarn add typescript
 4. yarn add @types/node
 5. yarn add @types/express
 6. yarn add ts-node
 7. yarn add ts-node-dev

 8. yarn add eslint
 9. yarn add @typescript-eslint/parser
 10. yarn add @typescript-eslint/eslint-plugin
 11. npx eslint --init
 12. yarn add prettier
 13. yarn add eslint-config-prettier

 14. yarn add prisma
 15. yarn add @prisma/client


# run
 sudo docker compose up --build

# mongo container shell accsess
 sudo docker exec -it mongo1 mongosh

# replica set 

 error message
 Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. https://pris.ly/d/mongodb-replica-set

 1. edit docker-compose.yaml
    +   command: --replSet rs0
 2. do rs.intiate() in the mongo container
     sudo docker compose up --build
     sudo docker exec -it mongo1 mongosh
     rs.initiate()
     -> mongo1 become PrimaryOnlyService. 





 