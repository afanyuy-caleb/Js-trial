import {delFromCart} from "./cart.js";

const img_path = "../../official/my_website/images/Fruits/";

let products = JSON.parse(localStorage.string);
let data = JSON.parse(localStorage.cartData);

// console.log(data);

let itemContainer = `<div class="item-number">
  ${data.length} Items
  </div>
`;

let id;

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let date1 = new Date();

let Actual_date = date1.toLocaleDateString([], options); 
let fast_price = 4.99;
let ver_fast = 9.99;

let amount = 0;
let shipping = 0;
let total = 0;
let newtotal = 0;

function page_content(data){

  data.forEach(cartItem =>{
    let id = cartItem.id;
    let matchPd;
  
    products.forEach((product)=>{
      if(product.id == id){
        matchPd = product;
        matchPd.quantity = cartItem.quantity; 
      }
    })
  
    amount += (matchPd.quantity * matchPd.price);
  
    itemContainer += `
      <div class="cart-item-cont" data-itemDetails="${matchPd.id}">
        <div class="del-date">
          Delivery date: ${Actual_date}
        </div>
        <div class="item-display">
          <img src="${img_path}/${matchPd.image}" />
  
          <div class="item-details">
            <h4 class="product-name">
              ${matchPd.name}
            </h4>
            <div class="pd-price">
              $${matchPd.price}
            </div>
            <div class="pd-qty">
              <span>
                Quantity: <span class="qty-label">${matchPd.quantity} </span>
              </span>
              <span data-update-pd="${matchPd.id}" class="qty-update update-link" >
                Update  
              </span>
              <span data-del-pd="${matchPd.id}" class="qty-update del-link" >
                Delete  
              </span>
            </div>
          </div>
          <div class="shipping-options">
            <h4>Choose a shipping option </h4>
            <div class="ship-values">
              
              <input type="radio" class="choice-input" name="ship-opt${matchPd.id}" id="free">
              <div class="choice">
                <label for="free"> Tuesday, January 9 <br>
                <span class="ship-option"> FREE Shipping </span>
                <label>
              </div>
            </div>
            <div class="ship-values">
              
              <input type="radio" class="choice-input" name="ship-opt${matchPd.id}" id="fast">
              <div class="choice">
                <label for="fast"> Saturday, January 6 <br>
                <span class="ship-option"> $${fast_price} - Shipping </span>
                <label>
              </div>
            </div>
            <div class="ship-values">
              
              <input type="radio" class="choice-input" name="ship-opt${matchPd.id}" id="very-fast" checked>
              <div class="choice">
                <label for="very-fast"> Wednesday, January 3 <br>
                <span class="ship-option"> $${ver_fast} - Shipping </span>
                <label>
              </div>
            </div>
  
          </div>
  
        </div>
  
      </div>
    `
  
  })
}

page_content(data);

let productdiv = document.querySelector('.product-container');
let priceSec = document.querySelector('.Price-Calculation');

productdiv.innerHTML = itemContainer;

const shipChoice = document.querySelectorAll('input');

let del_link = document.querySelectorAll('.pd-qty .del-link')
let item_div = document.querySelectorAll(".cart-item-cont");
let itemNb = document.querySelector('.item-number');

del_link.forEach(link =>{
  link.addEventListener('click', ()=>{
    
    let data = delFromCart(link.dataset.delPd);
    item_div.forEach((item)=>{
      if(item.dataset.itemdetails == link.dataset.delPd)
        item.remove();
      
    })

    itemNb.innerText = (data.length == 1)? data.length + ' Item': data.length + ' Items';
  })
})


// let priceDiv = `<h3> Order Summary </h3>`;

// if(data){
//   priceDiv += `
//   <div>
//     <span>
//       Items(${data.length}):
//     </span>
//     <span>
//       $${amount};
//     </span>
//   </div>
  
//   `
// }


// delete localStorage.cartData;
