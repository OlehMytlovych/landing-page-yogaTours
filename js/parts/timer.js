export function timer() {
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

//module.exports = timer;