import taco from "./assets/taco.svg";
import "./styles.scss";

//This is the entry point of your App, happy coding!

const owo = `
  <img src=${taco} class="img"/> 
  <p>Love you, happy you don't have to do this again!</p>
  <br> Made by: Alejandra </br>`;

document.getElementById("root").innerHTML = owo;

console.log("Hello,  taco lover");
