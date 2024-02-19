let seatsLeft = 40;
let seatCount = 0;
const seatClass = "Economic";
const seatPrice = 550;
let totalPrice = 0;
let grandTotal = 0;
let discount = 0;
document.getElementById("seats-left").innerText = seatsLeft;
document.getElementById("seat-count").innerText = seatCount;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total").innerText = grandTotal;
const seats = document.getElementsByClassName("seat");
for (const seat of seats) {
  const singleSeat = seat.textContent.split("");
  const mainSingleSeat = singleSeat[23] + singleSeat[24];
  seat.addEventListener("click", seatHandler);
  function seatHandler() {
    if (seatCount >= 4 || seat.classList.contains("bg-[#1dd100]")) {
      return;
    }
    seat.classList.add("bg-[#1dd100]", "text-white");
    seatsLeft = seatsLeft - 1;
    seatCount = seatCount + 1;
    totalPrice = totalPrice + 550;
    grandTotal = grandTotal + 550;
    document.getElementById("seats-left").innerText = seatsLeft;
    document.getElementById("seat-count").innerText = seatCount;
    const showList = document.getElementById("show-list");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const div = document.createElement("div");
    p1.innerText = mainSingleSeat.toUpperCase();
    p2.innerText = seatClass;
    p3.innerText = seatPrice;
    div.append(p1, p2, p3);
    div.classList.add("flex", "justify-between");
    showList.append(div);
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total").innerText = grandTotal;
    const applyBtn = document.getElementById("apply-btn");
    if (seatCount >= 4) {
      applyBtn.disabled = false;
    }
    document
      .getElementById("phoneNumber")
      .addEventListener("keyup", checkNumber);
    function checkNumber(e) {
      const numValue = e.target.value;
      console.log(numValue);
      const mainBtn = document.getElementById("main-btn");
      if (seatCount > 0) {
        if (numValue !== "") {
          mainBtn.disabled = false;
        }
      }
    }
  }
}
document.getElementById("apply-btn").addEventListener("click", couponHandler);
function couponHandler() {
  const couponInput = document.getElementById("coupon-input");
  const couponInputValue = couponInput.value;
  if (couponInputValue === "NEW15") {
    discount = (totalPrice * 15) / 100;
    grandTotal = totalPrice - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const div = document.createElement("div");
    p1.innerText = "Discount";
    p2.innerText = discount;
    div.append(p1, p2);
    div.classList.add("flex", "justify-between");
    const ticketDiscount = document.getElementById("discount");
    ticketDiscount.append(div);
    const couponCode = document.getElementById("couponCode");
    couponCode.classList.add("hidden");
  } else if (couponInputValue === "Couple20") {
    discount = (totalPrice * 20) / 100;
    grandTotal = totalPrice - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const div = document.createElement("div");
    p1.innerText = "Discount";
    p2.innerText = discount;
    div.append(p1, p2);
    div.classList.add("flex", "justify-between");
    const ticketDiscount = document.getElementById("discount");
    ticketDiscount.append(div);
    const couponCode = document.getElementById("couponCode");
    couponCode.classList.add("hidden");
  } else {
    alert("Invalid Code");
  }
}
