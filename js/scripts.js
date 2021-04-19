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
    return this.price;
}

// UI Logic
$(document).ready(function () {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    const usernameInput = $("input#username").val();
    const sizeInput = $("input:radio[name=size]:checked").val();
    const toppingsInput = [];
    const form = document.getElementById('orderForm');

    form.querySelectorAll('input').forEach(function (input) {
      if(input.type === 'checkbox' && input.checked) {
        toppingsInput.push(input.value);
      }
    });
    // $.each($("input[name='toppings']:checked"), function(){
    //   toppingsInput.push($(this).val());
    
  
    // const toppingsInput = $("input:form-check-input[name=toppings]:checked").val();
    $(".username").empty().append(usernameInput);
    if (usernameInput === "" || usernameInput === null) {
      alert ("Please enter your name")
      return false;
    }
    let newOrder = new Order(sizeInput, toppingsInput);
    console.log(newOrder);
    let result = newOrder.getPrice();
    $(".result").empty().append("$" + result);
    $("#output").show();
    
    });
});