export function slider() {
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

//module.exports = slider;