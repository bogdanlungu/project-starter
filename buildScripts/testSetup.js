/* This file isn't transpiled, so use must use CommonJS and ES5
----------------------------------- */


/* Register babel to transpile before tests run
----------------------------------- */
require('babel-register')();


/* Disable webpack features regarding css so Mocha is not crashing
----------------------------------- */
require.extensions['.css'] = function() {};
