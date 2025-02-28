//

const CartReducer = (state, action) => {
  const existingProductIndex = state.findIndex(
    (item) => item.product.id === action.product.id
  );

  switch (action.type) {
    case "ADD":
      if (existingProductIndex !== -1) {
        return state.map((item) => {
          if (item.product.id === action.product.id) {
            return { ...item, quantity: item.quantity + action.quantity };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...state,
          { product: action.product, quantity: action.quantity },
        ];
      }

    case "REMOVE":
      return state.filter((item) => item.product.id !== action.product.id);

    case "INCREASE":
      return state.map((item) => {
        if (item.product.id === action.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

    case "DECREASE":
      return state
        .map((item) => {
          if (item.product.id === action.product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
};

export default CartReducer;
