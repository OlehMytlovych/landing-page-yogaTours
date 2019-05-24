export function form() {
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

//module.exports = form;