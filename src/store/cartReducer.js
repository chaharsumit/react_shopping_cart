export default function cartReducer(
  state = { products: [], isOpen: false },
  action
) {
  let arrProducts = [...state.products],
    idx;
  switch (action.type) {
    case "OPEN_CART":
      return { ...state, isOpen: !state.isOpen };
    case "CLOSE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "ADD_TO_CART":
      if (arrProducts.find(product => product.id === action.product.id)) {
        idx = arrProducts.findIndex(
          product => product.id === action.product.id
        );
        arrProducts[idx].quantity = arrProducts[idx].quantity + 1;
        return { ...state, products: arrProducts };
      } else {
        return { ...state, products: state.products.concat(action.product) };
      }
    case "DELETE_PRODUCT_FROM_CART":
      arrProducts = arrProducts.filter(
        product => product.id !== action.payload
      );
      return { ...state, products: arrProducts };
    case "INCREMENT_PRODUCT_QUANTITY_IN_CART":
      idx = arrProducts.findIndex(product => product.id === action.payload);
      arrProducts[idx].quantity = arrProducts[idx].quantity + 1;
      return { ...state, products: arrProducts };
    case "DECREMENT_PRODUCT_QUANTITY_IN_CART":
      idx = arrProducts.findIndex(product => product.id === action.payload);
      if (arrProducts[idx].quantity === 1) {
        return state;
      } else {
        arrProducts[idx].quantity = arrProducts[idx].quantity - 1;
        return { ...state, products: arrProducts };
      }
    default:
      return state;
  }
}
