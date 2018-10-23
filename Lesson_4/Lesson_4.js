let max = 999;
let digit = {
    число: +prompt('Введите число от 0 до 999'),
    единицы: 0,
    десятки: 0,
    сотни: 0,
};
if (digit.число <= 9){
    digit.единицы = digit.число;
} else if (digit.число <= 999){
    digit.единицы = Math.floor(digit.число % 10);
    digit.десятки = Math.floor(digit.число / 10 % 10);
    digit.сотни = Math.floor(digit.число / 100 % 10);
    console.log(digit);
}
else {
    digit.число > 999;
    console.log('Вы ввели число за диапазоном 0 - 999');
}