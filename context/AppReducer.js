import { addToCartFunc } from '../libs/addToCartFunc';

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
          carts: addToCartFunc(state.products.carts, action.payload),
        },
      };
    }
    case 'REMOVE_PRODUCT_CART': {
      return {
        products: {
          ...state.products,
          carts: removeProductFromCart(state.products.carts, action.payload),
        },
      };
    }
    default:
      return state;
  }
};

const removeProductFromCart = (carts, product) => {
  const filterCart = carts.filter((prod) => {
    if (prod._id === product._id) {
      if (prod.quantity >= 1) {
        let quantity = product.quantity - 1;

        return { ...prod, quantity: quantity };
      } else if (prod.quantity <= 0) {
        return prod._id !== product._id;
      } else {
        return prod;
      }
    }

    return prod;
  });

  return filterCart;

  // let number = product.quantity - 1;

  // console.log(number);

  // return [{ ...product, quantity: number }, ...filterCart];
};
