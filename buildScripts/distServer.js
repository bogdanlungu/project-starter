/* Initialize
----------------------------------- */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */    /* --> disable eslint no-console here*/


/* Declare port and app by serving a file
----------------------------------- */
const port = 3000;
const app = express();

app.use(compression()); // invoke gzip
app.use(express.static('dist'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


/* Mock a database and show an API point
----------------------------------- */
app.get('/users', function (req, res) {
  res.json([
    {"id": 1, "firstName":"John","lastName":"Smith","email":"john@smith.com"},
    {"id": 1, "firstName":"John2","lastName":"Smith2","email":"john@smith2.com"},
    {"id": 1, "firstName":"John3","lastName":"Smith3","email":"john@smith3.com"},
  ]);
});


/* Listen on the port and serve url
----------------------------------- */
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
