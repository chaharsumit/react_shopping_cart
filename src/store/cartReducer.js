export default function cartReducer(state = { products: [], isOpen: false }, action){
  switch (action.type){
    case 'OPEN_CART':
      return {...state, isOpen: !state.isOpen};
    case 'CLOSE_CART':
      return {...state, isOpen: !state.isOpen};
    case 'ADD_TO_CART':
      return {...state, products: state.products.concat(action.product)};
    case 'DELETE_PRODUCT_FROM_CART':
      let productArr = [...state.products];
      productArr = productArr.filter(product => product.id !== action.payload);
      return {...state, products: productArr};
    default:
      return state;
  }
}