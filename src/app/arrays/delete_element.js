const deleteElement = () => {
  const arr = [10, 20, 30, 40, 50, 60];

  const position = 1;

  // using for loop
  //   for (let index = position; index < arr.length; index++) {
  //     arr[index] = arr[index + 1];
  //   }
  // arr.pop(); // arr.length = arr.length-1
  //     console.log(arr);

  // using splice
  // array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN;
  arr.splice(position, 1);
  console.log(arr);
};

deleteElement();
