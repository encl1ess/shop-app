const defaultState = {
  products: [],
  counter: 0,
  currentPage: 1,
  perPage: 9,
  

}

const reducer = (state = defaultState, action:any) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DEC': 
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

export default reducer;