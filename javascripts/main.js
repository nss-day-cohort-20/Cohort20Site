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

if ($('.fa-sun-o').hasClass('hide')) {
  $('.overlay-container').hover(toFunPic, toProPic);
} else {
  $('.overlay-container').hover(toProPic, toFunPic);
}

$('.fa-moon-o').on('click', () => {
  $('body').addClass('darkThemedBg');
  $('.scaryTheme').removeClass('hide');
  $('.fun-pic').removeClass('hide');
  $('.fun-pic').removeClass('opaque-pic');
  $('.profile-pic').addClass('hide');
  $('.profile-pic').addClass('opaque-pic');
  $('.fa-moon-o').toggle('hide');
  $('.fa-sun-o').toggle('hide');
  $('.overlay-container').hover(toProPic, toFunPic);
});

$('.fa-sun-o').on('click', () => {
  $('.fa-moon-o').toggle('hide');
  $('.fa-sun-o').toggle('hide');
  $('.scaryTheme').addClass('hide');
  $('body').removeClass('darkThemedBg');
  $('.profile-pic').removeClass('hide');
  $('.profile-pic').removeClass('opaque-pic');
  $('.fun-pic').addClass('hide');
  $('.fun-pic').addClass('opaque-pic');
  $('.overlay-container').hover(toFunPic, toProPic);
  $('.overlay-container').hover(toFunPic, toProPic);
});
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
  })(1);
}

reloadAnimation();

$('#reloadButton').on('click', () => {
  $(`#groupPhoto12`).addClass('hide');
  $(`#groupPhoto0`).removeClass('hide');
  reloadAnimation();
});
