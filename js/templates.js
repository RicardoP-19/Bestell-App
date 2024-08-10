async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html");
      let resp = await fetch(file);
      if (resp.ok) {
          element.innerHTML = await resp.text();
      } else {
          element.innerHTML = 'Page not found';
      }
  }
}


function generateImage(dish, index) {
    return /*html*/`
            <div id="${dish['id']}" class="menus">
              <img class="section-image" src="${dish['image']}" alt="Menu">
              <h2>${dish['title']}</h2>
              <div class="menu">
                <div class="menu-info">
                  <div class="menu-headline">
                    <h3><b>${dish['name']}</b></h3>
                    <img onclick="addToBasket(${index})" src="icon/plus.png" alt="Add">
                  </div>
                  <p>${dish['description']}</p>               
                  <p><b>${dish['price'].toFixed(2).replace(".", ",")} €</b></p>
                </div>
              </div>
            </div>
  `;     
}


function generateHTML(dish, index) {
    return /*html*/`
            <div class="menus">
              <div class="menu">
                <div class="menu-info">
                  <div class="menu-headline">
                    <h3><b>${dish['name']}</b></h3>
                    <img onclick="addToBasket(${index})" src="icon/plus.png" alt="Add">
                  </div>
                  <p>${dish['description']}</p>             
                  <p><b>${dish['price'].toFixed(2).replace(".", ",")} €</b></p>
                </div>
              </div>
            </div>
  `;     
}


function generateBasketMenu(basket, index) {
    return /*html*/`
              <div class="product-content">
                <div class="basket-product">
                  <div class="product-info">
                    <p><b>${basket['name']}</b></p>
                  </div>
                  <div>
                    <p>${basket['total'].toFixed(2).replace(".", ",")} €</p>
                  </div>
                </div>
                <div class="product-quantity">
                  <img onclick="amountMinus(${index})" src="icon/minus.png" alt="Add" />
                  <p>${basket['amount']}</p>
                  <img onclick="amountPlus(${index})" src="icon/icons8-plus-100.png" alt="Remove" />
                  <img onclick="deleteMenu(${index})" src="icon/mulleimer.png" alt="Delete" />
                </div>
              </div>
  `;         
}


function generateBasketPrice(priceTotal, sum, delivery) {
  return /*html*/ `
            <div class="basket-sum">
              <div class="basket-info">
                <div class="checkout-info">
                  <p><b>Zwischensumme</b></p>
                  <p>${sum.toFixed(2).replace(".", ",")} €</p>
                </div>
                <div class="checkout-info">
                  <p><b>Lieferkosten</b></p>
                  <p>${delivery.toFixed(2).replace(".", ",")} €</p>
                </div>
                <div id="price" class="checkout-info">
                  <p><b>Gesamt</b></p>
                  <p>${priceTotal.toFixed(2).replace(".", ",")} €</p>
                </div>
              </div>
              <button onclick="pay()" class="btn">Bezahlen ${priceTotal.toFixed(2).replace(".", ",")} €</button>
            </div>
  `;
}


function generateMobilePay(priceTotal) {
  return /*html*/ `
     <button onclick="mobilPayButton()" class="mobile-btn">Warenkorb ${priceTotal.toFixed(2).replace(".", ",")} €</button>
  `;
}