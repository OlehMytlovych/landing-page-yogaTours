window.addEventListener("DOMContentLoaded", function (){
'use strict';

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

  //Using delegetion attaching EventListener to the parent
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
  
  // TIMER

  let deadline = "2019-05-14";//if the date expires, change the date so the timer works appropriately

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

  //MODAL WINDOW

  let moreButton = document.querySelector('.more'),//The "Узнать больше" button
      overlay = document.querySelector('.overlay'),//the modal window
      closeCross = document.querySelector('.popup-close');

  moreButton.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');//this means current element (similar to event.target somehow)
    document.body.style.overflow = 'hidden';//to disable scroll on the page while the modal window is visible 
  });

  closeCross.addEventListener('click', function() {
    overlay.style.display = 'none';
    moreButton.classList.remove('more-splash');
    document.body.style.overflow = '';
  })
});