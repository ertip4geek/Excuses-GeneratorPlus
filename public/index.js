/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excusa").innerHTML = generateExcuse();
  console.log("Hello From consola");
};
let generateExcuse = () => {
  let pronoum = ['En','un'];
  let subject = ['perro','Niño malo','Mark Zuckemberg','WC'];
  let action = ['se comio','rompio','copio','tiro'];
  let possetion = ['deberes','coche','zapatos','collar']

  let proIndx = Math.floor(Math.random() * pronoum.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);

  return pronoum[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndx];
}
