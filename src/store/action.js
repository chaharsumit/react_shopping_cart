export function addSizeToFilter(size){
  return {
    type: "ADD_SIZE_TO_FILTER",
    payload: size
  }
}

export function removeSizeFromFilter(size){
  return {
    type: "REMOVE_SIZE_FROM_FILTER",
    payload: size
  }
}

export function selectOrderByFilter(order){
  return {
    type: "SELECT_ORDER_BY_FILTER",
    payload: order
  }
}

export function closeCart(){
  return {
    type: "CLOSE_CART",
  }
}

export function openCart(){
  return {
    type: "OPEN_CART",
  }
}

export function addProductToCart(product, id){
  return {
    type: "ADD_TO_CART",
    product: {
      ...product,
      id: id,
      quantity: 1,
    }
  }
}

export function deleteProductFromCart(id){
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: id
  }
}

export function incrementProductQuantity(id){
  return {
    type: "INCREMENT_PRODUCT_QUANTITY_IN_CART",
    payload: id
  }
}

export function decrementProductQuantity(id){
  return {
    type: "DECREMENT_PRODUCT_QUANTITY_IN_CART",
    payload: id
  }
}