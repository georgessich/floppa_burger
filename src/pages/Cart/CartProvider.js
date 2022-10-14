import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems;
    let itemWithoutSupps;
    let itemWithsupps;
    itemWithoutSupps = {
      amount: action.item.amount,
      id: action.item.id,
      img: action.item.img,
      supplements: [],
      price: action.item.price,
      roast: action.item.roast,
      title: action.item.title,
    };
    itemWithsupps = {
      amount: action.item.amount,
      id: `${action.item.id} + ${action.item.supplements
        .map((item) => item.title)
        .toString()}`,
      img: action.item.img,
      price: action.item.price,
      roast: action.item.roast,
      supplements: action.item.supplements,
      title: action.item.title,
    };
    const existingCartItemIndexWithoutSupps = state.items.findIndex(
      (item) =>
        action.item.supplements.length === 0 && item.id === action.item.id
       
    );
    const existingCartItemIndexWithSupps = state.items.findIndex(
      (item) =>
        action.item.supplements.length > 0 && item.id === action.item.id
        
    );
    const existingCartItemWithoutSupps = state.items[existingCartItemIndexWithoutSupps];
    const existingCartItemWithSupps = state.items[existingCartItemIndexWithSupps];
    console.log(existingCartItemIndexWithSupps)
    console.log(existingCartItemIndexWithoutSupps)
     console.log(action.item.supplements.length <= 0)
    if (action.item.supplements.length <= 0) {
      if (existingCartItemWithoutSupps) {
        const updatedItem = {
          ...existingCartItemWithoutSupps,
          amount: existingCartItemWithoutSupps.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndexWithoutSupps] = updatedItem;
      } else if (!existingCartItemWithoutSupps && action.item.supplements.length <= 0){
        updatedItems = state.items.concat(action.item);
      }
    } else if (action.item.supplements.length > 0) {
      if (existingCartItemWithSupps) {
        const updatedItem = {
          ...existingCartItemWithSupps,
          amount: existingCartItemWithSupps.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndexWithSupps] = updatedItem;
       
      } else {
        updatedItems = state.items.concat(itemWithsupps);
        console.log(updatedItems);
      }
    }
    console.log(action.item.id);
    console.log(action.item.supplements.map((item) => item.title).toString());
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
