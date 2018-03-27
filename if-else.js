var yourName; //currently undefined.
var charClass; //currently undefined. Choose class: Knight, Wizard, Healer.

if((yourName !=='' && yourName !== undefined) && (charClass==='' || charClass ===undefined)){
  console.log("Hello, " + yourName + " , please select a class to start the game!");
}
else if((yourName !=='' && yourName !== undefined)&& (charClass === "Knight" || charClass === "Knight")){
  console.log("Welcome to the World of Proxytia, " + yourName +"\n");
  console.log("Hello, " + charClass + " " + yourName + ".\nYou may now attack with your weapon.");
}
else if((yourName !=='' && yourName !==undefined) && (charClass==="Healer" || charClass === "healer")){
  console.log("Welcome to the World of Proxytia, " + yourName +"\n");
  console.log("Hello, " + charClass + " " + yourName + ".\nYou may aid your wounded friends.");

}

else if((yourName !=='' && yourName !==undefined) && (charClass==="Wizard" || charClass==="wizard")){
  console.log("Welcome to the World of Proxytia, " + yourName +"\n");
  console.log("Hello, " + charClass + " " + yourName + ".\nCreate miracles to claim victory!");
  }

  else{
    console.log("Please input your name!");
    /*In the case where the name/class is undefined or empty ('')
    and/or when the name is invalid/empty but the charClass has value. */
  }
