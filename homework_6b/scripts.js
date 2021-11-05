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
  if (buns === null || buns === "") {
      return 0;
  }
  return buns.split(",").length;
}

function onLoad() {
  document.getElementById("cartNum").innerHTML = countCart();
}

function addToCart(bun) {
  var buns = readCookie("buns");
  if (buns === null || buns === "") {
    buns = bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  } else {
    buns = buns + ',' + bun + '+' + settings.amount.toString() + '+' + settings.glazing;
  }
  document.cookie = 'buns=' + buns;
  onLoad();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var cart = document.getElementById('cartItems');

var cartItems = [];
var amountOptions = [1, 3, 6, 12];
var glazingOptions = ['None', 'Sugar-milk', 'Vanilla-milk', 'Double-chocolate'];
var totalPrice = 0;

function displayCart() {
  var cookie = readCookie("buns");
  if (cookie != null && cookie != "") {
    var buns = cookie.split(",");
    for (var i = 0; i < buns.length; i++) {
      var customizations = buns[i].split("+");
      cartItems[i] = {
        bun: customizations[0],
        amount: customizations[1].toString(),
        glazing: customizations[2]
      };
    }
  }

  for (var i = 0; i < cartItems.length; i++) {
    var currItem = cartItems[i];

    var div = document.createElement('div');
    div.className = 'cartItem';
    
    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.classList.add("dropdown-amt");
    var dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropbtn';
    dropdownBtn.classList.add('dropdown-amt');
    dropdownBtn.innerHTML = currItem.amount + " &#x2B9F;";
    var dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.classList.add('dropdown-content-amt');
    for (var j = 0; j < amountOptions.length; j++) {
      num = amountOptions[j];
      if (Number(num) != Number(currItem.amount)) {
        var content = document.createElement('a');
        content.href = '#';
        content.innerHTML = num;
        dropdownContent.appendChild(content);
      }
    }
    dropdown.appendChild(dropdownBtn);
    dropdown.appendChild(dropdownContent);
    div.appendChild(dropdown);

    var label = "";
    var bunWords = currItem.bun.split('-');
    for (var j = 0; j < bunWords.length; j++) {
      if (bunWords[j] === 'gf') {
        label = label + ' (GF)';
      } else {
        label = label + ' ' + capitalizeFirstLetter(bunWords[j]);
      }
    }
    label = label.slice(1);

    var pic = document.createElement('img');
    pic.src = 'pics/' + currItem.bun + '.jpg';
    pic.alt = label + ' Bun Bun';
    div.appendChild(pic);

    var section = document.createElement('section');

    var title = document.createElement('span');
    title.className = 'big-label';
    title.innerHTML = label;
    section.appendChild(title);

    section.appendChild(document.createElement("br"));

    var glazingTitle = document.createElement('span');
    glazingTitle.innerHTML = 'Glazing: ';
    section.appendChild(glazingTitle);

    dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.classList.add("dropdown-glaze");
    var dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropbtn';
    dropdownBtn.classList.add('dropdown-glaze');
    if (currItem.glazing === 'none') {
      dropdownBtn.innerHTML = "None                     &#x2B9F;";
    } else if (currItem.glazing === 'sugar') {
      dropdownBtn.innerHTML = "Sugar-milk            &#x2B9F;";
    } else if (currItem.glazing === 'vanilla') {
      dropdownBtn.innerHTML = "Vanilla-milk           &#x2B9F;";
    } else {
      dropdownBtn.innerHTML = "Double-chocolate  &#x2B9F;";
    }
    var dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.classList.add('dropdown-content-glaze');
    for (var j = 0; j < options.length; j++) {
      if (options[j] != currItem.glazing) {
        var content = document.createElement('a');
        content.href = '#';
        content.innerHTML = glazingOptions[j];
        dropdownContent.appendChild(content);
      }
    }
    dropdown.appendChild(dropdownBtn);
    dropdown.appendChild(dropdownContent);
    section.appendChild(dropdown);

    div.appendChild(section);

    var close = document.createElement('span');
    close.className = 'close';
    close.setAttribute("onclick","deleteItem(" + i + ")");
    close.innerHTML = 'x';
    div.appendChild(close);

    var money = document.createElement('span');
    money.className = 'money';
    money.innerHTML = '$' + currItem.amount * 3 + '.00';
    div.appendChild(money);
    totalPrice += currItem.amount * 3;

    cart.appendChild(div);
  }

  resetTotal();
}

function resetTotal() {
  var subtotal = document.getElementById('subtotal');
  subtotal.innerHTML = 'Subtotal: $' + totalPrice + '.00';

  var taxes = Number((totalPrice *  0.07).toFixed(2));
  var taxesText = document.getElementById('taxes');
  taxesText.innerHTML = 'Taxes: $' + taxes;

  var totalSum = totalPrice + taxes + 5;
  var total = document.getElementById('total');
  total.innerHTML = 'Total: $' + totalSum;
}

function deleteItem(i) {
  var buns = "";
  for (var j = 0; j < cartItems.length; j++) {
    if (Number(i) != Number(j)) {
      currItem = cartItems[j];
      buns += ',' + currItem.bun + '+' + currItem.amount.toString() + '+' + currItem.glazing;
    }
  }
  if (buns != "") {
    buns = buns.slice(1);
  }
  document.cookie = 'buns=' + buns;

  cartItems = [];
  location.reload(); 
}