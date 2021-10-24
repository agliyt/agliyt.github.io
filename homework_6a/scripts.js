var settings = new Object();

var amount1 = document.getElementById("amount-1");
var amount3 = document.getElementById("amount-3");
var amount6 = document.getElementById("amount-6");
var amount12 = document.getElementById("amount-12");

function setAmount(button, amount) {
  amount1.style.background='#DFD2BF';
  amount3.style.background='#DFD2BF';
  amount6.style.background='#DFD2BF';
  amount12.style.background='#DFD2BF';
  button.style.background='#C5AB85';
  document.getElementById("price").innerHTML = '$' + amount * 3 + '.00';
  settings.amount = amount;
  console.log(settings);
}

var glazingNone = document.getElementById("glazing-none");
var glazingSugar = document.getElementById("glazing-sugar");
var glazingVanilla = document.getElementById("glazing-vanilla");
var glazingChocolate = document.getElementById("glazing-chocolate");

function setGlazing(button, glazing) {
  glazingNone.style.background='#DFD2BF';
  glazingSugar.style.background='#DFD2BF';
  glazingVanilla.style.background='#DFD2BF';
  glazingChocolate.style.background='#DFD2BF';
  button.style.background='#C5AB85';
  settings.glazing = glazing;
  console.log(settings);
}

var options = ['none', 'sugar', 'vanilla', 'chocolate'];

function randomPick() {
  var option = options[Math.floor(Math.random() * 4)];
  setGlazing(document.getElementById('glazing-' + option), option);
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function countCart() {
  var buns = readCookie("buns");
  if (buns === null) {
      return 0;
  }
  return buns.split(",").length;
}

function onLoad() {
  document.getElementById("cartNum").innerHTML = countCart();
}

function addToCart(bun) {
  var buns = readCookie("buns");
  if (buns === null) {
    buns = bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  } else {
    buns = buns + ',' + bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  }
  document.cookie = 'buns=' + buns;
  onLoad();
  console.log(document.cookie);
  console.log(countCart());
}