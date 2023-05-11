let myMap = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);

for (let [key, value] of myMap.entries()) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}