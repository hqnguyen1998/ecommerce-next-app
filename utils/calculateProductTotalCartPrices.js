export const calculateProductTotalCartPrices = (data = []) => {
  const totalPrice = data.reduce((acc, obj) => {
    return acc + obj.product_prices * obj.quantity;
  }, 0);

  return totalPrice;
};
