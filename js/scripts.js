// Business Logic
function Order(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
  // this.customerName;
  // this.orderID;
}

Order.prototype.getPrice = function () {
  const pizzaSize = this.size
  const numberOfToppings = this.toppings.length
    if (pizzaSize === "small" && numberOfToppings === 1) {
      this.price = 10
    } else if (pizzaSize === "small" && numberOfToppings === 2) {
      this.price = 12  
    } else if (pizzaSize === "small" && numberOfToppings === 3) {
      this.price = 14
    } else if (pizzaSize === "small" && numberOfToppings > 3) {
      alert("3 is the maximum number of toppings")
    } else if (pizzaSize === "medium" && numberOfToppings === 1) {
      this.price = 13
    } else if (pizzaSize === "medium" && numberOfToppings === 2) {
      this.price = 15
    } else if (pizzaSize === "medium" && numberOfToppings === 3) {
      this.price = 17
    } else if (pizzaSize === "medium" && numberOfToppings > 3) {
      alert("3 is the maximum number of toppings")
    } else if (pizzaSize === "large" && numberOfToppings === 1) {
      this.price = 16
    } else if (pizzaSize === "large" && numberOfToppings === 2) {
      this.price = 18
    } else if (pizzaSize === "large" && numberOfToppings === 3) {
      this.price = 20
    } else if (pizzaSize === "large" && numberOfToppings > 3) {
      alert("3 is the maximum number of toppings")
    } else {
    alert("Enter something")
    }
    return this.price
    }

let order1 = new Order("small",["pepperoni", "sausage"],0);
    
let order2 = new Order("small", ["pepperoni"], 0);

let order3 = new Order("small", ["pepperoni", "sausage", "artichoke", "olives"], 0);

let order4 = new Order("medium", ["pepperoni", "sausage"], 0);

let order5 = new Order("medium", ["pepperoni", "sausage", "artichoke", "olives"], 0);

let order6 = new Order("large", ["pepperoni", "sausage", "artichoke", "olives"], 0);

let order7 = new Order("large", ["pepperoni", "sausage"], 0);

// UI Logic

$(document).ready(function () {
  $("form#orderForm").submit(function(event) {
    const usernameInput = $("input#username").val();
    const sizeInput = $("input:radio[name=size]:checked").val();
    const toppingsInput = $("input:form-check-input[name=toppings]:checked").val();
    $(".username").empty().append(usernameInput);
    if (usernameInput === "" || usernameInput === null) {
      alert ("Please enter your name")
      return false;
    }
    let result = price
    } 
    $(".result").empty().append(result);
    $("#output").show();
    event.preventDefault();
    });
});