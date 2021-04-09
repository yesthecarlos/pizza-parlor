function Order(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
  // this.customerName;
  // this.orderID;
}


Order.prototype.getPrice = function () {
  const pizzaSize = this.size
  const numberOfToppings = this.toppings.length - 1
    if (pizzaSize === "small" && numberOfToppings === 1) {
      this.price = 10
    } else if (pizzaSize === "small" && numberOfToppings === 2) {
      this.price = 12  
    } else if (pizzaSize === "small" && numberOfToppings === 3) {
      this.price = 14
    } else if (pizzaSize === "small" && numberOfToppings > 3) {
      alert("3 is the maximum number of toppings")
    } else {
    alert("Enter something")
    }
    return this.price
    }

let order1 = new Order("small",["pepperoni", "sausage"],0);
    
