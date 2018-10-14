// Задание 1

let a = 1, b = 1, c, d;
c = ++a; console.log(c); console.log(a); // c = 2 a = 2 преинкремент добавляет 1 к переменной a
d = b++; console.log(d); console.log(b); // d = 1 b = 2 инкремент добавляет 1 к переменной b
c = (2+ ++a); console.log(c); console.log(a); // c = 5 a = 3 преинкремент добавляет 1 к переменной a
d = (2+ b++); console.log(d); console.log(b); // d = 4 b = 3 инкремент добавляет 1 к переменной a
console.log(a); // 3
console.log(b); // 3

// Задание 2

let a = 2;
let x = 1 + (a *= 2); // a = 2 * 2
console.log(x); // x = 5

// Задание 3

let a = +prompt("Введите число a:");
let b = +prompt("Введите число b:");
if((a >= 0) && (b >= 0)) {
    console.log(a - b);
} else if((a < 0) && (b < 0)) {
    console.log(a * b);
} else if((a < 0) && (b >= 0)) {
    console.log(a + b);
} else if((a >= 0) && (b < 0)) {
    console.log(a + b);
} 

// Задание 4

a = +prompt ('Введите число от 1 до 15');
switch (a) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;	
}
        
// Задание 5

function add(x, y)
{
    return(x + y);
}
function sub(x, y)
{
    return(x - y);
}
function div(x, y)
{
    return(x / y);
}
function mult(x, y)
{
    return(x * y);
}


// Задание 6

let arg1 = +prompt("Введите значение 1:");
let arg2 = +prompt("Введите значение 2:");
let operation = prompt("Какую операцию вы хотите выполнить?");
function mathOperation (arg1, arg2, operation){
    switch(operation) {
        case "сложение":
            return add(arg1, arg2);
            break;
        case "вычитание":
            return sub(arg1, arg2);
            break;
        case "деление":
            return div(arg1, arg2);
            break;
        case "умножение":
            return mult(arg1, arg2);
            break;
        }
}
console.log(mathOperation (arg1, arg2, operation));

// Задание 7

console.log(null == 0); // false В JavaScript null имеет смысл «ничего» или «значение неизвестно». А 0 это все же число.

// // Задание 8
let val = +prompt("Введите ваше число:");
let pow = +prompt("В какую степень возвести ваше число?");
function power(val, pow) {
    if(pow != 1) {
        return val *= power(val, pow - 1);
    } else if(pow = 1){
        return val;
    // } else if(pow = 0){
    //     let val = 1;
    //     return val;
    // } else if(pow < -1){
    //     return val = (1 / (power(val, pow + 1)));
    }
}

alert(power(val, pow));