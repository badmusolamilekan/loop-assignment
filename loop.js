let array = [10, 40, "Apple", 21, 42, 11, 56, 40, "Banana"];
sum = 0;
for (let i = 0; i < array.length; i++) {
  if (isNaN(array[i])) {
    continue;
  } else {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
}
console.log(`The sum of even number in the array is ${sum}`);






