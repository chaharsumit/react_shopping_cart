export default function filterReducer(state = { selectedOrder: '' }, action){
  switch (action.type){
    case 'SELECT_ORDER_BY_FILTER':
      return {...state, selectedOrder: action.payload};  
    default: 
      return state;
  }
}