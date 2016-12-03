/* Initialize
----------------------------------- */
import express from 'express';
import path from 'path';
import open from 'open';


/* Import Webpack
----------------------------------- */
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */    /* --> disable eslint no-console here*/


/* Declare port and app by serving a file
----------------------------------- */
const port = 3000;
const app = express();
const compiler = webpack(config);


/* Use webpack in the express app
----------------------------------- */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath // from webpack.config.dev
}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
