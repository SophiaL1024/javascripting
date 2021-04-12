let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter = function () {
  let newArr=[];
  for (i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
      newArr.push(numbers[i]);
    }
  }
  return newArr;
};
let filtered = numbers.filter()
console.log(filtered);