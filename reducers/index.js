const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        myCart: [...state.myCart, action.payload],
      };
    case "SET_EMPTY_CART":
      return {
        ...state,
        carIsEmpty: false,
        carIsOpen: false,
      };
    case "UPDATE_CART":
      return {
        ...state,
        myCart: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        myCart: state.myCart.filter(
          (item) => item.articulo_id !== action.payload
        ),
      };
    case "SET_OPEN_CART":
      return {
        ...state,
        carIsOpen: true,
      };
    case "SET_CLOSE_CART":
      return {
        ...state,
        carIsOpen: false,
      };
    case "SET_PRICES_TO_CART":
      return {
        ...state,
        shoppingCartPrices: [...state.shoppingCartPrices, action.payload],
      };
    case "SET_UPDATE_PRICES":
      return {
        ...state,
        shoppingCartPrices: action.payload,
      };
    case "SHIPPING_COSTS":
      return {
        ...state,
        shippingCost: action.payload,
      };
    case "ITEMS_I_LIKED":
      return {
        ...state,
        itemsIliked: [...state.itemsIliked, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        itemsIliked: state.itemsIliked.filter(
          (item) => item.articulo_id !== action.payload
        ),
      };
    case "ITEMS_LOADED":
      return {
        ...state,
        itemsLoaded: state.itemsLoaded.concat(action.payload),
      };
    case "RESET_ITEMS_LOADED":
      return {
        ...state,
        itemsLoaded: [],
      };
    case "UPDATE_PURCHASE_INFORMATION":
      return {
        ...state,
        purchasingData: action.payload,
      };
    case "PURCHASE_SUCCESS":
      return {
        ...state,
        myCart: [],
        shoppingCartPrices: [],
      };
    default:
      return state;
  }
};

export default reducer;
