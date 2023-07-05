/*Добавление класса active при нажатии на бургер*/
$(document).ready(function() {
	$('.header__burger').click(function(event) { 
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock'); /*Запретить контенту скролиться (блокировать прокрутку) при открытом меню*/
	});

	$('.header__link').click(function(e) {
		$('.header__burger, .header__menu').removeClass('active');
	});
}) ;
