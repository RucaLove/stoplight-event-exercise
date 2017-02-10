// ## Part 1
//
// Add DOM event listeners and handlers to toggle the on/off state of three bulbs.
//
// - When a user clicks on the "Stop" button, toggle the [stop bulb's color][stop-color].
// - When a user clicks on the "Slow" button, toggle the [slow bulb's color][slow-color].
// - When a user clicks on the "Go" button, toggle the [go bulb's color][go-color].


// ## Part 2
//
// Add new DOM event listeners and handlers to log the mouse state of each button.
//
// - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
// - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
//
// **TIP:** Each event type will need a separate event listener.

(function() {
  'use strict';
  var controls = document.getElementById('controls');

  var stop = document.getElementById('stopButton');
  var red = document.getElementById('stopLight');

  var slow = document.getElementById('slowButton');
  var orange = document.getElementById('slowLight');

  var go = document.getElementById('goButton');
  var green = document.getElementById('goLight');

  controls.addEventListener('mouseover', function(event) {
    console.log('Event target', event.target);
    if (event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton'){
      console.log('Eneterd ' + event.target.innerText + ' button.');
    }
  })

  controls.addEventListener('mouseout', function(event) {
    console.log('Event target', event.target);
    if (event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton'){
      console.log('Left ' + event.target.innerText + ' button.');
    }
  })

  controls.addEventListener('click', function(){
    console.log('Event target', event.target);

    if (event.target.id === 'stopButton'){
      red.classList.toggle('stop');
      orange.classList.remove('slow');
      green.classList.remove('go');
      console.log('Red bulb on');
    } else if (event.target.id === 'slowButton') {
      orange.classList.toggle('slow');
      red.classList.remove('stop');
      green.classList.remove('go');
      console.log('Orange bulb on');
    } else if (event.target.id === 'goButton') {
      green.classList.toggle('go');
      red.classList.remove('stop');
      orange.classList.remove('slow');
      console.log('Green bulb on');
    }
  })
})();


// ## Bonus
//
// Add **one** DOM event listener and **one** handler to log the state of each bulb.
//
// - When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
// - When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
//
// **TIP:** A click on only a button should cause a message to be logged to the console.
