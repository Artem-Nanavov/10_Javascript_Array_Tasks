/**
 * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 * Сложность задачи: 1 of 5
 *
 * @param { number } arraySize - размер массива
 * @param { any } value - значение для массива
 * @returns { any[] }
 */
const fill = (arraySize, value) => Array(arraySize).fill(value);

const data = 'a';
const valueToFill = 3;
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']