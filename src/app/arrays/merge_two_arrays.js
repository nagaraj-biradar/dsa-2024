const merge_two_array = () => {
  const arr1 = [10, 20, 30, 40];
  const arr2 = [100, 200, 300, 400, 500, 600];
  let newArr = [];

  // using foor loop into new array

  //   for (let index = 0; index < arr1.length; index++) {
  //     newArr.push(arr1[index]);
  //   }
  //   for (let index = 0; index < arr2.length; index++) {
  //     newArr.push(arr2[index]);
  //   }

  // using spread operator
  //   newArr = [...arr1, ...arr2];

  // using while loop

  console.log(newArr);
};

merge_two_array();
