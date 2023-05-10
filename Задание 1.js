let input = prompt("Введите число");
let number = +input;

if (isNaN(number)) {
    console.log("Упс, кажется, вы ошиблись");
} else if (typeof number === "number") {
    if (number % 2 === 0) {
        console.log(number + " - чётное число");
    } else {
        console.log(number + " - нечётное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}