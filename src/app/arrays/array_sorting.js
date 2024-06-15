const ascending = () => {
  const arr = [19, 26, 36, 66, 98, 7, 74, 15, 66];
  // ascending order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

const descending = () => {
  const arr = [19, 26, 36, 66, 98, 7, 74, 15, 66];
  // descending Order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

const array_sorting = (condition) => {
  if (condition === "asc") {
    ascending();
  } else if (condition === "desc") {
    descending();
  }
};

array_sorting("desc");
