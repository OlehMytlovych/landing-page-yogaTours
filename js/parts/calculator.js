export function calculator() {
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

//module.exports = calculator;