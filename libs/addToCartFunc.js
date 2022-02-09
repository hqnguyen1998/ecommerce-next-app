export const addToCartFunc = (carts, newProduct) => {
  const isProductExist = carts.filter((cart) => cart._id === newProduct._id);
  console.log(isProductExist);

  if (!isProductExist.length) {
    return [{ ...newProduct, quantity: 1 }, ...carts];
  }

  return carts.map((cart) => {
    if (cart._id === newProduct._id) {
      cart.quantity = cart.quantity + 1;
    }

    return cart;
  });
};
