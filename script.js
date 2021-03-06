//Sandbox API loginID: 745cGxMHJ, transaction key: 2Jm2258L9xPzSj32, key: Simon
//3 steps: Authorization, capture & settlement
//authorization - request to charge amount
//capture - flags funds for transfer
// settlement - transfers amount
//
var cardType = document.querySelector('#card');
var cardNumber = document.querySelector('#number');
var amount = document.querySelector('#amount');
var month = document.querySelector('#month');
var year = document.querySelector('#year');

var div = document.querySelector('#div');
var crime = document.querySelector('#crime');
var clist = document.querySelector('#clist'); //don't need this line to toggle list but to have future reference to it outside of jquery
crime.onclick = function(){
  $("#clist").toggle();
};
var disaster = document.querySelector('#disaster');
var dlist = document.querySelector('#dlist');
disaster.onclick = function(){
  $("#dlist").toggle();
};

var road = document.querySelector('#road');
var rlist = document.querySelector('#rlist');
road.onclick = function(){
  $("#rlist").toggle();
};

var fire = document.querySelector('#fire');
var flist = document.querySelector('#flist');
fire.onclick = function(){
  $("#flist").toggle();
};

var next = document.querySelector('#next');
next.onclick = function() {
  if(clist.value !== '' || dlist.value !== '' || rlist.value !== '' || flist.value !== ''){
    //display payment information
    //technically, in the background, the http should be ready to send the information to the desired organization
    $('#div').toggle();
    $('section').toggle();
  }
  else {
    alert('must select a category');
  }
};

var submit = document.querySelector('#submit');
submit.onclick = function(){ //information check for form data
  var cardDate = month.value + '/' + year.value;
  if(cardType.value === '' || cardNumber.value.length != 16 || amount.value === ''){
    alert("fields missing!");
    if(cardNumber.value.length != 16){
      var label = document.querySelector('#label');
      label.style.display = 'block';
      cardNumber.style.borderColor = 'red';
      cardNumber.style.outlineWidth = '0';
    }
    if(amount.value === ''){
      amount.style.borderColor = 'red';
      amount.style.outlineWidth = '0';
    }
    return;
  }
  createTransactionRequest();
};

//constructor
function createTransactionRequest(){
  this.name = '745cGxMHJ';
  this.transactionKey = '2Jm2258L9xPzSj32';
  var tr = new transactionRequest('authCaptureTransaction');
  alert('transaction requested');
}

function transactionRequest(type){
  this.transactionType = type;
  this.amount = amount.value;
  this.cardNumber = cardNumber.value;
  var cardDate = month.value + '/' + year.value;
  this.expirationDate = cardDate;
}

cardNumber.oninput = function(){
  if(cardNumber.value.length === 16)
    cardNumber.style.borderColor = 'white';
};

amount.oninput = function(){
  if(amount.value.length >= 1)
    amount.style.borderColor = 'white';
};

window.onclick = function(e){ //will prompt payment information
  //var section = document.querySelector('section');
  //section.style.display = 'block';
  //alert(e.target.getAttribute('class'));
};

next.addEventListener('mousedown', function(){
  next.style.borderStyle = 'inset';
});

submit.addEventListener('mousedown', function(){
  submit.style.borderStyle = 'inset';
});

next.addEventListener('mouseup', function(){
  next.style.borderStyle = 'outset';
});

submit.addEventListener('mouseup', function(){
  submit.style.borderStyle = 'outset';
});