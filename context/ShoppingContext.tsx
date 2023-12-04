"use client";
import { createContext, useContext, useState, useEffect } from "react";
type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  thumbnail: string;
};

type ProductItem = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
};

interface ShoppingContextType {
  cartQty: number;
  totalPrice: number;
  cartItems: CartItem[];
  increaseQty: (id: number) => void;
  decreasetQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  removeCartItem: (id: number) => void;
  clearAll: () => void;
}

// create
const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

//custom hook to do outside the layout
export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

// provider for context
export const ShoppingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const jsonCartData = localStorage.getItem("cartItem");
      return jsonCartData ? JSON.parse(jsonCartData) : [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems?.reduce((qty, item) => qty + item.qty, 0);
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const increaseQty = (id: number) => {
    console.log("Increase => ", id);
    const currentCartItem = cartItems.find((item) => id === item.id);

    if (currentCartItem) {
      const newItem = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItem);
    }
  };

  const removeCartItem = (id: number) => {
    const currentCartItem = cartItems.findIndex((item) => id === item.id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItem, 1);

    setCartItems(newItems);
  };

  const decreasetQty = (id: number) => {
    console.log("decreasetQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);

    if (currentCartItem) {
      if (currentCartItem.qty === 1) {
        console.log(currentCartItem.qty);
        removeCartItem(id);
      } else {
        const newItem = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItem);
      }
    }
  };

  const addCartItem = (product: ProductItem) => {
    console.log("Products => ", product);
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id);

      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (product.id === item.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });

        setCartItems(newItems);
      } else {
        const newItem = { ...product, qty: 1 };
        setCartItems([...cartItems, newItem]);
      }
    }
  };

  const clearAll = () => {
    setCartItems([])
  }

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartQty,
        addCartItem,
        increaseQty,
        decreasetQty,
        removeCartItem,
        totalPrice,
        clearAll
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
