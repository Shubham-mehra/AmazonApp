// import React from "react";

// const stateContext =React.createContext();

import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class StateContextProvider extends Component {
  state = {
    productId: "Day",
    loginUser: true,
    cart: {
      "LGGram_Controller": { Quantity: 1 }
    }
  };



  componentDidMount(){
    console.log("after mount");
  }

  toggleTheme = () => {
    // console.log(value);
    this.setState(prevState => {
      return {
        productId: prevState.productId === "Day" ? "hello" : "Day"
      };
    });
  };
  addToCart = (tempProductId, quantity) => {
    console.log("custom");
    console.log(this.state.cart);
    // for (var i = 0; i < this.state.cart.length; i++) {
    //   if (this.state.cart[i].productId == tempProductId) {
    //     found = true;
    //     positionInCart = i;
    //     break;
    //   }
    // }
    console.log(tempProductId);
    const cart = Object.assign({}, this.state.cart);
    console.log(cart);
    console.log(cart[tempProductId]);
    console.log(typeof quantity);
    quantity =parseInt(quantity);
    if (cart[tempProductId] != undefined) {
      cart[tempProductId].Quantity = cart[tempProductId].Quantity + quantity;
    }
    else {
      cart[tempProductId] = { Quantity: quantity }
    }
    console.log(cart);

    this.setState(prevState => {
      return {
        cart: cart
      }
    })


    // this.state.cart.forEach(product=>{
    //   if(product.productId==x){
    //     found=true;
    //     break;
    //   }
    // });
    // if(fount){

    // }
    // console.log(x)
    // this.setState(prevState => {
    //   return {
    //     cart: x
    //   }
    // })
  }
  deleteProductfromCart = (deleteProductId) => {
    console.log(deleteProductId)
    const cart = Object.assign({}, this.state.cart);
    console.log("cart" + cart);
    delete cart[deleteProductId];
    this.setState(prevState => {
      return {
        cart: cart
      }
    })
  }
  incrementFromCart = (tempProductId, quantity) => {
    console.log("custom");
    console.log(this.state.cart);
    // for (var i = 0; i < this.state.cart.length; i++) {
    //   if (this.state.cart[i].productId == tempProductId) {
    //     found = true;
    //     positionInCart = i;
    //     break;
    //   }
    // }
    console.log(tempProductId);
    const cart = Object.assign({}, this.state.cart);
    console.log(cart);
    console.log(cart[tempProductId]);
    if (cart[tempProductId] != undefined) {
      cart[tempProductId].Quantity = quantity;
    }
    else {
      cart[tempProductId] = { Quantity: 1 }
    }
    console.log(cart);

    this.setState(prevState => {
      return {
        cart: cart
      }
    })


    // this.state.cart.forEach(product=>{
    //   if(product.productId==x){
    //     found=true;
    //     break;
    //   }
    // });
    // if(fount){

    // }
    // console.log(x)
    // this.setState(prevState => {
    //   return {
    //     cart: x
    //   }
    // })
  }
  render() {

    return (
      <Provider
        value={{
          productId: this.state.productId,
          loginUser: this.state.loginUser,
          cart: this.state.cart,
          toggleTheme: this.toggleTheme,
          addToCart: this.addToCart,
          incrementFromCart: this.incrementFromCart,
          deleteProductfromCart: this.deleteProductfromCart
          //   selectedID => {
          //     const count = Object.assign({}, this.state.count);
          //     console.log(selectedID);
          //     // cars[selectedID].price = cars[selectedID].price + 1;
          //     this.setState({
          //         count:selectedID
          //     });
          // }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StateContextProvider, Consumer as StateContextConsumer };

// const StateProvider =stateContext.Provider
// const StateConsumer =stateContext.Consumer

// export { StateProvider , StateConsumer}