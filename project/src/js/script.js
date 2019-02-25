import { tabs } from './modules/tab.js';
import { timer } from './modules/timer.js';
import { modal } from './modules/modal.js';
import { forms } from './modules/forms.js';
import { slider } from './modules/slider.js';
import { calc } from './modules/calc.js';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    tabs();
    timer();
    modal();
    forms();
    slider();
    calc();
});