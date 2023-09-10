// 1. nome cognome chilometri da percorrere

const btn = document.getElementById('btn-submit');
const btnClose = document.getElementById('btn-close');







btn.addEventListener('click', function(){
  let ticket = document.querySelector('.text-ticket');

  // NAME
  let name = document.getElementById('text-name').value;
  let passenger = document.getElementById('person');
  passenger.innerHTML = name;

  // TICKET-CLASS
  let age = document.getElementById('age').value;
  let typeOfTicket = document.getElementById('ticket-class');

  //WAGON
  let carr = document.getElementById('wagon');
  let min = 1000;
  let max = 9999;
  let numRandom = Math.floor(Math.random() * (max - min + 1 )) + min;
  carr.innerHTML=numRandom

  // TRAVEL-KM
  let travelKm = parseInt (document.getElementById('travel-km').value);
  let Kilometres = document.getElementById('kmetres');
  Kilometres.innerHTML= travelKm;

  // PRICE-TICKET
  const priceKm = 0.21;
  let priceTicket= travelKm * priceKm;
  let price = document.getElementById('prices');
  price.innerHTML = priceTicket;

  //DISCOUNT
  const U18 = 0.8;
  const O65 = 0.6;
  if(age == under 18)
  

  console.log(priceTicket);
  ticket.classList.remove ('d-none');

})
