import {addToCart, rmFromCart, displayCart} from './cart.js';

let myarray = JSON.parse(localStorage.string);
const img_path = "../../../official/my_website/images/Fruits/";
let html = '';

const section = document.querySelector('.images');

let options = '';
let i;
for(i = 1; i <= 10; i++){
  options = options + `
  <option value="${i}">${i}</option>
  `
}

myarray.forEach(element => {

  html = html + `
  <div class="image-section">
    <div class="image">
      <img src="${img_path}/${element.image}"/>
    </div>
    <h2 class="name">
      ${element.name}
    </h2>
    <div class="price_section">
      <p class="price">
        price: $${element.price}
      </p>
      <p class="discount">
        discount: $${element.discount}
      </p>
    </div>
    Quantity: <select name="pd_qty" id="pd_qty" data-qty-selected="${element.id}">
      ${options}
    </select>

    <button class="add" data-product-id="${element.id}">
      Add to Cart
    </button>

  </div>
  `
  
});

section.innerHTML = html;

const addbtn = document.querySelectorAll('.image-section button');
const cart_qty = document.getElementById('cart_qty');

let pd_qty = document.querySelectorAll('#pd_qty');

function qty_check(id){
  let qty_option;
  pd_qty.forEach(value=>{

    if(Number(value.dataset.qtySelected) == id){
      qty_option = value.value;      
    }    
})
return qty_option;
}

addbtn.forEach((btn, index) =>{

  btn.addEventListener('click', () =>{

    let id = Number(btn.dataset.productId);
    
    let product_qty = Number(qty_check(id));

    if(btn.innerText === 'Add to Cart'){
      
      btn.innerText = 'Remove from Cart'
      btn.classList.add('active')

      addToCart(myarray, id, product_qty);
      displayCart(cart_qty)
      
    }
    else if(btn.innerText === 'Remove from Cart'){
    
      btn.innerText = 'Add to cart';
      btn.classList.remove('active')

      rmFromCart(id)
      displayCart(cart_qty)
    }
  })
})


