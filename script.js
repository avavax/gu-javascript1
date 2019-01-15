// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 
  
var isSimple = function(a) {
	if (isNaN(a)) throw new Error('Не числовое значение');
	for (var i = 2, flag = true; i < a; i++) {
		if (a % i === 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

var x = 2;
while (x <= 100) {
	if (isSimple(x)) console.log( x );
	x++;
}

// 2. Организовать массив для хранения товаров в корзине

/* Поскольку пока не вполне понятно, в каком виде будут представлены товары в итоге,
предлагается простой вариант - в массиве лежат объекты с 4 свойствами:
артикул, название, цена единицы, количество. 
*/

var cart = [ 
	{id: 1001, name: 'рубашка', price: 3500, quant: 1},
	{id: 1002, name: 'майка', price: 550, quant: 2},
	{id: 1003, name: 'носки', price: 70, quant: 5}]

// 3. Организовать функцию countBasketPrice, которая будет считать стоимость корзины

/* Классический способ */

var countBasketPrice = function(cart) {
	for (var i = 0, result = 0; i < cart.length; i++) {
		result += cart[i].quant * cart[i].price;
	}
	return result;
}

console.log( countBasketPrice(cart) );

/* Или с использованием итератора и стрелочной функции */

var countBasketPrice2 = function(cart) {
	return cart.reduce((sum, current) => sum + current.quant * current.price, 0);
}

console.log( countBasketPrice2(cart) );

// 4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла

for (var i = 0; i < 10; console.log( i++ )) {}

// 5. Нарисовать пирамиду с 20 рядами с помощью console.log

for (var i = ''; 20 > i.length; console.log ( i += 'x') ) {}

