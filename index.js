let lightOn = false;

function handelClick() {
  if (lightOn == true) {
    let buttonElement = document.getElementById("button");
    buttonElement.src = "./buttonoff.jpeg";

    let bulbElement = document.getElementById("bulb");
    bulbElement.src = "./pic_bulboff.gif";

    lightOn = !lightOn;
    //  alert("bohot achha ab on mat karna ")
  } else {
    let buttonElement = document.getElementById("button");
    buttonElement.src="./buttonon.jpeg"
    let bulbElement = document.getElementById("bulb");
    bulbElement.src = "./pic_bulbon.gif";
    lightOn = !lightOn;
    // alert("Beejli k bill tera baap bharega ")
  }
}
