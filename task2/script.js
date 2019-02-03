
// Для упрощения стилизация принята на bootstrap

// Формируем контейнер в который поместим результат
var $catalog = document.getElementById('catalog');
var $container = document.createElement('div');
$container.classList.add('container');
$catalog.appendChild($container);

// Создаём объект Корзина
var cart = {

	// Массив с содержимым
	intoCart: [], 

	// Вспомогательная функция, возвращает объект с количеством товаров и общей суммой
	countCartPrice: function() {
		var result = this.intoCart.reduce((res, current) => {
			res.quant += current.quant;
			res.sum += current.quant * current.price;
			return res;
		}, {quant:0, sum:0});
		return result;
	},

	// Вспомогательная функция для формирования класса row
	addRow: function() {
		var $row = document.createElement('div');
		$row.classList.add('row');
		$container.appendChild($row);
		return $row;	
	},

	// Вспомогательная функция для формирования и отображения класса col
	addCol: function(text, parent) {
		var $col = document.createElement('div');
		$col.classList.add('col-3');
		$col.textContent = text;
		parent.appendChild($col);
	},	

	// Функция, к-я выводит содержимое корзины
	showCart: function() {
		
		var allItems = this.countCartPrice();
		var total = (allItems.sum === 0) ? 'Корзина пуста' :
			'В корзине ' + allItems.quant + ' товаров на сумму ' + allItems.sum + ' рублей';

		// Выводим шапку
		if (allItems.sum !== 0) {
			var tabTitles = ['Наименование', 'Цена', 'Количество', 'Сумма'];
			var $row = this.addRow();
			tabTitles.forEach((item) => {
				this.addCol(item, $row);
			});
		};
		
		// Выводим таблицу
		this.intoCart.forEach((item) => {
			var $row = this.addRow();
			this.addCol(item.name, $row);
			this.addCol(item.price, $row);
			this.addCol(item.quant, $row);
			this.addCol(item.price * item.quant, $row);
		});

		// выводим итого
		var $row = this.addRow();
		$row.textContent = total;
	}
}


cart.intoCart = [ 
	{id: 1001, name: 'рубашка', price: 3500, quant: 1},
	{id: 1002, name: 'майка', price: 550, quant: 2},
	{id: 1003, name: 'носки', price: 70, quant: 5}];

cart.showCart();