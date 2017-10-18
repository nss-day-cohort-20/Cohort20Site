'use strict';
// dependencies
let $ = require('jquery');
require('handlebars');

// handlebars templates
let loadNav = require('../templates/navbar.hbs');
let photogrid = require('../templates/photo_grid.hbs');
// student data in json file
const { cohort } = require('../data/cohort.json');

$('#navBar').append(loadNav);

let studentInfoGrid = photogrid({ cohort });
$('#photoGrid').append(studentInfoGrid);

// switch to fun pic on hover
function toFunPic() {
	// console.log('this', this);
	$(this)
		.find('.profile-pic')
		.hide();
	$(this)
		.find('.fun-pic')
		.show();
}
function toProPic() {
	$(this)
		.find('.fun-pic')
		.hide();
	$(this)
		.find('.profile-pic')
		.show();
}

$('.overlay-container').hover(toFunPic, toProPic);

// animation runs on load; hiding/showing images

function reloadAnimation() {
	(function loadingAnimation(i) {
		setTimeout(function() {
			$(`#groupPhoto${i}`).addClass('hide');
			$(`#groupPhoto${i + 1}`).removeClass('hide');
			if (++i < 12) {
				loadingAnimation(i);
			}
		}, 175);
	})(0);
}

reloadAnimation();

$('#reloadButton').on('click', () => {
	console.log('click!');
	$(`#groupPhoto12`).addClass('hide');
	$(`#groupPhoto0`).removeClass('hide');
	reloadAnimation();
});
