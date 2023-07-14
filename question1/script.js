const box = document.getElementById('box');
let isYellow = false;

box.addEventListener('click', () => {
  if (isYellow) {
    box.style.backgroundColor = 'red';
    box.style.width = '300px';
    box.style.height = '300px';
  } else {
    box.style.backgroundColor = 'yellow';
    box.style.width = '600px';
    box.style.height = '600px';
  }

  isYellow = !isYellow;
});
