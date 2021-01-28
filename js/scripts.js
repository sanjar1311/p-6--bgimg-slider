var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};



var images = ['43273','44741','44766','44768','44783','44882','46172','46281'];
var imgOutput = $_('.img-output');
var counter = 0;

var elControllerBtns = document.querySelectorAll('.btn');

elControllerBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    if(evt.target.classList.contains('left-btn')) {
      counter--
      if(counter < 0) {
        counter = images.length - 1
      }
      imgOutput.style.backgroundImage = `url(../img/${images[counter]}.jpg)`;
    }
    if(evt.target.classList.contains('right-btn')) {
      counter++
      if(counter >= images.length) {
        counter = 0
      }
      imgOutput.style.backgroundImage = `url(../img/${images[counter]}.jpg)`;
    }
  });
});

function nextSlide () {
  elControllerBtns.forEach(btn => {
        if(counter < 0) {
          counter = images.length - 1
        imgOutput.style.backgroundImage = `url(../img/${images[counter]}.jpg)`;
      }
        counter++
        if(counter >= images.length) {
          counter = 0
        }
        imgOutput.style.backgroundImage = `url(../img/${images[counter]}.jpg)`;
  });
}

setInterval(nextSlide, 2500);