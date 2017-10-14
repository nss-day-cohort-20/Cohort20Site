'use strict';
// dependencies
let $ = require('jquery');
const Handlebars = require('handlebars');

// handlebars templates
let loadNav = require('../templates/navbar.hbs');
let photogrid = require('../templates/photo_grid.hbs');
// student data in json file
const { cohort } = require('../data/cohort.json');

$('#navBar').append(loadNav);

let studentInfoGrid = photogrid({ cohort });
$('#photoGrid').append(studentInfoGrid);
