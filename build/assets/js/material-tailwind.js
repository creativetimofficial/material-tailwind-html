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

function _defineProperty(obj, key, value) {
  if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
      obj[key] = value;
  }
  return obj;
};

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

  // if (document.querySelectorAll('.dropdown.open')) {
  //   window.addEventListener('click', function(e){
  //     if (!document.querySelector('.dropdown-menu').contains(e.target)){
  //       document.querySelector('.dropdown').classList.remove('open');
  //     }
  //   })  
  // }

  // Colored shadow
  if (document.querySelectorAll('[blur-shadow-image]')) {
    var shadowCards = document.querySelectorAll('[blur-shadow-image]');
    var shadowCardsRounded = document.querySelectorAll('[blur-shadow-image][rounded]');
  
    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {
        var div = document.createElement("DIV");
        shadowCardsRounded[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow', 'rounded-full');
  
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
  if (document.querySelector('[blur-shadow-avatar]')) {
    var shadowCards = document.querySelectorAll('[blur-shadow-avatar]');
    var shadowCardsRounded = document.querySelectorAll('[blur-shadow-avatar-rounded]');

    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {

        var div = document.createElement("DIV");
        shadowCardsRounded[i].append(div);
        div.classList.add('colored-shadow', 'rounded-full', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCardsRounded[i].firstElementChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
        div.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {
      for (var i = 0; i < shadowCards.length; i++) {

        var div = document.createElement("DIV");
        shadowCards[i].append(div);
        div.classList.add('colored-shadow', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCards[i].firstElementChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCards[i].children[0].getAttribute('src');
        div.style.backgroundImage = 'url(' + currentSrc + ')';
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

  // Collapse

  var accordion = document.querySelectorAll('.accordion-button');

  for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', openCurrentAccordion);
  }

  function openCurrentAccordion(e) {
    for(var i = 0; i < accordion.length; i++) {

      var parent = accordion[i].parentElement;
      var collapse = parent.nextElementSibling;

      if (this === accordion[i] && !collapse.classList.contains('open')) {
        accordion[i].setAttribute('aria-expanded','true');
        collapse.classList.add('open');
        collapse.style.maxHeight = collapse.scrollHeight + 'px';
      }
      else {
        accordion[i].setAttribute('aria-expanded','false');
        collapse.classList.remove('open');
        collapse.style.maxHeight = '0px';
      }
    }
  }

  // Radio
  var radios = document.querySelectorAll('[type="radio"]');
  
  radios.forEach((radio) =>
  radio.addEventListener('click', function () {
    for(var i = 0; i < radios.length; i++) {
      if(radios[i].hasAttribute('checked')){
        radios[i].removeAttribute('checked');
      }  
    }
  
    radio.setAttribute('checked','true');
  })
  )

  // Tooltips

  if (document.querySelectorAll('[data-target="tooltip"]')) {
    const buttons = document.querySelectorAll('[data-target="tooltip"]');

    buttons.forEach((button) => {
      
      const tooltip = button.nextElementSibling;
      const placement = tooltip.getAttribute('data-placement');

      const popperInstance = Popper.createPopper(button, tooltip, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
        placement: placement,
      });

      function show() {
        tooltip.setAttribute('data-show', '');

        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: true },
          ],
        }));

        popperInstance.update();
      }

      function hide() {
        tooltip.removeAttribute('data-show');
        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
          ],
        }));
      }

      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach((event) => {
        button.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        button.addEventListener(event, hide);
      });
    });

  }


  // Popovers
  if (document.querySelector('[data-target="popover"]')) {
    var triggers = document.querySelectorAll('[data-target="popover"]');
   
    function openPopover(event) {
      var element = event.target;
      var popover = element.nextElementSibling;

      var placement = popover.getAttribute('data-popper-placement');
      element = Popper.createPopper(element, popover, {
        placement: placement,
      });
      popover.classList.toggle("hidden");
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', openPopover);
    })
  }

  // Toggle

  var toggles = document.querySelectorAll('[data-attribute="toggle"]');
  toggles.forEach((trigger) =>
    trigger.addEventListener('click', function () {
      trigger.nextElementSibling.toggleAttribute('checked');
    })
  )
  
  // Carousel
  if (document.querySelector('[data-slides]')) {
    const timer = 5000;
    const slides = document.querySelector("[data-slides]");
    const slidesNumber = slides.childElementCount;
    const maxLeft = (slidesNumber - 1) * 100 * -1;
    
    let active = 0;
    
    function changeSlide(next = true) {
      if (next) {
        active += active > maxLeft ? -100 : active * -1;
      } else {
        active = active < 0 ? active + 100 : maxLeft;
      }
    
      slides.style.left = active + "%";
    }
    
    let autoChange = setInterval(changeSlide, timer);
    const restart = function() {
      clearInterval(autoChange);
      autoChange = setInterval(changeSlide, timer);
    };
    
    document.querySelector("[next-slide]").addEventListener("click", function() {
      changeSlide();
      restart();
    });
    
    document.querySelector("[prev-slide]").addEventListener("click", function() {
      changeSlide(false);
      restart();
    });
  }
}