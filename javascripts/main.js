'use strict';
// dependency libraries (bootstrap needs jQuery and Popper.js available globally)
// window.jQuery = require('jquery');
// window.Popper = require('Popper.js');
// require('bootstrap');

let $ = require('jquery');
const Handlebars = require('handlebars');

let photogrid = require('../templates/photo_grid.hbs');
let loadNav = require('../templates/navbar.hbs');

$('#navBar').append(loadNav);
$('#photoGrid').append(photogrid);
