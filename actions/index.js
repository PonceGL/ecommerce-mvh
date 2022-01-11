export const setMyCart = (payload) => ({
  type: "SET_CART",
  payload,
});

export const setEmptyCart = (payload) => ({
  type: "SET_EMPTY_CART",
  payload,
});

export const setUpdateCart = (payload) => ({
  type: "UPDATE_CART",
  payload,
});

export const setRemovedFromCart = (payload) => ({
  type: "REMOVE_FROM_CART",
  payload,
});

export const setOpenCart = (payload) => ({
  type: "SET_OPEN_CART",
  payload,
});

export const setCloseCart = (payload) => ({
  type: "SET_CLOSE_CART",
  payload,
});

export const setPricesToCart = (payload) => ({
  type: "SET_PRICES_TO_CART",
  payload,
});

export const setUpdatePrices = (payload) => ({
  type: "SET_UPDATE_PRICES",
  payload,
});

export const setShippingCost = (payload) => ({
  type: "SHIPPING_COSTS",
  payload,
});

export const setIitemsIliked = (payload) => ({
  type: "ITEMS_I_LIKED",
  payload,
});

export const setDeleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const setItemsLoaded = (payload) => ({
  type: "ITEMS_LOADED",
  payload,
});

export const setResetItemsLoaded = (payload) => ({
  type: "RESET_ITEMS_LOADED",
  payload,
});

export const setPurchasingData = (payload) => ({
  type: "UPDATE_PURCHASE_INFORMATION",
  payload,
});

export const setPurchaseSuccess = (payload) => ({
  type: "PURCHASE_SUCCESS",
  payload,
});
