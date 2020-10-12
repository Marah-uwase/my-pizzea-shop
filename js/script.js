$(function () {
  $('.summary').hide();
  $('.cdata-overlay').hide();
//Get inputs
  $("#checkout").click(function () {
      let flavour = $(".flavour option:selected").val();
      let size = $("#size option:selected").val();
      let crust = $("#crust option:selected").val();
      let topping = $("#toppings option:selected").val();
      let number = $("#number").val();
      console.log(size);

      //Function order
      let order = (f, s, c, t, n, total) => {
          return {f, s, c, t, n, total};
      };

      //check price
      let price, totalPrice;
      switch (flavour) {
          case flavour = "maccaroni and cheese":
              switch (size) {
                  case size = "Small":
                      price = 8;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 7;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "chickentikka":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "periperi":
              switch (size) {
                  case size = "regular":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "tqp":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "boerewors":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "hawaiian":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
          case flavour = "mushroom":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
              }
              break;
          case flavour = "regina":
              switch (size) {
                  case size = "regular":
                      price = 4;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                  }
                  break;   
                  case size = "medium":
                      price = 5;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
                  case size = "large":
                      price = 6;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 3;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 4;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 5;
                      } else {
                          totalPrice = (price * number) + 6;
                      }
                      break;
              }
              break;
      }
      switch (toppings) {
          case topping = "tomato":
              totalPrice = totalPrice + 5;
              break;
          case topping = "onions":
              totalPrice = totalPrice + 5;
              break;
          case topping = "mushroom":
              totalPrice = totalPrice + 5;
              break;
          case topping = "greenpepper":
              totalPrice = totalPrice + 6;
              break;
          case topping = "olives":
              totalPrice = totalPrice + 60;
              break;
          case topping = "pineapple":
              totalPrice = totalPrice + 7;
              break;
          case topping = "salad":
              totalPrice = totalPrice + 4;
              break;
          case topping = "apple":
              totalPrice = totalPrice + 5;
              break;
          case topping = "mince":
              totalPrice = totalPrice + 4;
              break;
          case topping = "sausage":
              totalPrice = totalPrice + 7;
              break;
           case topping = "beef":
              totalPrice = totalPrice + 6;
              break;
          case topping = "chicken":
              totalPrice = totalPrice + 7;
          case topping = "spinach":
              totalPrice = totalPrice + 5;
              break;
          case topping = "spagheti":
              totalPrice = totalPrice + 8;
              break;

      }

      //Execute order function
      let newOrder = order(flavour, size, crust, topping, number, totalPrice);
      console.log(newOrder); // test func

      //create a new object
      // let myOrder = JSON.stringify(JSON.parse(newOrder));

      //Write to the order
      $('.summary').slideDown(2000);
      $('.cdata-overlay').slideUp();
      $('#list').slideDown();
      $('.deliver').show(1000);
      $('.delivernot').show(1000);

      $('#list').text(" ");
      $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
          + newOrder.s + "<br>" + "Crust :     "
          + newOrder.c + "<br>" + "Toppings :     "
          + newOrder.t + "<br>" + " Number of pizzas :    "
          + newOrder.n + "<br>" + "Total Price :  "
          + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
  });

  //Deliver
  $(".deliver").click(function () {
      $('.summary').slideUp();
      $('#list').slideUp();
      $('.summary').text("Provide location details").slideDown();
      $('.deliver').hide(1000);
      $('.delivernot').hide(1000);
      $('.cdata-overlay').slideDown();
  });


  //Pick Up
  $(".delivernot").click(function () {

  });

  //Scrollify
  $(function () {
      $.scrollify.move('#sum-order');
  });
});
