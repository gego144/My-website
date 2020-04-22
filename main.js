// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Get modal element
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
var closeBtn2 = document.getElementsByClassName('closeBtn')[1];

// Listen for open click
modalBtn2.addEventListener('click', openModal2);
// Listen for close click
closeBtn2.addEventListener('click', closeModal2);
// Listen for outside click
window.addEventListener('click', outsideClick2);

// Function to open modal
function openModal2() {
  modal2.style.display = 'block';
}

// Function to close modal
function closeModal2() {
  modal2.style.display = 'none';
}

// Close If Outside Click
function outsideClick2(e) {
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
}

// Get modal element
var modal3 = document.getElementById('simpleModal3');
// Get open modal button
var modalBtn3 = document.getElementById('modalBtn3');
// Get close button
var closeBtn3 = document.getElementsByClassName('closeBtn')[2];

// Listen for open click
modalBtn3.addEventListener('click', openModal3);
// Listen for close click
closeBtn3.addEventListener('click', closeModal3);
// Listen for outside click
window.addEventListener('click', outsideClick3);

// Function to open modal
function openModal3() {
  modal3.style.display = 'block';
}

// Function to close modal
function closeModal3() {
  modal3.style.display = 'none';
}

// Close If Outside Click
function outsideClick3(e) {
  if (e.target == modal3) {
    modal3.style.display = 'none';
  }
}

// Get modal element
var modal4 = document.getElementById('simpleModal4');
// Get open modal button
var modalBtn4 = document.getElementById('modalBtn4');
// Get close button
var closeBtn4 = document.getElementsByClassName('closeBtn')[3];

// Listen for open click
modalBtn4.addEventListener('click', openModal4);
// Listen for close click
closeBtn4.addEventListener('click', closeModal4);
// Listen for outside click
window.addEventListener('click', outsideClick4);

// Function to open modal
function openModal4() {
  modal4.style.display = 'block';
}

// Function to close modal
function closeModal4() {
  modal4.style.display = 'none';
}

// Close If Outside Click
function outsideClick4(e) {
  if (e.target == modal4) {
    modal4.style.display = 'none';
  }
}
