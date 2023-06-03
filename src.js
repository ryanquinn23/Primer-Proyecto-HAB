'use strict';


String.prototype.replaceAt = function (i, character) {
  return (
    this.substring(0, i) + character + this.substring(i + character.length)
  );
};
//creamos una array de palabras , para los jugadores
const palabras = ['casa', 'algebra', 'chupete', 'horchata', 'coche'];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraGuion = palabra.replace(/./g, '_ ');

// /g = 'global'

const output = document.querySelector('#output');
const button = document.querySelector('#comprobar');
const input = document.querySelector('#letra');
const imgContainer = document.querySelector('section#img > img');

let cont = 6;
let imgPos = 0;
let images = [
  'ahorcado-2.jpeg',
  'ahorcado-3.jpeg',
  'ahorcado-4.jpeg',
  'ahorcado-5.jpeg',
  'ahorcado-6.jpeg',
  'ahorcado-7.jpeg',
];

button.addEventListener('click', () => {
  const letra = document.querySelector('#letra').value;
  let haFallado = true;

  for (const i in palabra) {
    if (letra === palabra[i]) {
      palabraGuion = palabraGuion.replaceAt(i * 2, letra);
      haFallado = false;
    }
  }

  if (haFallado) {
    cont--;
    document.querySelector('#intentos').innerHTML = cont;

    imgContainer.setAttribute('src', `./img/${images[imgPos]}`);

    imgPos++;

    if (cont === 0) {
      alert('has perdido');
      button.setAttribute('disabled', true);
    }
  } else if (palabraGuion.indexOf('_') < 0) {
    alert('has ganado, enhorabuena.');
    button.setAttribute('disabled', true);
  }

  output.innerHTML = palabraGuion;

  input.value = '';
});
