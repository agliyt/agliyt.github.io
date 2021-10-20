let settings = new Object();

let amount1 = document.getElementById("amount-1");
let amount3 = document.getElementById("amount-3");
let amount6 = document.getElementById("amount-6");
let amount12 = document.getElementById("amount-12");

function setAmount(button, amount) {
  amount1.style.background='#DFD2BF';
  amount3.style.background='#DFD2BF';
  amount6.style.background='#DFD2BF';
  amount12.style.background='#DFD2BF';
  button.style.background='#C5AB85';
  settings.amount = amount;
  console.log(settings);
}

let glazingNone = document.getElementById("glazing-none");
let glazingSugar = document.getElementById("glazing-sugar");
let glazingVanilla = document.getElementById("glazing-vanilla");
let glazingChocolate = document.getElementById("glazing-chocolate");

function setGlazing(button, glazing) {
  glazingNone.style.background='#DFD2BF';
  glazingSugar.style.background='#DFD2BF';
  glazingVanilla.style.background='#DFD2BF';
  glazingChocolate.style.background='#DFD2BF';
  button.style.background='#C5AB85';
  settings.glazing = glazing;
  console.log(settings);
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function countCart() {
  let count = readCookie("count");
  if (count === null) {
      return 0;
  }
  return count;
}

function addToCart(bun) {
  let count = countCart() + 1;
  let buns = readCookie("buns");
  if (buns === null) {
    buns = bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  } else {
    buns = buns + ',' + bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  }
  document.cookie = 'count=' + count.toString() + '; ' + 'buns=' + buns;
  console.log(document.cookie);
  console.log(countCart());
}