/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 *
 * !!! БЕЗ array.reverse() !!!
 *
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
const reverse = (array) => {
	const newArr = [];

	for (let i = array.length; i > 0; i--) {
		newArr.push(array[i - 1]);
	}

	return newArr;
};

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]