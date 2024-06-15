const arrayTraversing = () => {
  const arr = [10, 20, 30, 40, 50, 60, 70];

  // Traversing using for loop
  console.log("using for loop");
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }

  // Traversing using map method
  console.log("Using map method");
  arr.map((ele) => {
    console.log(ele);
  });
};

arrayTraversing();
