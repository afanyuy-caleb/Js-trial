let myarray = JSON.parse(localStorage.string);
const img_path = "../../official/my_website/images/Fruits/";
let html = '';

// console.log(myarray);

const section = document.querySelector('.images');

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

    <button class="add">
      Add to Cart
    </button>

  </div>
  `
  
});

section.innerHTML = html;

document.querySelectorAll('.')



