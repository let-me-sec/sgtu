// 1) Создать массив 3 разными способами
let array1 = [1, 2, 3];
let array2 = Array.of(4, 5, 6);
let array3 = new Array(7, 8, 9);

// 2) Вывести на экран 5-й элемент массива и изменить его значение
console.log(array1[4]);
array1[4] = 10;

// 3) Узнать длину массива и вывести ее значение при наведении на любой элемент
let arraysLength = array1.length;
console.log(arraysLength);

// 4) Вывести все элементы массива, используя цикл for
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// 5) Создать 2 массива, объединить их в один и вывести на экран получившийся массив
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray);

// 6) Удалить последний член получившегося массива и вывести это значение на экран
let lastElement = mergedArray.pop();
console.log(lastElement);

// 7) Удалить последний член получившегося массива и вывести это значение на экран
let lastElement2 = mergedArray.pop();
console.log(lastElement2);

// 8) Добавить новый элемент в начало вашего объединенного массива
mergedArray.unshift(0);

// 9) Получить сегодняшнюю дату и вывести ее на экран
let currentDate = new Date();
console.log(currentDate);

// 10) Вывести сегодняшнюю дату в формате 11 ноября 2020 года
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = currentDate.toLocaleDateString('ru-RU', options);
console.log(formattedDate);

// 11) Написать функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function multiplyRandomNumbers() {
  let num1 = Math.floor(Math.random() * 51);
  let num2 = Math.floor(Math.random() * 51);
  return num1 * num2;
}
console.log(multiplyRandomNumbers());