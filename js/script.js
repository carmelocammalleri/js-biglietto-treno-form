// 1. nome cognome chilometri da percorrere

const btn = document.getElementById('btn-submit');
const btnClose = document.getElementById('btn-close')
const inputText = document.getElementById ('text-name');
let textName = document.getElementById('text-name');
let ticket = document.querySelector('.text-ticket');


btn.addEventListener('click', function(){
  ticket.classList.remove ('d-none');
  console.log(inputText.value);
  const name = inputText.ariaValueMax;
})

btnClose.addEventListener('click', function(){
  ticket.classList.add ('d-none');
})