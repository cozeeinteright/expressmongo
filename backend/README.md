# build command 
 sudo docker compose up --build

# Test command
 yarn test

# start backend fiart
 cd backend
 sudo docker compose up --build

# MongoDB Server log is available through Docker's container log
 sudo docker logs container-nama
 (sudo docker logs backend-mongo-1)

# create volume
 sudo docker volume create mongodb
 sudo docker volume create mongodb_config
 sudo docker volume create mongodbsecondary


# mongo container shell accsess
 sudo docker exec -it mongo mongosh
 (in case of container name is mongo )
 rs.initiate()
 rs.add( { host: "secondary:27017" } )
 rs.add( { host: "mongodb-arbiter:27017" } )

