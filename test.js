/* var a = "aaabbc";
var set = new Set();
for (let i = 0; i < a.length; i++) {
  set.add(a[i]);
}
set.forEach((element) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === element) {
      count++;
    }
  }
*/
let arr = [1, 2, 3, 4, -1, -2, 1, 2, 9, -8, 9];
let i = 0;
let j = arr.length - 1;
while (i <= j) {
  if (arr[i] >= 0 && arr[j] >= 0) {
    j--;
  } else if (arr[i] >= 0 && arr[j] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  } else if (arr[i] < 0 && arr[j] < 0) {
    i++;
  }
}
console.log(arr);
