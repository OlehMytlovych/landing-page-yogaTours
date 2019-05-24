export function tabs() {
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

//module.exports = tabs;