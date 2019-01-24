// 1. Написать функцию, преобразующую число в объект.

var getObjectFromNumber = function (number) {
	try {
		if (isNaN(number)) throw new Error('Не числовое значение');
		if (number > 999) throw new Error('Не должно превышать 999');
	} catch(e) {
		console.error(e);
		return '';
	}
	
	var paramC = (number  - number % 100) / 100;
	number -= paramC * 100;
	var paramX = (number  - number % 10) / 10;
	number -= paramX * 10;

	result = {
		'one': number,
		'dec': paramX,
		'cent': paramC
	};

	return result;

}

console.log( getObjectFromNumber(125) );
console.log( getObjectFromNumber(78) );

// 2. Перенести функционал подсчета корзины на объектно-ориентированную базу
/* Сделаем корзину объектом c одним массивом товаров и 3 методами 
 - подсчёт суммы, очистка и добавление нового элемента */

var cart = {

	intoCart: [], 

	countCartPrice: function() {
		return this.intoCart.reduce((sum, current) => sum + current.quant * current.price, 0);
	},

	clearCart: function() {
		return this.intoCart.length = 0;
	},

	addItem: function(idNew, nameNew, priceNew, quantNew) {
		var newItem = {
			id: idNew, 
			name: nameNew, 
			price: priceNew, 
			quant: quantNew
		}
		return this.intoCart.push(newItem);
	}

}

cart.intoCart = [ 
	{id: 1001, name: 'рубашка', price: 3500, quant: 1},
	{id: 1002, name: 'майка', price: 550, quant: 2},
	{id: 1003, name: 'носки', price: 70, quant: 5}];

cart.addItem(1008, 'штаны', 2200, 1);

console.log( cart.countCartPrice() );	

// 3. Подумать над глобальными сущностями
/* До кризиса 2014 был счастливым владельцем интернет-магазина на дивжке advanceShop.
Товары обычно загружали в файлах scv, которые нам предоставляли поставщики.
Свойств у товара было много. Постараюсь перечислить основные */

item = {
	id: 1001, //артикул
	name: 'рубашка Дон Десадо', //наименование товара
	deckShort: 'Рубашка для работы и отдыха', // краткое описание
	deskLong: 'Прекрасная рубашка, которая не оставит равнодушным ни одного из...', // полное описание
	img: 'https://syte.ru/img/img01.jpg', // ссылка на изображение
	priceVendor: 1200, // цена закупки 
	priceCustomer: 2300, // розничная цена
	priceAction: 100, // скидка
	quant: 20, //  количество на складе
	color: 'Red', // цвет
	size: 56, // размер
	brend: 'ДольчеКабано', // бренд
	vendor: 'Шей Хрень Сунь', // поставщик
	weight: 220, // вес
	material: 'silk', // материал
	reviews: [
		{ name: 'Покупатель №1', text: 'Хороший товар' },
		{ name: 'Покупатель №2', text: 'Очень хороший товар' }
	]
}

console.log( item );	