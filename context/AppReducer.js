import { addToCartFunc } from '../utils/addToCartFunc';
import { calculateProductTotalCartPrices } from '../utils/calculateProductTotalCartPrices';
import { removeProductFromCart } from '../utils/removeProductFromCart';

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
      let carts = addToCartFunc(state.products.carts, action.payload);
      return {
        products: {
          ...state.products,
          carts: carts,
          totalPrice: calculateProductTotalCartPrices(carts, '+'),
        },
      };
    }
    case 'REMOVE_PRODUCT_CART': {
      let carts = removeProductFromCart(state.products.carts, action.payload);
      return {
        products: {
          ...state.products,
          carts: carts,
          totalPrice: calculateProductTotalCartPrices(carts, '-'),
        },
      };
    }
    default:
      return state;
  }
};
