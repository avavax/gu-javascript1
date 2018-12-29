function getMath() {
	var result = arguments[0];
	var lastArg = arguments.length - 1;
	var operation = arguments[lastArg];
	for (i = 1; i < lastArg; i++) {
		switch (operation) {
			case '+':
			result += arguments[i];
			break;
			case '-':
			result -= arguments[i];
			break;
			case '*':
			result *= arguments[i];
			break;
			case '/':
			result /= arguments[i];
			break;						
		}
	}
	return result;
}

console.log( getMath(1, 2, 3, 4, 5, '+') );
console.log( getMath(1, 2, 3, 4, 5, '-') );
console.log( getMath(1, 2, 3, 4, 5, '/') );
console.log( getMath(1, 2, 3, 4, 5, '*') );



