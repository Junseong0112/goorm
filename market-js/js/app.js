// 빈 객체를 생성
// 객체는 key : value로 형성된다!
const cart = {};
// HTML 중에 menu이라는 아이디를 menu라는 변수에 지정
const menu = document.querySelector("#menu");
// HTML 중에 cart이라는 아이디를 cartDisplay라는 변수에 지정
const cartDisplay = document.querySelector("#cart");
// HTML 중에 total이라는 아이디를 totalDisplay라는 변수에 지정
const totalDisplay = document.querySelector("#total");

// 메뉴에 클릭 이벤트를 줄 건대 이런 아래와 같은 코드로 진행하고 싶어
menu.addEventListener("click", (e) => {
  // 클릭한게 button 태그가 맞다면
  if (e.target.tagName === "BUTTON") {
    // name이라는 변수는 button 속성에 있는 data-name (Coffee, Tea, Cake) 셋 중에 하나
    const name = e.target.getAttribute("data-name");
    // price라는 변수는 button 속성에 있는 data-price (3000, 2500, 4000) 셋 중에 하나
    const price = parseInt(e.target.getAttribute("data-price"));

    // 상단에 cart변수에 담아 빈 객체를 만들었는데 객체에 data-name을 갖고 있다면
    // 즉 예를 들면 커피를 이미 담았다면 커피 안에 count를 1을 추가한다
    if (cart[name]) {
      cart[name].count++;
    }
    // 내가 클릭한 name이 객체에 담겨있지 않다면
    // Coffee: {price : 3000, count: 1} 로 객체에 담아줘
    else {
      cart[name] = { price, count: 1 };
    }
    // key : value
    // 카트라는 값을 콘솔에 보여줘
    updateCart();
    console.log(cart);
    console.log(cart["Coffee"]);
    // {price: 3000, count: 1}
    // {price: 3000, count: 2}
  }
});

function updateCart() {
  cartDisplay.innerHTML = "";

  let total = 0;

  // for in 객체를 접근할 때 사용한 for문
  for (const name in cart) {
    // 각각 객체에 있는 이름을 얘기하는거야
    //  name = Coffee : {price : 3000, count : 1}
    // Coffee.count, Coffee.price
    const { price, count } = cart[name];
    // price : 3000
    // count : 1
    // 3000 * 1

    // total = 3000
    total += price * count;

    // item 변수는 새로운요소를 만들거야 div라는 새로운 요소를 만들고 싶어
    const item = document.createElement("div");

    // div.textContent = 디브안에 어떤 텍스트를 넣고 싶은데?
    // name * count
    item.textContent = `${name} x ${count} (${(
      price * count
    ).toLocaleString()}원)`;

    cartDisplay.appendChild(item);
  }

  totalDisplay.textContent = total.toLocaleString();
}
