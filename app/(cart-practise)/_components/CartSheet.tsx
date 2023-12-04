"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingContext } from "@/context/ShoppingContext";
import CartItem from "./CartItem";

const CartSheet = () => {
  const { cartItems ,totalPrice, clearAll} = useShoppingContext();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant={"outline"}>
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription>Check your cart item</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {cartItems?.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-4 items-center gap-4">
                  <CartItem
                    id={item.id}
                    thumbnail={item.thumbnail}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                  />
                </div>
              </div>
            ))}
          </div>
          <SheetFooter>
            <SheetClose >
              <Button type="button">Total: {totalPrice}</Button>
              <Button variant="destructive" type="button" onClick={clearAll}>Clear All</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
