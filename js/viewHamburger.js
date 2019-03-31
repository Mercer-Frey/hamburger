
let size_b = Hamburger.SIZE_LARGE;
let stuff = Hamburger.STUFFING_CHEESE;
let hamburger = new Hamburger(size_b, stuff);
let burger = document.getElementById("burger");
let burgerSize = document.getElementById("burgerSize");
let mayo = document.getElementById("mayo");
let spice = document.getElementById("spice");
let price = document.querySelector(".price");
let col = document.querySelector(".col");


function calcAll(){
  price.innerHTML = hamburger.calculatePrice();
  col.innerHTML = hamburger.calculateCalories();
};
calcAll();
function checkBoxView (name, url, size){
  name.style.background = url;
  name.style.backgroundRepeat = "no-repeat";
  name.style.backgroundPosition = "center center";
  name.style.backgroundSize = size + "auto";
};

function checkBox(box) {
  let chbox = document.getElementById(box.id);
   if (chbox.checked) {
      if (box.value=='Small'){
      size_b = Hamburger.SIZE_SMALL; 
      burgerSize.style.width = "30%";
    } else {
        size_b = Hamburger.SIZE_LARGE; 
        burgerSize.style.width = "50%";
      }
    }
    hamburger.getSize(size_b);
    calcAll();
}

function checkBox2(box2) {
  let chbox1 = document.getElementById(box2.id);
    if (chbox1.checked) {
      if (box2.value=='Cheese'){
        stuff = Hamburger.STUFFING_CHEESE; 
        checkBoxView (burger, "url(img/cheese.png)", "90%");
      } else if (box2.value=='Salad'){
        stuff = Hamburger.STUFFING_SALAD;
        checkBoxView (burger, "url(img/salad.png)", "90%");
      } else {
        stuff = Hamburger.STUFFING_POTATO;
        checkBoxView (burger, "url(img/potato.png)", "90%");
      }
    }
    hamburger.getStuffing(stuff);
    calcAll();
}

function checkBox3(box3) {
  let chbox2 = document.getElementById(box3.id);
  if (chbox2.checked) {
    if (box3.value =='Mayonez'){
      hamburger.addTopping(Hamburger.TOPPING_MAYO);
      checkBoxView (mayo, "url(img/mayo.png)", "50%");
    } else {
      hamburger.addTopping(Hamburger.TOPPING_SPICE);
      checkBoxView (spice, "url(img/spice.png)", "50%");
    }
  } else {
      if (box3.value =='Mayonez'){
        hamburger.removeTopping(Hamburger.TOPPING_MAYO);
        checkBoxView (mayo, "url()", "50%");
      } else {
        hamburger.removeTopping(Hamburger.TOPPING_SPICE);
        checkBoxView (spice, "url()", "50%");
      }
  }
  calcAll();
}


