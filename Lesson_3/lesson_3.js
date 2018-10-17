// Задание 1

let i = 0;
while (i !== 100) {
    if (i > 1) {
        let j = 2;
        let status = true;
        while (j < i) {
            if (i % j === 0) {
                status = false;
                break;
            }
            j++;
        }
        if (status) {
            console.log(i);
        }
    }
    i++;
}
    
// Задание 2

i = 0;
do{
    if (i == 0) {
        console.log(i++ + " " + "это ноль");
        continue;
    }
    if (i % 2 == 0) {
        console.log(i++ + " " + "число четное");
        continue;
    }
    if (i % 2 != 0) {
        console.log(i++ + " " + "число нечетное");
        continue;
    }
} while (i <= 10);

// Задание 3

for (var count = 0; count <= 8; count++ & console.log(count))

// Задание 4

str = '';
for (let i = 0; i <= 20; i++) {
  str +='x';
  console.log(str);
}

// Задание 5

let prices = [2,3,4,5,7,9];

function countBasketPrice(price) {
let sum = 0;
for (let i = 0; i < price.length; i++) {
    sum += price[i];
    }
console.log(sum);
}
countBasketPrice(prices);