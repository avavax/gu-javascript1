var func = function (a, b) {
	if (a >= 0 && b >= 0) {
		return a - b;
	} else if (a < 0 && b < 0) {
		return a * b;
	} else {
		return a + b;
	}
}

console.log( func(2, 3) );
console.log( func(-2, -3) );
console.log( func(-2, 3) );
console.log( func(2, -3) );


