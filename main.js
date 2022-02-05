// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

createmodal(modal, modalBtn, closeBtn);

// Get modal element
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
var closeBtn2 = document.getElementsByClassName('closeBtn')[1];

createmodal(modal2, modalBtn2, closeBtn2);

// Get modal element
var modal3 = document.getElementById('simpleModal3');
// Get open modal button
var modalBtn3 = document.getElementById('modalBtn3');
// Get close button
var closeBtn3 = document.getElementsByClassName('closeBtn')[2];

createmodal(modal3, modalBtn3, closeBtn3);

// Get modal element
var modal4 = document.getElementById('simpleModal4');
// Get open modal button
var modalBtn4 = document.getElementById('modalBtn4');
// Get close button
var closeBtn4 = document.getElementsByClassName('closeBtn')[3];

createmodal(modal4, modalBtn4, closeBtn4);


var modal5 = document.getElementById('simpleModal5');
// Get open modal button
var modalBtn5 = document.getElementById('modalBtn5');
// Get close button
var closeBtn5 = document.getElementsByClassName('closeBtn')[4];

createmodal(modal5, modalBtn5, closeBtn5);



var modal6 = document.getElementById('simpleModal6');

var modalBtn6 = document.getElementById('modalBtn6');

var closeBtn6 = document.getElementsByClassName('closeBtn')[5];

createmodal(modal6, modalBtn6, closeBtn6);


var modal7 = document.getElementById('simpleModal7');

var modalBtn7 = document.getElementById('modalBtn7');

var closeBtn7 = document.getElementsByClassName('closeBtn')[6];

createmodal(modal7, modalBtn7, closeBtn7);


var modal8 = document.getElementById('simpleModal8');

var modalBtn8 = document.getElementById('modalBtn8');

var closeBtn8 = document.getElementsByClassName('closeBtn')[7];

createmodal(modal8, modalBtn8, closeBtn8);

var modal9 = document.getElementById('simpleModal9');

var modalBtn9 = document.getElementById('modalBtn9');

var closeBtn9 = document.getElementsByClassName('closeBtn')[8];

createmodal(modal9, modalBtn9, closeBtn9);



function createmodal(modal, modalbtn, closebtn){
  // Listen for open click
  modalbtn.addEventListener('click', open_modal);
  // Listen for close click
  closebtn.addEventListener('click', close_modal);
  // Listen for outside click
  window.addEventListener('click', outside_click);

  // Function to open modal
  function open_modal() {
    modal.style.display = 'block';
  }

  // Function to close modal
  function close_modal() {
    modal.style.display = 'none';
  }

  // Close If Outside Click
  function outside_click(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

}