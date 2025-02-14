//TODO Задание №1
// Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из других
// массивов.

// Функция должна создать объект из вложенных массивов, используя метод reduce().

// Первый элемент внутреннего массива, должен быть ключом, второй - значением объекта.

// Результат выведите в консоль.

// Например, для массива:

// [['a', 1], ['b', 2]]
// Вывод будет:

// {'a': 1, 'b': 2}
//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(arr) {
// }
// checkTask([
//   ["a", 1],
//   ["b", 2],
// ]);
//TODO Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

//? ПИСАТЬ КОД ЗДЕСЬ

//TODO Задание №3
// Напишите функцию checkTask(input), которая принимает в переменную input строку и возвращает ее в виде нумеронима.

// К примеру, если в параметр input передали данную строку:

// Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!
// Функция должна возвратить такой результат:

// С5й п2ь у п11, Т4о г2е - не б3, Е2и в4л п2ь т7й - То т3а т2е - с3!
// т.е. каждое слово, если оно длинее 4х букв, превращается в нумероним,
// первую и последнюю букву нужно оставить, а между ними, буквы заменить числом - количеством букв по середине.

// Используйте методы split(), map(), join()

//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(str) {
//   return str
//     .split(" ")
//     .map((el) => `${el[0]}${el.slice(1, -1).length}${el.slice(-1)}`)
//     .join(" ");
// }
// console.log(
//   checkTask(
//     "Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!"
//   )
// );

//TODO Задание №4
// Создайте функцию checkTask(arr), которая принимает в аргументы массив состоящий из строк и выводит
// в консоль новый массив состояший только из первых и последних букв каждой строки.

// Например, для массива:

// ['hi', 'goodbye', 'smile']
// Вывод будет:

// ['hi', 'ge', 'se']

// //? ПИСАТЬ КОД ЗДЕСЬ
// function checkTask(arr) {
//   return arr.map((el) => `${el[0]}${el.slice(-1)}`);
// }
// console.log(checkTask(["hi", "goodbye", "smile"]));

//TODO Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(arr, element) {
//   return arr.filter((el) => el !== element);
// }
// console.log(checkTask([2, "hello", true, "world", 5, "js"], "world"));

//TODO Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// function checkTask(str) {
//   let res = str.split("").reverse().join("");
//   return res === str;
// }
// console.log(checkTask("tenet"));

// Пример №2:
// Ввод: my gym
// Ответ: true

// function checkTask(polindrom) {
//   let res = polindrom.split("").reverse().join("").split("").reverse().join("");
//   return res === polindrom;
// }
// console.log(checkTask("my gym"));

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// function checkTask(polin) {
//   let res = polin.split("").reverse().join("").split(" ").join("");
//   return res === polin;
// }
// console.log(checkTask("nolan"));

//? ПИСАТЬ КОД ЗДЕСЬ

//TODO Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль
//  удвоенное значение аргумента до тех пор, пока оно не достигнет лимита,
//  и после этого вывести в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

//? ПИСАТЬ КОД ЗДЕСЬ

// let num = 50;
// while (num <= 1000) {
//   console.log(num);
//   num = num *= 2;
// }
// while (num > 50) {
//   num = num / 2;
//   console.log(num);
// }

//TODO Задание №8
// Напишите функцию checkTask(), которая будет генерировать пароли.

// Пароль должен быть из 8 случайных символов,
// В пароле должны быть как строчные и так и заглавные буквы.
// Пароль также должен содержать цифры.
// Функция возвращает результат
// Например:

// jXfPEU8t
// Дополнительное условие: н?аписать функцию как можно короче.
// Подсказка: погуглить и использовать модуль Math.random()

//? ПИСАТЬ КОД ЗДЕСЬ
// function checkTask(length = 8) {
//   let password =
//     "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq123456789";

//   for (let i = 0; i < password.length; i++) {

//   }
// }
// console.log(checkTask());

//TODO Задание №9
// Дан объект преобразуйте в строку.
// let obj = { a: 1, b: 2 }
// => a = 1, b = 2

