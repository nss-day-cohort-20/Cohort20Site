'use strict';
// dependencies
let $ = require('jquery');
require('handlebars');

// handlebars templates
let photogrid = require('../templates/photo_grid.hbs');
let techGrid = require('../templates/technologies.hbs');

// student data in json file
const { cohort } = require('../data/cohort.json');
// technologies data in json file
const { technologies } = require('../data/technologies.json');

let studentInfoGrid = photogrid({ cohort });
$('#photoGrid').append(studentInfoGrid);

let technologiesInfoGrid = techGrid({ technologies });
$('#techGrid').append(technologiesInfoGrid);

$('.overlay-container').hover(toFunPic, toProPic);

// switch to fun pic on hover
function toFunPic() {
	$(this)
		.find('.profile-pic')
		.addClass('hide');
	$(this)
		.find('.fun-pic')
		.removeClass('hide');
}
function toProPic() {
	$(this)
		.find('.fun-pic')
		.addClass('hide');
	$(this)
		.find('.profile-pic')
		.removeClass('hide');
}

$('#darkBtn').on('click', () => {
	$('#darkBtn').addClass('hide');
	$('#regBtn').removeClass('hide');
	$('body').addClass('fun-theme');
	$('.fun-pic').removeClass('hide');
	$('.fun-pic').removeClass('opaque-pic');
	$('.profile-pic').addClass('hide');
	$('.profile-pic').addClass('opaque-pic');
	$('.overlay-container').hover(toProPic, toFunPic);
});

$('#regBtn').on('click', () => {
	$('#darkBtn').removeClass('hide');
	$('#regBtn').addClass('hide');
	$('body').removeClass('fun-theme');
	$('.profile-pic').removeClass('hide');
	$('.profile-pic').removeClass('opaque-pic');
	$('.fun-pic').addClass('hide');
	$('.fun-pic').addClass('opaque-pic');
	$('.overlay-container').hover(toFunPic, toProPic);
});

// animation runs on load; hiding/showing images
function reloadAnimation() {
	(function loadingAnimation(i) {
		setTimeout(function () {
			$(`#groupPhoto${i}`).addClass('hide');
			$(`#groupPhoto${i + 1}`).removeClass('hide');
			if (++i < 12) {
				loadingAnimation(i);
			}
		}, 200);
	})(1);
}

$('#reloadButton').on('click', () => {
	$(`#groupPhoto12`).addClass('hide');
	$(`#groupPhoto0`).removeClass('hide');
	reloadAnimation();
});

// current copyright year for footer
let currentYear = new Date().getFullYear();
$('#current-year').text(currentYear);

$(document).ready(() => {
	reloadAnimation();
});
