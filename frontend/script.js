const API_URL = "http://10.0.2.15:3000/orders";

function orderFood(item) {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item })
  }).then(loadOrders);
}

function loadOrders() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("orders");
      list.innerHTML = "";
      data.forEach(order => {
        const li = document.createElement("li");
        li.innerText = order.item;
        list.appendChild(li);
      });
    });
}

loadOrders();

