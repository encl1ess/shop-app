const INC = "INC"
const defaultState = {
  counter: 0,
  cartProducts: []
}

const counterReducer = (state = defaultState, action:any) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

export default counterReducer;

export const inc = () => ({type: INC})