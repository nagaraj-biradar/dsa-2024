const insertElement = () => {
  const arr = [10, 20, 30, 40, 50, 60, 70];
  const position = 3;
  const insertEle = 100;

  // using for loop
  for (let index = arr.length - 1; index >= 0; index--) {
    if (index >= position) {
      arr[index + 1] = arr[index];
      if (index == position) {
        arr[index] = insertEle;
      }
    }
  }

  //  using splice method
  arr.splice(4, 0, 200);

  console.log(arr);
};

insertElement();
