
// объект корзина
var cart = {

	// массив с содержимым
	intoCart: [], 

	// показываем корзину
	showCart: function() {

		var $jsСart= document.getElementById('js-cart');
		var $template = document.getElementById('template').children[0];
		var allQuant = 0;
		var allResult = 0;
		$jsСart.innerHTML = '';
		
		if (this.intoCart && this.intoCart.length) {
			// выводим шапку таблицы
			var $user = $template.cloneNode(true);
			$user.querySelector('.pcart-name').textContent = 'Наименование';
			$user.querySelector('.pcart-price').textContent = 'Цена за единицу';
			$user.querySelector('.pcart-quant').textContent = 'Количество';
			$user.querySelector('.pcart-result').textContent = 'Сумма';
			$jsСart.appendChild($user);

			// выводим таблицу с товаром
			this.intoCart.forEach((item) => {
				if (item.quant > 0) {
					var $user = $template.cloneNode(true);
					$user.querySelector('.pcart-name').textContent = item.name;
					$user.querySelector('.pcart-price').textContent = item.price;
					$user.querySelector('.pcart-quant').textContent = item.quant;
					$user.querySelector('.pcart-result').textContent = item.price * item.quant;
					allQuant += item.quant;
					allResult += item.price * item.quant;

					// обработчик для удаления товара
					$user.querySelector('.row').setAttribute('data-item', item.id);
					$user.addEventListener('click', remString);
					
					$jsСart.appendChild($user);					
				}
			});
		}

		// выводим итого
		var total = (allQuant === 0) ? 'Товаров в корзине нет' : 
			'В корзине ' + allQuant + ' товаров на сумму ' + allResult + ' пиастров';
		var $totalDiv = document.createElement('div');
		$totalDiv.classList.add('row');
		$totalDiv.textContent = total;
		$jsСart.appendChild($totalDiv);
	},

	// добавляем товар
	addItem: function(id) {
		var itemName ='', 
			itemPrice, 
			itemQuant;

		// поиск данных о товаре в кателоге
		catalog.forEach((el) => {
			if (el.id === id) {
				itemName = el.name;
				itemPrice = el.price;
			}
		});

		// обрабатываем отсутствие товара
		try {
			if (itemName === '') throw new Error('Выбранный товар отсуствует в каталоге');			
		} catch (e) {
			console.error(e);
			return;			
		}

		// проверяем есть ли уже товар в корзине, если есть - увеличиваем количество
		var isExist = false;
		for (var i = 0; i < this.intoCart.length; i++) {
			if (this.intoCart[i].id === id) {
				this.intoCart[i].quant++;
				isExist = true;
				break; 
			}
		}
		

		// если отсуствует - добавляем
		if (!isExist) {
			var item = {
				id: id,
				name: itemName,
				price: itemPrice,
				quant: 1
			}
			this.intoCart.push(item);
		}
	},

	// удаление товара (он остаётся в корзине, только количество = 0)
	remItem: function(id) {
		for (var i = 0; i < this.intoCart.length; i++) {
			if (this.intoCart[i].id === id) {
				this.intoCart[i].quant = 0;
			}
		}		
	}
}

// вешаем обработчик на кнопки add to cart
$addButtons = document.querySelectorAll('.mask__add');
$addButtons.forEach(($el) => {
	$el.addEventListener('click', () => {
		var id = +$el.getAttribute('data-item');
		cart.addItem(id);
		cart.showCart();
	});
});

// функция удаления элемента, которую вешаем на каждую строку
function remString(event) {
	$row = event.target.parentNode;
	id = + $row.getAttribute('data-item');
	cart.remItem(id);
	cart.showCart();
	console.log(id );
};

cart.intoCart = [];

/*cart.intoCart = [ 
	{id: 1001, name: 'рубашка', price: 3500, quant: 1},
	{id: 1002, name: 'майка', price: 550, quant: 2},
	{id: 1003, name: 'носки', price: 70, quant: 5}];*/

// объект каталог
var catalog = [
	{
		id: 1001,
		name: 'Товар 1',
		price: 12,
	},
	{
		id: 1002,
		name: 'Товар 2',
		price: 13,
	},
	{
		id: 1003,
		name: 'Товар 3',
		price: 14,
	},
	{
		id: 1004,
		name: 'Товар 4',
		price: 15,
	},
	{
		id: 1005,
		name: 'Товар 5',
		price: 16,
	},
	{
		id: 1006,
		name: 'Товар 6',
		price: 17,
	},
	{
		id: 1007,
		name: 'Товар 7',
		price: 18,
	},
	{
		id: 1008,
		name: 'Товар 8',
		price: 19,
	},
	{
		id: 1009,
		name: 'Товар 9',
		price: 20,
	}				
];


cart.showCart();

