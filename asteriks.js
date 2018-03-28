//1. Assembling a row of stars

var rows1 = 5;

while (rows1 > 0){
  console.log("*");
  rows1--;
}

//2. Assembling stars with nested loops
var row2 = 10;
var count = row2;
var temp="";

while(row2 > 0){
  while(count > 0){
    temp = temp + "*";
    count--;
  }
  console.log(temp);
  row2--;
}

//3. Assembling a stair of stars with nested loops
var row3 = 5;
var temp = "";

while (row3 > 0){
  while(temp.length < row3){
    temp = temp + "*";
    console.log(temp);
  }
 row3--;
}
