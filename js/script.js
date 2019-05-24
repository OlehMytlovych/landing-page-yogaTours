import {calculator} from './parts/calculator';
import {form} from './parts/form';
import {modal} from './parts/modal';
import {slider} from './parts/slider';
import {tabs} from './parts/tabs';
import {timer} from './parts/timer';

window.addEventListener('DOMContentLoaded', function() {
  
  "use strict";
  //<ES6
  /*let calculator = require('./parts/calculator'),
      form = require('./parts/form'),
      modal = require('./parts/modal'),
      slider = require('./parts/slider'),
      tabs = require('./parts/tabs'),
      timer = require('./parts/timer');*/

  calculator();
  form();
  modal();
  slider();
  tabs();
  timer();
  
});