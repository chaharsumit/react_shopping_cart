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
      id: id
    }
  }
}

export function deleteProductFromCart(id){
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: id
  }
}