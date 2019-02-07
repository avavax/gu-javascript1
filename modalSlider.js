	
var modalElements = document.querySelector('[modal-win]');
var $overlay  = document.querySelector('.overlay');
var $modalImg = document.querySelector('.modal-img');
var $modalClose = document.querySelector('.modal-close');
var $handlerLeft = document.querySelector('.prev-arrow');
var $handlerRight = document.querySelector('.next-arrow');
var $slides = document.querySelector('.slider-modal').children;
var $modalContent = document.querySelector('.next-arrow');

var numSlide = 0;
var timer;

//  Вешаем обработчик на элемент, связанный с модальным окном
modalElements.addEventListener('click', function() {
	$overlay.style.display = 'flex';
    sliderInit();
});

// Инициализация слайдера при первом открытии модального окна
function sliderInit() {
	numSlide = 0;
	imgSrc = $slides[0].getAttribute('src');
	$modalImg.setAttribute('src', imgSrc);
	autoplay();
}

// Запуск автоповтора
function autoplay() {
	timer = setInterval(slideRight, 2000);
}

// Кадр вправо
function slideRight() {
	clearInterval(timer);
	(numSlide === $slides.length - 1) ? numSlide = 0 : numSlide++;
	imgSrc = $slides[numSlide].getAttribute('src');
	$modalImg.setAttribute('src', imgSrc);
	autoplay();	
}

// Вешаем обработку на кнопку вправо 
$handlerRight.addEventListener('click', slideRight);

// Кадр влево
function slideLeft() {
	clearInterval(timer);
	(numSlide === 0) ? numSlide = $slides.length - 1 : --numSlide;
	imgSrc = $slides[numSlide].getAttribute('src');
	$modalImg.setAttribute('src', imgSrc);	
	autoplay();	
}

// Вешаем обработку на кнопку влево 
$handlerLeft.addEventListener('click', slideLeft);

// Кнопка сворачивает модальное окно
$modalClose.addEventListener('click', function() {
  $overlay.style.display = 'none';
  clearInterval(timer);
});


