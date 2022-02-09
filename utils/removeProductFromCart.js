export const removeProductFromCart = (carts, product) => {
  let filterCart = carts.filter((prod) => prod._id !== product._id);

  if (product.quantity <= 1) {
    return filterCart;
  }

  let quantity = product.quantity - 1;

  return [{ ...product, quantity: quantity }, ...filterCart];
};
