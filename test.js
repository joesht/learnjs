// задача № 1
// дано: год
// вычислить: количество дней, прошедшее с текущего года по заданный год

// переменная
const year1 = 2018
const year2 = 1996

// логика  приложения
const days = (2018 - 1996) * 365 
//Вариант #2 ( c учетом високосного\невисокосного года)
const days1= (((2018-1996)-5) * 365) + (5 * 366)

// выход
console.log(days)
console.log(days1)
//-----

// задача № 2
// дано: двузначное число
// вычислить: первую и вторую цифру

// const num = 12;
// const first = …
// const second = …
// console.log(first); // 2
// console.log(second); // 1

// переменная 
const num = 12;
// логика  приложения
const first = 1 / 1
const second = 6 / 3 

// выход
console.log(first); 
console.log(second);



// Задача 3 
// Дано: массив со статусами задачи
// сделать:
//  - добавить новый статус
//  - отсортировать по алфавиту
//  - вывести чётные статусы на экран
// const statuses = [‘new’, ‘in progress’];
//  - добавить новый статус

// Массив
const statuses = ['ToDiscuss', 'Backlog', 'In progress', 'Testing','Tested'];

//Логика 
//  - добавить новый статус

statuses[statuses.length] = "Done";


// Добавляет элемент в конец массива
statuses.push("Need information")


//  - отсортировать по алфавиту
statuses.sort()
console.log(statuses)

//  - вывести чётные статусы на экран


for (var i = 0; i < statuses.length; i++) {
    console.log(statuses[i++] );
  }
