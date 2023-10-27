function matchAction(x) {
  // Start coding here
  let result = {};
  result.addByX =  function addByX(y){
    return y+x;
  };

  result.subtractByX = function subtractByX(y){
    return y-x;
  };
return result;
};

// Uncomment โค้ดด้านล่างเพื่อดูผลลัพธ์ของการทำงาน

const addByTwo = matchAction(2);
console.log(addByTwo.addByX(1)); // => should return 3
console.log(addByTwo.addByX(2)); // => should return 4
console.log(addByTwo.addByX(3)); // => should return 5

const subtractByThree = matchAction(3);
console.log(subtractByThree.subtractByX(4)); // => should return 1
console.log(subtractByThree.subtractByX(6)); // => should return 3
console.log(subtractByThree.subtractByX(8)); // => should return 5
