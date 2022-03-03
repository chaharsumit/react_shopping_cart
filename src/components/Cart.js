import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { openCart, closeCart, deleteProductFromCart, incrementProductQuantity, decrementProductQuantity } from "../store/action";

function Cart(props) {
  let { products, isOpen } = props.cart;
  
  function close() {
    props.dispatch(closeCart());
  }
  
  function open() {
    props.dispatch(openCart());
  }

  function deleteItem(id){
    props.dispatch(deleteProductFromCart(id));
  }

  function increaseQuantity(id){
    props.dispatch(incrementProductQuantity(id));
  }

  function decreaseQuantity(id){
    props.dispatch(decrementProductQuantity(id));
  }

  if (!isOpen) {
    return <ClosedCart open={open} />;
  } else {
    return (
      <aside className="cart">
        <div onClick={close} className="close-btn">
          X
        </div>
        <div className="cart-body">
          <div className="cart-heading">
            <div className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="item-count">4</span>
            </div>
            <h2>Cart</h2>
          </div>

          {
            products.map(product => (
              <CartItem product={product} key={product.id} deleteItem={deleteItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
            ))
          }

          <div className="cart-checkout">
            <div>
              <p>SUBTOTAL</p>
              <p>$ 199.00</p>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </aside>
    );
  }
}

function ClosedCart(props) {
  return (
    <div className="close-cart">
      <span onClick={props.open} className="open-btn">
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="item-count">4</span>
        </div>
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
