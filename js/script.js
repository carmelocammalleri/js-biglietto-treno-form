// 1. nome cognome chilometri da percorrere

const btn = document.getElementById('btn-submit');
const btnClose = document.getElementById('btn-close');







btn.addEventListener('click', function(){
  let ticket = document.querySelector('.text-ticket');

  // NAME
  let name = document.getElementById('text-name').value;
  let passenger = document.getElementById('person');
  passenger.innerHTML = name;

  // TRAVEL-KM
  let travelKm = parseInt (document.getElementById('travel-km').value);
  let Kilometres = document.getElementById('kmetres');
  Kilometres.innerHTML= travelKm;

  // PRICE-TICKET
  const priceKm = 0.21;
  let priceTicket= travelKm * priceKm
  let price = document.getElementById('prices')
  price.innerHTML = priceTicket
  
  
  console.log(priceTicket);
  ticket.classList.remove ('d-none');

})
