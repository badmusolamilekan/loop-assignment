let array = [10, 40, "Apple", 21, 42, 11, 56, 40, "Banana"];
sum = 0;
for (let i = 0; i < array.length; i++) {
  if (isNaN(array[i])) {
    console.log(`The element inside the array that is not a number is: ${array[i]}`);
  } else {
    if (array[i] % 2 === 0) {
      sum += array[i];
    } else {
      console.log(`The odd number in the array are ${array[i]}`);
    }
  }
}
console.log(`The sum of even number in the array is ${sum}`);






