const front = [
  {
    name: `html`,
    value: 85,
  },
  {
    name: `css`,
    value: 70,
  },
  {
    name: `javascript`,
    value: 66,
  },
  {
    name: `bootstrap`,
    value: 80,
  },
  {
    name: `react`,
    value: 57,
  },
  {
    name: `git`,
    value: 35,
  },
  {
    name: `github`,
    value: 41,
  },
];
const desig = [
  {
    name: `figma`,
    value: 59,
  },
  {
    name: `ilustrator`,
    value: 55,
  },
  {
    name: `canva`,
    value: 77,
  },
];
function activateDesing() {
  desig.forEach((element) => {
    let nombre = element.name;
    let valor = element.value;
    let num = document.querySelector(`.number${nombre}`);

    let forma = document.querySelector(`.${nombre}`);
    forma.style.width = `${valor}px`;
    forma.style.background = `#9400aa`;
    forma.style.height = `5px`;
    forma.style.margin = `auto`;
    forma.style.borderRadius = `20px`;
    num.innerHTML = valor += `%`;
  });
}

function x() {
  front.forEach((element) => {
    let nombre = element.name;
    let num = document.querySelector(`.number${nombre}`);

    let forma = document.querySelector(`.${nombre}`);
    forma.style.width = `1px`;
    forma.style.background = `#9400aa`;
    forma.style.height = `5px`;
    forma.style.margin = `auto`;
    forma.style.borderRadius = `20px`;
    num.innerHTML = `00%`;
  });

  desig.forEach((element) => {
    let nombre = element.name;
    let num = document.querySelector(`.number${nombre}`);

    let forma = document.querySelector(`.${nombre}`);
    forma.style.width = `1px`;
    forma.style.background = `#9400aa`;
    forma.style.height = `5px`;
    forma.style.margin = `auto`;
    forma.style.borderRadius = `20px`;
    num.innerHTML = `00%`;
  });
}

function activateFront() {
  front.forEach((element) => {
    let nombre = element.name;
    let valor = element.value;
    let num = document.querySelector(`.number${nombre}`);
    let forma = document.querySelector(`.${nombre}`);
    forma.style.width = `${valor}px`;
    forma.style.background = `#9400aa`;
    forma.style.height = `5px`;
    forma.style.margin = `auto`;
    forma.style.borderRadius = `20px`;
    num.innerHTML = valor += `%`;
  });
}

function animateSVG() {
  const paths = document.querySelectorAll(`.cls-1`);
  paths.forEach((path) => {
    const lenght = path.getTotalLength();
    path.style.strokeDasharray = lenght;
    path.style.strokeDashoffset = lenght;
    path.style.animation = "draw 4s ease forwards";
  });
}

function y() {
  const paths = document.querySelectorAll(`.cls-1`);
  paths.forEach((path) => {
    const lenght = path.getTotalLength();
    path.style.animation = "none";
  });
}

/**  projectos nav barra */

let proyect = document.querySelector(`#proyect`);

let navapp = document.querySelector(`#NavApp`);
let navdesig = document.querySelector(`#NavDesig`);
let navweb = document.querySelector(`#NavWeb`);
let navall = document.querySelector(`#NavAll`);



let clear = document.querySelector(`#clear`);

let web1 = document.querySelector(`#web1`);
let web2 = document.querySelector(`#web2`);
let web3 = document.querySelector(`#web3`);
let desing1 = document.querySelector(`#desing1`);
let desing2 = document.querySelector(`#desing2`);
let desing3 = document.querySelector(`#desing3`);
let desing4 = document.querySelector(`#desing4`);
let app1 = document.querySelector(`#app1`);

function web() {
  let gg = web3.innerHTML;
  let rr = web1.innerHTML;
  let ff = web2.innerHTML;
  clear.style.display = `none`;

  proyect.innerHTML = ` <div> ${rr}</div> <div>${ff}</div> <div>${gg}</div>`;
}

function desing() {
  let ff = desing1.innerHTML;
  let rr = desing2.innerHTML;
  let ee = desing3.innerHTML;
  let tt = desing4.innerHTML;


  
  clear.style.display = `none`;
  proyect.innerHTML = `<div >${ff}</div> <div>${rr}</div><div>${ee}</div> <div>${tt}</div>`;
}

function app() {

  let rr = app1.innerHTML;
  app1.style.color = `red`
  clear.style.display = `none`;
  proyect.innerHTML = `<div>${rr}</div>`;
}

function todo() {
  clear.style.display = `none`;
  let dd = desing1.innerHTML;
  let ee = desing2.innerHTML;
  let ff = desing3.innerHTML;
  let gg = desing4.innerHTML;
  let cc = web3.innerHTML;
  let aa = web1.innerHTML;
  let bb = web2.innerHTML;
  let hh = app1.innerHTML;

  let text = `<div>${aa}</div><div>${bb}</div><div>${cc}</div><div>${dd}</div><div>${ee}</div><div>${ff}</div><div>${gg}</div><div>${hh}</div>`
  proyect.innerHTML = text

}



/** animaciion scroll */


ScrollReveal({ reset: true });
ScrollReveal().reveal('.bannner', { delay: 500 });
ScrollReveal().reveal('.contenedor-imagen', {delay: 700});
ScrollReveal().reveal('.img-container', {delay: 1000});
ScrollReveal().reveal('.box-info', {delay: 500});
ScrollReveal().reveal('.hobbie', {delay: 900});

ScrollReveal().reveal('.box-front', {delay: 700});
ScrollReveal().reveal('.boxdesing', {delay: 800});
ScrollReveal().reveal('.textex', {delay: 800});

ScrollReveal().reveal('.info', {delay: 800});
ScrollReveal().reveal('.formulario', {delay: 600});