//? ПИСАТЬ КОД ЗДЕСЬ
// function checkTask(obj) {
//   let res = [];
//   for (let i in obj) {
//     res.push(`${i} = ${obj[i]}`);
//   }
//   return res;
// }
// console.log(checkTask({ a: 1, b: 2 }).join(""));

//TODO Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(arr) {
//   let count = 0;
//   let res={}
//   for (let i of arr) {
//     if (i !== 1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]));

//TODO Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано
//  сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(arr) {
//   return arr.map((el) => arr.filter((indx) => el > indx).length);
// }
// console.log(checkTask([8, 1, 2, 2, 3]));

//TODO Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b);// 1, 0
//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(a, b) {
//   return ([a, b] = [b, a]);
// }
// console.log(checkTask(0, 1));

//TODO Задание №13
// Создайте функцию checkTask(arr), принимающую в аргументы массив вида:

// function checkTask(arr) {
//   let [{ user: a, age: num }] = arr;
//   return [a, num];
// }
// console.log(
//   checkTask([
//     { user: "Jon Snow", age: 20 },
//     { user: "Jane Eyre", age: 21 },
//     { user: "Bruce Wayne", age: 17 },
//     { user: "Dani Targaryen", age: 18 },
//   ])
// );

// [
//   { user: "Jon Snow", age: 20 },
//   { user: "Jane Eyre", age: 21 },
//   { user: "Bruce Wayne", age: 17 },
//   { user: "Dani Targaryen", age: 18 },
// ];
// C помощью деструктуризации и цикла выведите в консоль имена и возраст каждого объекта:

// Jon Snow  20
// Jane Eyre 21
// Bruce Wayne 17
// Dani Targaryen 18

//? ПИСАТЬ КОД ЗДЕСЬ

//TODO Задание №14

// Создать функцию checkTask, которая будет принимать в качестве аргумента строку, а затем
// говорить сколько в ней и каких символов, результат вернуть в виде объекта
// Например:

// console.log(checkTask('Hello'))
// {'H': 1, 'e': 1, 'l': 2, 'o': 1}
//? ПИСАТЬ КОД ЗДЕСЬ

// function checkTask(str) {
//   let obj = {};
//   for (let i of str) {
//     if (obj[i]) {
//       obj[i]++;
//     } else obj[i] = 1;
//   }
//   return obj
// }
// console.log(checkTask("Hello"));

//TODO Задание №15
// Расчет премии сотрудникам, дан массив с объектами
// let employees = [
//   {name: 'Jack', salary: 10000, overTime: 4},
//   {name: 'Tom', salary: 15000, overTime: 3},
//   {name: 'Jessica', salary: 20000, overTime: 9},
//   {name: 'Helen', salary: 25000, overTime: 2},
//   {name: 'Peter', salary: 30000, overTime: 7}
// ]
// salary- это заработная плата в месяц, overTime - количество часов, которое сотрудник
// взял
// сверхурочно.
// Задача: создать функцию checkTask, которая будет добавлять к основной зарплате
// сверхурочное
// время(1час=200$), функция должна принимать массив с объектами и возвращать
// также массив,
// но уже с измененными данными пример:
// [{name: 'Jack', salary: 10000, overTime: 4}] ->
// [{name: 'Jack', salary: 10800}]
//? ПИСАТЬ КОД ЗДЕСЬ

//TODO Задание №16
// Дан массив с объектами
// let users = [
//   { name: 'Jack', age: 35, work: 'IT-backend developer' },
//   { name: 'Helen', age: 35, work: 'Nurse' },
//   { name: 'Bob', age: 35, work: 'Driver' },
//   { name: 'Jessica', age: 35, work: 'IT-frontend developer' },
//   { name: 'Helga', age: 35, work: 'IT-HR' }
// ]
// Задача, создать функцию checkTask, которая будет рассылать сообщения пользователям,
// сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только
// тем людям, которые тем или иным образом относятся к IT-сфере
// Сообщение:

// "Здравствуйте ${name}, в магазине Sulpak идет акция скидка на все ноутбуки 10%"
//? ПИСАТЬ КОД ЗДЕСЬ
