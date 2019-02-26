'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var tabs = require('./parts/tabs.js');

  var timer = require('./parts/timer.js');

  var modal = require('./parts/modal.js');

  var forms = require('./parts/forms.js');

  var slider = require('./parts/slider.js');

  var calc = require('./parts/calc.js');

  tabs.tabs();
  timer.timer();
  modal.modal();
  forms.forms();
  slider.slider();
  calc.calc();
});