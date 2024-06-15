const liner_search = () => {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80];
  const searchEle = 20;

  // using for loop
  //   for (let index = 0; index < arr.length; index++) {
  //     if (arr[index] == searchEle) {
  //       console.log(index);
  //       break;
  //     }
  //     }

  // using indexOf method
  console.log(arr.indexOf(searchEle));
};

liner_search();
