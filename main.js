// https://stackoverflow.com/a/59621673/2327328
var chance = require('chance').Chance();
global.window.chance = chance;
var plotly = require('plotly.js');
global.window.Plotly = plotly.Plotly;
// browserify main.js -o bundle.js