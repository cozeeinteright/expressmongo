rs.initiate({
    _id: "rs0",
    members: [{
      _id: 0,
      host: "mongo:27017"
    }, {
      _id: 1,
      host: "secondary:27017"
    }, {
      _id: 2,
      host: "mongodb-arbiter:27017",
      arbiterOnly: true
    }]
  });