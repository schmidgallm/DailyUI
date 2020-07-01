// Materialize Select
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

// Form mock submission
document.querySelector('#button').addEventListener('click', (e) => {
  e.preventDefault();

  // show modal
  const modal = document.querySelector('.modal');
  M.Modal.init(modal);

  // clear form after timeout
  setTimeout(() => {
    const form = document.querySelector('form').reset();
  }, 2000);
});
