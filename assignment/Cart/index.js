const product = [
  {
    id: 0,
    image: "/assets/images.png",
    title: "Iphone",
    price: 120,
  },
  {
    id: 1,
    image: "/assets/html.png",
    title: "Iphone -1",
    price: 1200,
  },
  {
    id: 2,
    image: "/assets/viratkholi.jpg",
    title: "Iphone -2",
    price: 1,
  },
  {
    id: 3,
    image: "/assets/viratkholi.jpg",
    title: "Iphone-3",
    price: 130,
  },
  {
    id: 4,
    image: "/assets/viratkholi.jpg",
    title: "Iphone",
    price: 140,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

const rootEl = document.getElementById('root');
const cartItemEl = document.getElementById('cartItems');
const count = document.getElementById('count');
const totalItems = document.getElementById('totalItems');

let i = 0;
rootEl.innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class="box">
            <div class="img-box">
                <img class='images' src=${image}></img>
            </div>
        <div class="bottom">
            <p> ${title}</p>
            <h2>${price}.00</h2> ` +
            "<button onClick='addToCart(" + (i++) +")'> Add To Cart</button>" +
      `</div>
      </div>`
    );
  })
  .join("");


  let cart = [];

  const addToCart = (a) => {
    cart.push({...categories[a]});
    displayCart();
  }

  const delElement = (a) => {
    cart.splice(a, 1);
    displayCart();
  }
  
  const displayCart = (a)=>{
    let j = 0 ,total =0;
    count.innerHTML = cart.length;
    if (cart.length == 0){
        cartItemEl.innerHTML = "Your cart is empty";
        totalItems.innerHTML = "$" + 0 + ".00";
    }
    else{
        cartItemEl.innerHTML = cart.map((items)=>{
            var { image, title, price } = items;
            total = total + price;
            totalItems.innerHTML = "$" + total + ".00";
            return (
                `<div class="cart-item">
                    <div class="row-img">
                        <img src=${image} >
                    </div>
                    <p style='font-size:12px;'> ${title}</p>
                    <h2 style= 'font-size:15px;'> ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
  }
