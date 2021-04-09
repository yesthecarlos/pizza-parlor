function Order(size, toppings, price, customerName, orderID) {
  this.size = size;
  this.toppings = [];
  this.price;
  this.customerName;
  this.orderID;
}


Order.prototype.getPrice = function () {
  let pizzaSize = this.Order.size
  let numberOfToppings = array.length(this.Order.toppings)
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

let order1 = new Order("small", ["pepperoni", "sausage"])
    
