function addToBasket(index) {
  let dish = mydishes[index];  
  if (myBasket.includes(dish)) {
    dish['amount']++;   
  }else { 
    addToBasketIf(dish);
  }
  displayBasketMenu();
  menuCalculate(myBasket.indexOf(dish));
  renderBasketMenu();
  renderBasketPrice();
}


function addToBasketIf(dish) {
  if (myBasket.indexOf(dish) === -1) {
    dish['amount'] = 1;
    myBasket.push(dish);
  }
}


function displayBasketMenu() {
  document.getElementById('basket-empty').classList.add('d-none');
  document.getElementById('basket-full').classList.remove('d-none');
  document.getElementById('mobile').classList.remove('d-none');
  mobileClass();
}


function displayBasketEmpty() {
  if (myBasket.length === 0) {
    document.getElementById('basket-empty').classList.remove('d-none');
    document.getElementById('basket-full').classList.add('d-none');
    document.getElementById('mobilePay').classList.add('d-none');
    document.getElementById('mobile').classList.add('d-none');
  }else{
    renderBasketMenu();
    renderBasketPrice();
  }
  mobileClass();
}


function renderBasketMenu() {  
  let newBasket = document.getElementById('basket-menu');
  let mobilMenu = document.getElementById('mobile-menu');
  newBasket.innerHTML = '';
  mobilMenu.innerHTML = '';
  for (let index = 0; index < myBasket.length; index++) {
    let basket = myBasket[index];
    newBasket.innerHTML += generateBasketMenu(basket, index);
    mobilMenu.innerHTML += generateBasketMenu(basket, index);
  }
  mobileClass();
}


function renderBasketPrice() {
  let sum = 0;
  for (let index = 0; index < myBasket.length; index++) {
    let basket = myBasket[index];
    sum += basket.total;
  }
  let delivery = 2.00;
  let priceTotal = sum + delivery;
  renderBasketPriceGenerate(priceTotal, sum, delivery);
}


function renderBasketPriceGenerate(priceTotal, sum, delivery) {
  let newPrice = document.getElementById('basket-price');
  let mobilPrice = document.getElementById('mobile-price');
  newPrice.innerHTML = '';
  mobilPrice.innerHTML = '';
  newPrice.innerHTML = generateBasketPrice(priceTotal, sum, delivery);
  document.getElementById('mobile').innerHTML = generateMobilePay(priceTotal);
  mobilPrice.innerHTML = generateBasketPrice(priceTotal, sum, delivery);
}


function amountPlus(index) {
  let menu = myBasket[index];
  if (menu) {
    menu['amount']++;
    menuCalculate(index);
  }
  renderBasketMenu();
  renderBasketPrice();
}


function amountMinus(index) {
  let menu = myBasket[index];
  if (menu['amount'] > 1) {
    menu['amount']--;
  } else{ 
    if (menu['amount'] === 1) {
      deleteMenu(index);
    }
  }
  menuCalculate(index);
  renderBasketMenu();
  renderBasketPrice();
}


function deleteMenu(index) {
  let menu = myBasket[index];
  menu['amount'] = 0;
  myBasket.splice(index, 1);
  displayBasketEmpty();
  renderBasketPrice();
}


function menuCalculate(index) {
let menu = myBasket[index];
  if (menu) {
    menu['total'] = menu['price'] * menu['amount'];
  }
}


function mobileClass() {
  if(window.innerWidth <= 1100) {
    mobileClassIf();
  } else {
    document.getElementById('basket').classList.remove('d-none');
    document.getElementById('mobile').classList.add('d-none'); 
    document.getElementById('mobilePay').classList.add('d-none');
  }
  window.addEventListener('load', mobileClass);
  window.addEventListener('resize', mobileClass);
}


function mobileClassIf() {
  if (myBasket.length > 0) {
    document.getElementById('basket').classList.add('d-none');
    document.getElementById('mobile').classList.remove('d-none');
  } else {
    document.getElementById('basket').classList.add('d-none');
    document.getElementById('mobile').classList.add('d-none');
  }
}


function mobilPayButton() {
  document.getElementById('mobilePay').classList.remove('d-none');  
  renderBasketMenu();
  renderBasketPrice();
}


function pay() {
  document.getElementById('pay-section').classList.remove('d-none');
  document.getElementById('main-content').classList.add('d-none');
  document.getElementById('header-content').classList.add('d-none');
  document.getElementById('footer-content').classList.add('d-none');
  myBasket = []
  renderBasketMenu();
  renderBasketPrice();
  displayBasketEmpty();
}


function closeMobileBasket() {
  document.getElementById('mobilePay').classList.add('d-none');
}


function popUpClose() {
  document.getElementById('pay-section').classList.add('d-none');
  document.getElementById('main-content').classList.remove('d-none');
  document.getElementById('header-content').classList.remove('d-none');
  document.getElementById('footer-content').classList.remove('d-none');
}