function init() {
  let menu = document.getElementById('menu-container');
  if(menu){
    menu.innerHTML = '';
    for (let index = 0; index < mydishes.length; index++) {
      let dish = mydishes[index];      
      if (dish['image']) {
        menu.innerHTML += generateImage(dish, index);
      }else {
        menu.innerHTML += generateHTML(dish, index);
      }
    }
  }
}
