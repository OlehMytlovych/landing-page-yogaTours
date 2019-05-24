export function modal() {
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

//module.exports = modal;