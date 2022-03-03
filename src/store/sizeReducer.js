function sizeReducer(state = {size: []}, action){
  console.log(action)
  console.log(state);
  switch (action.type){
    case 'ADD_SIZE_TO_FILTER':
      return {...state, size: state.size.concat(action.payload)};
    case 'REMOVE_SIZE_FROM_FILTER':
      return {...state, size: state.size.filter(size => size !== action.payload )};
    default:
      return state;
  }
}

export default sizeReducer;