// 1. nome cognome chilometri da percorrere

const btn = document.getElementById('btn-submit');
const btnClose = document.getElementById('btn-close');
const ticket = document.querySelector('.text-ticket');
const info = document.querySelector('.ticket-info')

btn.addEventListener('click', function(){
  ticket.classList.remove ('d-none');
  
  // NAME
  let name = document.getElementById('text-name').value;
  let passenger = document.getElementById('person');
  passenger.innerHTML = name;

  // TICKET-CLASS
  let age = document.getElementById('age').value;
  let typeOfTicket = document.getElementById('ticket-class');

  typeOfTicket.innerHTML = age;

  //WAGON
  let carr = document.getElementById('wagon');
  let min = 1000;
  let max = 9999;
  let numRandom = Math.floor(Math.random() * (max - min + 1 )) + min;
  carr.innerHTML= numRandom;

  // TRAVEL-KM
  let travelKm = parseInt (document.getElementById('travel-km').value);
  let Kilometres = document.getElementById('kmetres');
  Kilometres.innerHTML= travelKm;

  // PRICE-TICKET
  const priceKm = 0.21;
  let priceTicket = parseFloat(travelKm * priceKm);
  let price = document.getElementById('prices');
  price.innerHTML = `${priceTicket} €` ;

  //DISCOUNT
  const U20 = 0.8;
  const O40 = 0.6;
  let u18 = priceTicket * U20;
  let o65 = priceTicket * O40;

  if (age == 'Under-18'){
    price.innerHTML = `${u18.toFixed(2)} €`;
  } else if(age == 'Over-65'){
    price.innerHTML = `${o65.toFixed(2)} €`;
  }
})

btnClose.addEventListener('click', function(){
  ticket.classList.add ('d-none')
});
