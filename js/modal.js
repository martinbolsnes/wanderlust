const modal = document.getElementById('imgModal');
const img = document.getElementById('imgToClick');
const span = document.getElementsByClassName('close')[0];

img.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
