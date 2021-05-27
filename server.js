var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var cors = require('cors');

var app = express();
var jsonParser = bodyParser.json()

const PORT = process.env.SERVER_PORT || 5000;

//Initialize database
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/moviedb";
var collectionName = "collection";
var dbName = "database";

MongoClient.connect(url,  function(err, db) {
  if (err) throw err;
  var movieDb = db.db(dbName);
  movieDb.createCollection(collectionName, function(err, res) {
    if (!err)console.log("Collection created!");
  });
  db.close();
});

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});
app.use(cors());

//Get all documents
app.get('/getall', function(req, res){
  MongoClient.connect(url,  function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(collectionName).find({}).toArray((err, results) => {
      if(err) throw err;
      res.status(200).json(results);
      db.close();
    });
  });
});

//Get one document
app.get('/getone/:id', function(req, res){
  let id = req.params.id;
  MongoClient.connect(url,  function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(collectionName).findOne({"id":String(id)}).then(result => {
      if(result === null){
        let empty = {
          results:"No results found!"
        }
        res.status(200).json(JSON.stringify(empty));
      }else{
        res.status(200).json(JSON.stringify(result));
      }
      db.close();
    });
  });
});

//Add one document
app.post('/addone', jsonParser, function(req, res){
  MongoClient.connect(url,  function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection("favorites").insertOne(req.body);
    db.close();
  });
});

//Get an api key
app.get('/api_key', function(req, res){
  res.json(JSON.stringify({apiKey:"KEY"}));
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log( `Server listening on port ${PORT}`);

})

module.exports = app;
