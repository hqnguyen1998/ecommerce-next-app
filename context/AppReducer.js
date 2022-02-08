export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_STORED': {
      return action.payload;
    }
    case 'LOAD_MORE_POSTS': {
      return {
        products: {
          ...state.products,
          limit: state.products.limit + state.products.increaseLimitBy,
        },
      };
    }
    case 'ADD_TO_CART': {
      return {
        products: {
          ...state.products,
          carts: [action.payload, ...state.products.carts],
        },
      };
    }
    default:
      return state;
  }
};
