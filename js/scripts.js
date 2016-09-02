function Pizza(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.price = function () {
  var base = 5;

  if(this.pizzaSize === "small") {
    base = base + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "medium") {
    base += 5 + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "large") {
    base += 7 + (this.pizzaTopping.length * 2);
  };
  console.log(base);
  return base;
};

















$(document).ready(function() {
  $("form#pizzaSelector").submit(function(event) {
    event.preventDefault();
  }
}
