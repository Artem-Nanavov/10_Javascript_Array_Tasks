/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Сложность задачи: 2 of 5
 *
 * @param {Array} array - массив, значения которого массивы пар
 * @returns {Array}
 */
const fromPairs = (array) => {
	const obj = {};

	array.forEach(item => obj[ item[0] ] = item[1]);

	return obj;
};

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }