'use strict';
// dependencies
let $ = require('jquery');
require('handlebars');

// handlebars templates
let photogrid = require('../templates/photo_grid.hbs');
let techGrid = require('../templates/technologies.hbs');
let loadNav = require('../templates/navbar.hbs');
let loadFooter = require('../templates/footer.hbs');

// student data in json file
const { cohort } = require('../data/cohort.json');
// technologies data in json file
const { technologies } = require('../data/technologies.json');

$('#navbar').append(loadNav);
$('#footer').append(loadFooter);

let studentInfoGrid = photogrid({ cohort });
$('#photoGrid').append(studentInfoGrid);

let technologiesInfoGrid = techGrid({ technologies });
$('#techGrid').append(technologiesInfoGrid);

$('.overlay-container').hover(toFunPic, toProPic);

// switch to fun pic on hover
function toFunPic() {
  // console.log('this', this);
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
// if ($('#regBtn').hasClass('hide')) {
//   $('.overlay-container').hover(toFunPic, toProPic);
// } else {
//   $('.overlay-container').hover(toProPic, toFunPic);
// }
$('#darkBtn').on('click', () => {
  $('#darkBtn').addClass('hide');

  $('#regBtn').removeClass('hide');
  // $('.scaryTheme').addClass('hide');
  $('body').addClass('darkThemedBg');
  $('.fun-pic').removeClass('hide');
  $('.fun-pic').removeClass('opaque-pic');
  $('.profile-pic').addClass('hide');
  $('.profile-pic').addClass('opaque-pic');
  $('.overlay-container').hover(toProPic, toFunPic);
});

$('#regBtn').on('click', () => {
  $('#darkBtn').removeClass('hide');
  $('#regBtn').addClass('hide');
  $('body').removeClass('darkThemedBg');
  // $('.scaryTheme').removeClass('hide');
  $('.profile-pic').removeClass('hide');
  $('.profile-pic').removeClass('opaque-pic');
  $('.fun-pic').addClass('hide');
  $('.fun-pic').addClass('opaque-pic');
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
