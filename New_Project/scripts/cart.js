
export let cartArray = [];

let item;
export function addToCart(myarray, id, quantity){
  
  item = {id, quantity};
  cartArray.push(item)

  updateStorage(); 
}

function updateStorage(){
  localStorage.cartData = JSON.stringify(cartArray);
}

export function rmFromCart(id){

  let index = 0;
  cartArray.forEach((key, ind) =>{
    if(key.id == id){
      item = key;
      index = ind;  
    }
  });

  if(item){
    cartArray.splice(index, 1)
  }
}

export function displayCart(cart_qty){

  updateStorage();
  let data = JSON.parse(localStorage.cartData)
  cart_qty.innerText = data.length;

  console.log(data);

}

export function delFromCart(id){

  let cartArray = JSON.parse(localStorage.cartData)

  const newArray = [];
  cartArray.forEach((item, index) =>{
    if (item.id != id){
      newArray.push(item);
    }
  })
  
  cartArray = newArray;

  localStorage.cartData = JSON.stringify(cartArray);
  return cartArray;
}