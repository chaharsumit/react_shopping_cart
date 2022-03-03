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