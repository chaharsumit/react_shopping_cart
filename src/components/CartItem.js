import React from 'react';

function CartItem(props) {
  let { product } = props;

  return (
    <div className='cart-item'>
      <img
        src={`/static/products/${product.sku}_2.jpg`}
        alt={product.title}
        width='80'
      />
      <div className='cart-item-details'>
        <p className='cart-item-name'>
          {product.title}
        </p>
        <p>X | {product.style}</p>
        <p>print Quantity: {product.quantity}</p>
      </div>
      <div className='cart-price'>
        <p className='cart-cross' onClick={() => props.deleteItem(product.id)}>x</p>
        <p className='price'>${product.price}</p>
        <div>
          <Increment product={product} increaseQuantity={props.increaseQuantity} />
          <Decrement product={product} decreaseQuantity={props.decreaseQuantity} />
        </div>
      </div>
    </div>
  );
}

function Increment(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={() => props.increaseQuantity(props.product.id)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
      />
    </svg>
  );
}
function Decrement(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={() => props.decreaseQuantity(props.product.id)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18 12H6'
      />
    </svg>
  );
}

export default CartItem;