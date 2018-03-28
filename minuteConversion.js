function konversiMenit(menit) {
  var hour= 0;

  if(menit >= 60){
    while(menit >= 60){
      hour++;
      menit = menit - 60;
    }
  }

  if (menit < 10){
    menit = "0"+menit;
  }



  return hour + ":" + menit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
