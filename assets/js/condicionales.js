const image = document.querySelector('img');
let bordevisible = false;

image.addEventListener('click', () => {
  if (bordevisible) {
    image.style.border = 'none';
    bordevisible = false;
  } else {
    image.style.border = '2px solid red';
    image.style.borderRadius = '0px';
    bordevisible = true;
  }
});