/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calculator.js":
/*!********************************!*\
  !*** ./js/parts/calculator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator() {
  //CALCULATOR

  let people = document.querySelectorAll('.counter-block-input')[0],
      days = document.querySelectorAll('.counter-block-input')[1],
      place = document.querySelector('#select'),
      totalOutput = document.querySelector('#total'),
      peopleSum = 0,
      daysSum = 0,
      placeIndex = +place.options[0].value,//index given by default
      totalSum;

  totalOutput.innerHTML = 0;
  people.value = 0;
  days.value = 0;

  people.addEventListener('blur', function(){
    peopleSum = +this.value;
    totalSum = (peopleSum + daysSum) * 4000 * placeIndex;

    if (days.value == '' || people.value == '' || days.value == '0' || people.value == '0'){
      totalOutput.innerHTML = 0;
    } else {
      totalOutput.innerHTML = totalSum;
    }

    
  });

  days.addEventListener('blur', function(){
    daysSum = +this.value;
    totalSum = (peopleSum + daysSum) * 4000 * placeIndex;

    if (days.value == '' || people.value == '' || days.value == '0' || people.value == '0'){
      totalOutput.innerHTML = 0;
    } else {
      totalOutput.innerHTML = totalSum;
    }
  });

  place.addEventListener('change', function(){
    if (days.value == '' || people.value == '' || days.value == '0' || people.value == '0'){
      totalOutput.innerHTML = 0;
    } else {
      let a = totalSum;
      totalOutput.innerHTML = a * this.options[this.selectedIndex].value;
    }
    
  });
}

module.exports = calculator;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  // FORM

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так.',
  };
  let form = document.querySelectorAll('form'), //select two forms: from modal and "we will get in touch" section at the end    input,
      input,//will be used to select the input(s) of one of the forms
      statusMessage = document.createElement('div');//to display a message according to stage and successfulness
  
  form = Array.from(form);//to create an array from a nodeList(you can't put eventListeners on nodeLists)
  statusMessage.classList.add('status');

  function sendForms(){
    return new Promise(function(resolve, reject){

      for (let i = 0; i < form.length; i++){//assigning eventListeners to each form
        form[i].addEventListener('submit', function(){
          event.preventDefault();
          
          form = this;
          form.appendChild(statusMessage);

          input = form.getElementsByTagName('input');
  
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          let formData = new FormData(form);
          //request.send(formData)
          let obj = {};
          formData.forEach(function(value, key){
            obj[key] = value;
          });
          let json = JSON.stringify(obj);
          
          request.send(json);

          request.addEventListener('readystatechange', function(){
            if (request.readyState < 4){
              statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200){
                resolve();
            } else {
              reject();
            }
          });
        });
      }
    });
  }

  sendForms()
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure);
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    //MODAL WINDOW

  let moreButton = document.querySelector('.more'),//The "Узнать больше" button
  descriptionBtn = document.querySelectorAll('.description-btn'),//the buttons from the tabs
  overlay = document.querySelector('.overlay'),//the modal window
  closeCross = document.querySelector('.popup-close');

  descriptionBtn = Array.from(descriptionBtn);//making an array from the nodelist to push the moreButton
  descriptionBtn.push(moreButton);


  descriptionBtn.forEach(function(el){
    el.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');//this means current element (similar to event.target somehow)
    document.body.style.overflow = 'hidden';//to disable scroll on the page while the modal window is visible 
    });
  });

  closeCross.addEventListener('click', function() {
    overlay.style.display = 'none';
    moreButton.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  // SLIDER

  let slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot'),
      sliderIndex = 0;

  dots = Array.from(dots);// to use indexOf when click on a dot

  function showSlide() {
    // the first slide will be shown when a user clicks right being on the last slide
    if (sliderIndex == slides.length){
      sliderIndex = 0;
    }
    // the last slide will be shown when a user clicks left being on the first slide
    if (sliderIndex < 0){
      sliderIndex = 3;
    }

    slides.forEach((item) => item.style.display = 'none');
    slides[sliderIndex].style.display = 'block';

    dots.forEach((item) => item.classList.remove('dot-active'));
    dots[sliderIndex].classList.add('dot-active');
  }

  showSlide();// to show only the first slide

  prev.addEventListener('click', function() {
    sliderIndex--;
    showSlide();
  });

  next.addEventListener('click', function() {
    sliderIndex++;
    showSlide();
  });

  dotWrap.addEventListener('click', function(event){
    if (event.target.classList.contains('dot')){
      //getting index of the clicked dot and assigning it to the appropriate slide
      sliderIndex = dots.indexOf(event.target);
      showSlide();
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  // TABS
  //Working with div class='info'
  let tab = document.querySelectorAll('.info-header-tab'),//get the buttons in the header
      info = document.querySelector('.info-header'),//parental element for the buttons
      tabContent = document.querySelectorAll('.info-tabcontent');//content that must be assigned to a particular tab

  function hideTabContent(a) {// to hide all the content elements
    for (let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');//manipulate classes in the css file to hide the content elements
    }
  } 

  hideTabContent(1);// Need to hide all the content elements except for the first one

  function showTabContent(b){//to show the content element we need
    if (tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  // attaching EventListener to the parent using delegetion
  info.addEventListener('click', function(event){
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')){
      // Using for-loop to assign a particular content element to a particular tab
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]){
          hideTabContent(0);//to hide the first content element
          showTabContent(i);//to display the one that matches the target of our click
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    // TIMER

  let deadline = "2019-06-14";//if the date expires, change the date so the timer works appropriately

  function getRemainingTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),//difference between the date when timer expires and the moment when the function is executed (ms)
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

    if (t < 0){ //making the timer look nice on the page in case the date has expired
      seconds = 0;
      minutes = 0;
      hours = 0;
    }

    return {
      'total' : t,
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours
    };
  }

  function setClock (id, endtime) { //id - the timer div's id
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getRemainingTime(endtime);

      function beautify(number){ // to add "0" before 0,1,2,3,4,5,6,7,8,9
        if (number < 10){
          number = `0${number}`;
        }

        return number;
      }

      hours.textContent = beautify(t.hours);
      minutes.textContent = beautify(t.minutes);
      seconds.textContent = beautify(t.seconds);

      if (t.total <= 0){ // when the timer reaches the deadline - stop timer
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline); // executing this function will create the timer. Changing the parameters will create a new timer
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
  
  "use strict";

  let calculator = __webpack_require__(/*! ./parts/calculator */ "./js/parts/calculator.js"),
      form = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js");

  calculator();
  form();
  modal();
  slider();
  tabs();
  timer();
  
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map