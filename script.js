// import Tesseract from 'tesseract.js'

const canvas = document.getElementById('canvas');
const input = document.getElementById('image-url');

input.addEventListener('change', () => {
  const url = input.value;
  loadImage(url);
});

function loadImage(url) {
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = '*';
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    extractText();
  }
  img.src = url;
}

function extractText() {

  const ctx = canvas.getContext('2d');
  const dataURL = canvas.toDataURL();
  Tesseract.recognize(dataURL)
    .then(result => {
      console.log(result.text);
    });
}

