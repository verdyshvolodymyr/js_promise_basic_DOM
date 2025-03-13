'use strict';


const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.addEventListener('click', hendler);

const messageSuc = 'Promise was resolved!';
const messageErr = 'Promise was rejected!';

function first() {
  const div = document.createElement('div');
  div.className = 'message'
  div.textContent = messageSuc;

  body.append(div)
}

function second() {
  const div = document.createElement('div');
  div.className = 'message error-message'
  div.textContent = messageErr;

  body.append(div)
}

function hendler() {
  return new Promise((resolve, reject) => {

    resolve(first());
  })
}

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(second()), 3000);
});