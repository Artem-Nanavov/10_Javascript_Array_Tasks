/**
 * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
 * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Сложность задачи: 3 of 5
 *
 * @param {Array} array - Глубокий массив
 * @returns {Array}
 */
const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]