let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordem crescente

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// Ordem decrescente

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2MultiplicadoPeloProximo = [];

for (let index = 0; index < numbers2.length; index += 1) {
    if ((index + 1) === numbers2.length) {
        numbers2MultiplicadoPeloProximo.push(numbers2[index] * 2);
    } else {
        numbers2MultiplicadoPeloProximo.push(numbers2[index] * (numbers2[index + 1]))
    }
}

console.log(numbers2MultiplicadoPeloProximo);
