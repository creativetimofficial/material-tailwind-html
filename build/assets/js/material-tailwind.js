(function() {

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

// Modal
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

  ready(openModal);
  ready(closeModal);
}());

window.onload = function() {

  // Alert Dismiss
  var alert_dismiss = document.querySelectorAll('[alert-dismiss]');
  alert_dismiss.forEach((dismiss) =>
    dismiss.addEventListener('click', function () {
      dismiss.parentElement.classList.add('hide');
    })
  )

  // Dropdown Trigger
  var dropdown_trigger = document.querySelectorAll('[dropdown-trigger]');
  dropdown_trigger.forEach((open) =>
    open.addEventListener('click', function () {
      open.parentElement.classList.toggle('open');
    })
  )


  // Colored shadow
  if (document.querySelector('.blur-shadow-image')) {
    var shadowCards = document.querySelectorAll('.blur-shadow-image');
    var shadowCardsRounded = document.querySelectorAll('.blur-shadow-image.rounded-circle');
  
    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {
        var div = document.createElement("DIV");
        shadowCardsRounded[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow', 'rounded');
  
        var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
        var el = shadowCardsRounded[i].nextElementSibling;
  
        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {
      for (var i = 0; i < shadowCards.length; i++) {
        var div = document.createElement("DIV");
        shadowCards[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow');
  
        var currentSrc = shadowCards[i].children[0].getAttribute('src');
        var el = shadowCards[i].nextElementSibling;
  
        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
  }

  // Colored shadows for Avatars
  if (document.querySelector('.blur-shadow-avatar')) {
    var shadowCards = document.querySelectorAll('.blur-shadow-avatar');
    var shadowCardsRounded = document.querySelectorAll('.blur-shadow-avatar.rounded-full');

    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {

        var div = document.createElement("DIV");
        shadowCardsRounded[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow', 'rounded-full', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCardsRounded[i].firstElemenpartChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
        var el = shadowCardsRounded[i].nextElementSibling;

        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {
      for (var i = 0; i < shadowCards.length; i++) {

        var div = document.createElement("DIV");
        shadowCards[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCards[i].firstElementChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCards[i].children[0].getAttribute('src');
        var el = shadowCards[i].nextElementSibling;

        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
  }

  // Inputs

  // when input is focused add focused class for style
  var input_group = document.querySelectorAll(".form-control");
  input_group.forEach((el) =>
    el.addEventListener('focus', function () {
      el.parentElement.classList.add('focused');
    })
  )
  // when input is focused remove focused class for style
  var input_group_focused = document.querySelectorAll(".form-control");
  input_group_focused.forEach((el) =>
    el.addEventListener('focusout', function () {
      el.parentElement.classList.remove('focused');
    })
  )

  // Material Design Input function
  var inputs = document.querySelectorAll('input');

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].hasAttribute('value')){
      inputs[i].parentElement.classList.add('is-filled');
    }

    inputs[i].onkeyup = function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      } else {
        this.parentElement.classList.remove('is-filled');
      }
    };

    inputs[i].addEventListener('focusout', function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      }
    }, false);
  }

}