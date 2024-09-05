'use strict'

let name;
let admin;

name = "John";
admin = name;

alert(admin);

let sity = prompt('Введите название города', 'sity');
let year = prompt('Введите год образования города', '1900');
let puple = prompt('Население города(число)', '1000');

let age = 2024 - year;

alert(`Городу ${sity} исполнилось ${age} лет  с момента его образования. Население ${puple} человек.`)

let r = prompt('Введите радиус круга', '1');

let s = 3.14*r*r;

alert(`площадь данного круга = ${s}`);

let a = +prompt('Введите первое число', '1')
let b = +prompt('Введите второе число', '1')

let sum = a+b;

alert(`сумма чисел = ${sum}`);
alert(`разница чисел = ${a-b}`);
alert(`произведение чисел = ${a*b}`);
alert(`частное чисел = ${a/b}`);