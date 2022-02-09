
// when input is focused add focused class for style
function focused(el) {
  if (el.parentElement.classList.contains('input-group') ) {
    el.parentElement.classList.add('focused');
  }
}

// when input is focused remove focused class for style
function defocused(el) {
  if (el.parentElement.classList.contains('input-group') ) {
    el.parentElement.classList.remove('focused');
  }
}

// helper for adding on all elements multiple attributes
function setAttributes(el, options) {
   Object.keys(options).forEach(function(attr) {
     el.setAttribute(attr, options[attr]);
   })
}

// adding on inputs attributes for calling the focused and defocused functions
if (document.querySelectorAll('.input-group').length != 0) {
  var allInputs = document.querySelectorAll('input.form-control');
  allInputs.forEach(el=>setAttributes(el, {"onfocus": "focused(this)", "onfocusout": "defocused(this)"}));
}


(function() {

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

// Start Alert Dismiss Script
  function alertDismiss() {
    var alert_dismiss = document.querySelectorAll('[alert-dismiss]');
    alert_dismiss.forEach((dismiss) =>
      dismiss.addEventListener('click', function () {
        dismiss.parentElement.classList.add('hide');
      })
    )
  }
// End Alert Dismiss Script


  // Start Modal Script
  function openModal() {
    var modalTrigger = document.querySelectorAll('[modal-trigger]');

    for(var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].onclick = function() {
        var modalWindow = document.getElementById('modal');

        modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
      }
    } 
  }

  function closeModal(){
    var closeButton = document.querySelectorAll("[modal-close]");
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = document.getElementById('modal');
          
          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   
  }
// End Modal Script


  ready(openModal);
  ready(closeModal);
  ready(alertDismiss);
}());