//1. While Loop
var sentence1 = "I love coding";
var sentence2 = "I will become a fullstack developer";
var counter = 2;

console.log("First Loop");
while (counter <= 20){
  console.log(counter + " - " + sentence1);
  counter = counter + 2;
}

console.log("\n\nSecond Loop");
while (counter >= 2){
  console.log(counter + " - " + sentence2);
  counter = counter - 2;
}
console.log("\n\n");

//2. For Loop

console.log("First Loop");
for(x = 1; x <= 20; x++ ){

  console.log(x + " - " + sentence1);
  //Sentence1 and 2 have been defined on while loop.

}

console.log("\n\nSecond Loop");
for(y = 20; y >= 1; y--){
  console.log(y + " - " + sentence2);
}
console.log("\n\n");

//3. Odd and Even
var z = 1;


while (z <= 100){
  if(z%2 === 0){
    console.log(z + " - EVEN");
  }
  else{
    console.log(z + " - ODD");
   }

  z++;
}
console.log("\n\n");
z = 1; // resetting z's value

//counter + 2, multiple of 3.
while (z <= 100){
  if( z % 3 === 0){
    console.log(z + " IS A MULTIPLE OF 3");
  }
  else{
    console.log(z);
  }
  z = z+2;
}

//counter + 5, multiple of 6
console.log("\n\n");
z = 1; // resetting z's value

while(z<=100){
  if(z % 6 === 0){
      console.log(z + " IS A MULTIPLE OF 6");
  }
  else{
    console.log(z);
  }
  z = z+5;
}

//counter + 9, multiple of 10
console.log("\n\n");
z=1; // resetting z's value

while(z<=100){
  if(z % 10 === 0){
      console.log(z + " IS A MULTIPLE OF 10");
  }
  else{
    console.log(z);
  }
  z = z+9;
}
