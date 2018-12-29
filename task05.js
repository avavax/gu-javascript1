/* Поскольку с двумя аргументами как-то скучно, 
решил расширить задачу, сделав такие же функции 
с неограниченным количеством аргументов.
В случае с вычитанием и делением первый аргумент фиксируется, 
а остальные вычитаются из него (или делят его) */


var getSum = function() {
	var result = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

var getDiff = function() {
	var result = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		result -= arguments[i];
	}
	return result;
}

var getMult = function() {
	var result = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		result *= arguments[i];
	}
	return result;
}

var getDev = function() {
	var result = arguments[0];
	for (i = 1; i < arguments.length; i++) {
		result /= arguments[i];
	}
	return result;
}

console.log( getSum(1, 2, 3, 4, 5) );
console.log( getDiff(1, 2, 3, 4, 5) );
console.log( getMult(1, 2, 3, 4, 5) );
console.log( getDev(1, 2, 3, 4, 5) );

// если аргумента только два, как в ИД, то наши функции тоже прекрасно работают 

console.log( getSum(4, 5) );
console.log( getDiff(4, 5) );
console.log( getMult(4, 5) );
console.log( getDev(4, 5) );

// при одном аргументе функции возвращают его же
// при отсутствии аргументов - Undefined


